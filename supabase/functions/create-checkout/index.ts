
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const logStep = (step: string, details?: any) => {
  const detailsStr = details ? ` - ${JSON.stringify(details)}` : '';
  console.log(`[CREATE-CHECKOUT] ${step}${detailsStr}`);
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    logStep("Function started");

    const { plan } = await req.json();
    logStep("Request body parsed", { plan });

    const stripeKey = Deno.env.get("STRIPE_SECRET_KEY");
    if (!stripeKey) {
      logStep("ERROR: STRIPE_SECRET_KEY not found");
      throw new Error("STRIPE_SECRET_KEY is not set");
    }
    logStep("Stripe key verified");

    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? ""
    );

    const authHeader = req.headers.get("Authorization");
    let user = null;
    let email = "guest@example.com"; // Email por defecto para invitados

    if (authHeader) {
      const token = authHeader.replace("Bearer ", "");
      const { data } = await supabaseClient.auth.getUser(token);
      user = data.user;
      if (user?.email) {
        email = user.email;
        logStep("User authenticated", { userId: user.id, email: user.email });
      }
    } else {
      logStep("Guest checkout initiated");
    }

    const stripe = new Stripe(stripeKey, { apiVersion: "2023-10-16" });

    // Configuración de precios según el plan
    const planConfig = {
      basico: {
        name: "Plan Básico",
        amount: 1499900, // $14,999 MXN en centavos
        currency: "mxn",
        description: "Diseño web responsive con hasta 5 secciones"
      },
      profesional: {
        name: "Plan Profesional", 
        amount: 2499900, // $24,999 MXN en centavos
        currency: "mxn",
        description: "Proyecto complejo con funcionalidades avanzadas"
      },
      premium: {
        name: "Plan Premium",
        amount: 3499900, // $34,999 MXN en centavos
        currency: "mxn", 
        description: "Solución completamente personalizada"
      }
    };

    const selectedPlan = planConfig[plan as keyof typeof planConfig];
    if (!selectedPlan) {
      throw new Error("Plan no válido");
    }

    logStep("Plan configuration selected", selectedPlan);

    // Verificar si existe un cliente en Stripe
    const customers = await stripe.customers.list({ email, limit: 1 });
    let customerId;
    if (customers.data.length > 0) {
      customerId = customers.data[0].id;
      logStep("Existing customer found", { customerId });
    }

    const origin = req.headers.get("origin") || "https://haby-three.vercel.app";
    
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      customer_email: customerId ? undefined : email,
      line_items: [
        {
          price_data: {
            currency: selectedPlan.currency,
            product_data: { 
              name: selectedPlan.name,
              description: selectedPlan.description
            },
            unit_amount: selectedPlan.amount,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${origin}/contacto?payment=success&plan=${plan}`,
      cancel_url: `${origin}/precios?payment=cancelled`,
      metadata: {
        plan: plan,
        user_id: user?.id || "guest",
      }
    });

    logStep("Checkout session created", { sessionId: session.id, url: session.url });

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logStep("ERROR in create-checkout", { message: errorMessage });
    return new Response(JSON.stringify({ error: errorMessage }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
