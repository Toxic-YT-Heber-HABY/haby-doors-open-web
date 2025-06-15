
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { ContactEmailRequest } from "./types.ts";
import { userConfirmationHeader, userProfessionalMessage, profesionalHeader, tablaResumen } from "./emailTemplates.ts";
import { logStep } from "./logger.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    logStep("Function started");

    const resendKey = Deno.env.get("RESEND_API_KEY");
    if (!resendKey) throw new Error("RESEND_API_KEY is not set");

    const resend = new Resend(resendKey);

    let requestData: ContactEmailRequest;
    try {
      requestData = await req.json();
    } catch (parseError) {
      logStep("ERROR parsing JSON request", { error: parseError.message });
      throw new Error(`Error al parsear la solicitud: ${parseError.message}`);
    }
    const { nombre, email, servicio, mensaje } = requestData;
    logStep("Request data received", { nombre, email, servicio });

    if (!nombre || !email || !servicio || !mensaje) {
      throw new Error(
        "Todos los campos requeridos deben estar presentes: nombre, email, servicio, mensaje"
      );
    }

    // Enviar correo a equipo HABY
    let emailToHaby;
    try {
      emailToHaby = await resend.emails.send({
        from: "HABY Contact <onboarding@resend.dev>",
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
      logStep("Email to HABY sent", { messageId: emailToHaby.data?.id, to: "info@habydoors.com" });
    } catch (e) {
      logStep("ERROR enviando correo a HABY", { error: e instanceof Error ? e.message : e });
      throw new Error("No se pudo enviar el correo a HABY. Inténtalo más tarde.");
    }

    // Enviar correo profesional y prioritario al usuario
    let emailToClient;
    try {
      emailToClient = await resend.emails.send({
        from: "HABY <onboarding@resend.dev>",
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
      logStep("Confirmation email sent", { messageId: emailToClient.data?.id, to: email });
    } catch (e) {
      logStep("ERROR enviando correo a USUARIO", { error: e instanceof Error ? e.message : e, to: email });
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
    const errorMessage = error instanceof Error ? error.message : String(error);
    logStep("ERROR in send-contact-email", { message: errorMessage });

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
