
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const logStep = (step: string, details?: any) => {
  const detailsStr = details ? ` - ${JSON.stringify(details)}` : '';
  console.log(`[SEND-CONTACT-EMAIL] ${step}${detailsStr}`);
};

interface ContactEmailRequest {
  nombre: string;
  email: string;
  telefono?: string;
  servicio: string;
  mensaje: string;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    logStep("Function started");

    const resendKey = Deno.env.get("RESEND_API_KEY");
    if (!resendKey) {
      throw new Error("RESEND_API_KEY is not set");
    }

    const resend = new Resend(resendKey);

    // Parsear los datos de la solicitud con manejo de errores
    let requestData: ContactEmailRequest;
    try {
      requestData = await req.json();
    } catch (parseError) {
      logStep("ERROR parsing JSON request", { error: parseError.message });
      throw new Error(`Error al parsear la solicitud: ${parseError.message}`);
    }
    
    const { nombre, email, telefono, servicio, mensaje } = requestData;

    logStep("Request data received", { nombre, email, servicio });

    if (!nombre || !email || !servicio || !mensaje) {
      throw new Error("Todos los campos requeridos deben estar presentes");
    }

    // Enviar correo a HABY
    const emailToHaby = await resend.emails.send({
      from: "HABY Contact <onboarding@resend.dev>",
      to: ["info@habydoors.com"],
      subject: `Nueva consulta de ${nombre} - ${servicio}`,
      html: `
        <h2>Nueva consulta recibida</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telefono || 'No proporcionado'}</p>
        <p><strong>Servicio de interés:</strong> ${servicio}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
        
        <hr>
        <p><em>Este mensaje fue enviado desde el formulario de contacto de HABY.</em></p>
      `,
    });

    logStep("Email to HABY sent", { messageId: emailToHaby.data?.id });

    // Enviar correo de confirmación al cliente
    const emailToClient = await resend.emails.send({
      from: "HABY <onboarding@resend.dev>",
      to: [email],
      subject: "Hemos recibido tu consulta - HABY",
      html: `
        <h2>¡Gracias por contactarnos, ${nombre}!</h2>
        <p>Hemos recibido tu consulta sobre <strong>${servicio}</strong> y nos pondremos en contacto contigo lo antes posible.</p>
        
        <h3>Resumen de tu consulta:</h3>
        <p><strong>Servicio de interés:</strong> ${servicio}</p>
        <p><strong>Tu mensaje:</strong> ${mensaje}</p>
        
        <p>Nuestro equipo revisará tu solicitud y te responderemos en menos de 24 horas.</p>
        
        <p>Si tienes alguna pregunta urgente, puedes contactarnos directamente:</p>
        <ul>
          <li>WhatsApp: <a href="https://wa.me/5653681237">56 5368 1237</a></li>
          <li>Email: info@habydoors.com</li>
        </ul>
        
        <p>¡Gracias por confiar en HABY!</p>
        
        <hr>
        <p><em>HABY - Abriendo nuevas puertas</em></p>
      `,
    });

    logStep("Confirmation email sent", { messageId: emailToClient.data?.id });

    return new Response(JSON.stringify({ 
      success: true,
      message: "Correos enviados exitosamente"
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logStep("ERROR in send-contact-email", { message: errorMessage });
    
    return new Response(JSON.stringify({ 
      error: errorMessage,
      success: false 
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
