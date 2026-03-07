import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { ContactEmailRequest } from "./types.ts";
import { userConfirmationHeader, userProfessionalMessage, profesionalHeader, tablaResumen } from "./emailTemplates.ts";
import { logStep } from "./logger.ts";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

// Input validation schema to prevent injection attacks
const ContactSchema = z.object({
  nombre: z.string()
    .trim()
    .min(1, "Nombre es requerido")
    .max(100, "Nombre debe tener menos de 100 caracteres")
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s'-]+$/, "Nombre contiene caracteres inválidos"),
  
  email: z.string()
    .trim()
    .email("Email inválido")
    .max(255, "Email debe tener menos de 255 caracteres")
    .toLowerCase(),
  
  telefono: z.string()
    .trim()
    .max(20, "Teléfono debe tener menos de 20 caracteres")
    .regex(/^[\d\s+()-]*$/, "Teléfono contiene caracteres inválidos")
    .optional()
    .or(z.literal("")),
  
  servicio: z.string()
    .trim()
    .min(1, "Servicio es requerido")
    .max(100, "Servicio debe tener menos de 100 caracteres"),
  
  mensaje: z.string()
    .trim()
    .min(10, "Mensaje debe tener al menos 10 caracteres")
    .max(5000, "Mensaje debe tener menos de 5000 caracteres"),
});

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    logStep("Function started");

    const resendKey = Deno.env.get("RESEND_API_KEY");
    if (!resendKey) throw new Error("RESEND_API_KEY is not set");

    const resend = new Resend(resendKey);

    let rawData: unknown;
    try {
      rawData = await req.json();
    } catch (parseError) {
      throw new Error("Solicitud inválida: JSON malformado");
    }

    // Validate and sanitize input using Zod schema
    let requestData: ContactEmailRequest;
    try {
      requestData = ContactSchema.parse(rawData);
    } catch (validationError) {
      if (validationError instanceof z.ZodError) {
        const errorMessages = validationError.errors.map(e => e.message).join(", ");
        throw new Error(`Datos inválidos: ${errorMessages}`);
      }
      throw new Error("Error de validación");
    }

    const { nombre, email, servicio, mensaje } = requestData;
    logStep("Valid request received", { servicio }); // Don't log PII

    // Enviar correo a equipo HABY
    let emailToHaby;
    try {
      emailToHaby = await resend.emails.send({
        from: "HABY <habyopenthedoors@gmail.com>",
        to: ["info@habydoors.com"], // puedes agregar más destinatarios aquí si lo deseas
        subject: `Nueva consulta de ${nombre} - ${servicio}`,
        html: `
          ${profesionalHeader}
          <div style="padding:30px 16px 16px 16px;background:#fff;font-family:sans-serif;">
            <div style="font-size:17px;color:#331777;margin:18px 0 12px 0">
              <b>Resumen completo de la solicitud recibida:</b>
            </div>
            ${tablaResumen(requestData)}
            <hr>
            <p style="font-size:13px;color:#b095e6;">Este mensaje fue enviado automáticamente desde el formulario web de HABY.</p>
          </div>
        `,
      });
      logStep("Email to HABY sent", { messageId: emailToHaby.data?.id });
    } catch (e) {
      logStep("ERROR sending email to HABY");
      throw new Error("No se pudo enviar el correo a HABY. Inténtalo más tarde.");
    }

    // Enviar correo profesional y prioritario al usuario
    let emailToClient;
    try {
      emailToClient = await resend.emails.send({
        from: "HABY <habyopenthedoors@gmail.com>",
        to: [email],
        subject: `¡Solicitud recibida! Seguimiento PRIORITARIO a tu petición [${servicio}]`,
        html: `
          ${userConfirmationHeader}
          <div style="padding:30px 20px 18px 20px;background:#fff;font-family:sans-serif;">
            ${userProfessionalMessage(nombre)}
            <div style="font-size:17px;color:#331777;margin:18px 0 12px 0">
              <b>Resumen de tu solicitud:</b>
            </div>
            ${tablaResumen(requestData)}
            <hr style="margin:10px 0 20px 0;border:0;border-bottom:1.5px dashed #eee;">
            <div style="color:#9c69ff;text-align:center;font-size:13px;">
              HABY® · Innovación para el bien común · habydoors.com<br>
              <a href="https://www.instagram.com/habyopenthedoors/" style="color:#a258e6;text-decoration:underline;">Instagram: @habyopenthedoors</a>
            </div>
          </div>
        `,
      });
      logStep("Confirmation email sent", { messageId: emailToClient.data?.id });
    } catch (e) {
      logStep("ERROR sending confirmation email");
      // Si ya se notificó a HABY, damos feedback explícito de fallo al usuario
      return new Response(
        JSON.stringify({
          error: "Tu solicitud fue recibida, pero hubo un problema enviando tu comprobante por email. Comunícate si deseas confirmación.",
          success: false,
        }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 500,
        }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Correos enviados exitosamente. ¡Gracias por tu confianza!",
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Error desconocido";
    logStep("ERROR in send-contact-email");

    return new Response(
      JSON.stringify({
        error: errorMessage,
        success: false,
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});
