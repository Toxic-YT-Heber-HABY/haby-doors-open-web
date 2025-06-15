import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const logStep = (step: string, details?: any) => {
  const detailsStr = details ? ` - ${JSON.stringify(details)}` : "";
  console.log(`[SEND-CONTACT-EMAIL] ${step}${detailsStr}`);
};

interface ContactEmailRequest {
  nombre: string;
  email: string;
  telefono?: string;
  servicio: string;
  mensaje: string;
  institucion?: string;
  area?: string;
  ubicacion?: string;
  proyecto_nombre?: string;
  proyecto_objetivo?: string;
  proyecto_estado?: string;
  proyecto_fechainicio?: string;
  proyecto_descripcion?: string;
  tipo_impacto?: string;
  grupos_beneficiados?: string;
  estimacion_beneficiarios?: string;
  ubicacion_impacto?: string;
  aliados_colaboradores?: string;
  recursos_adicionales?: string;
  plan_seguimiento?: string;
  plan_sustentabilidad?: string;
  web_o_redes?: string;
  motivacion?: string;
}

const profesionalHeader = `
  <div style="background: linear-gradient(90deg,#6741C9 0%, #C07EF1 100%);padding:28px 0 16px 0;text-align:center;">
    <img src="https://www.habydoors.com/favicon.ico" alt="HABY" style="width:48px;height:48px;border-radius:12px;box-shadow:0 4px 16px #6741c915;margin-bottom:12px;" />
    <h1 style="color:#fff;font-family:sans-serif;margin:0;">¡Hemos recibido tu solicitud!</h1>
    <p style="color:#fff;font-family:sans-serif;font-size:18px;margin:6px 0 0 0;">Seguimiento PRIORITARIO | Equipo HABY</p>
  </div>
`;

const userConfirmationHeader = `
  <div style="background: linear-gradient(90deg,#6741C9 0%, #C07EF1 100%);padding:28px 0 16px 0;text-align:center;">
    <img src="https://www.habydoors.com/favicon.ico" alt="HABY" style="width:48px;height:48px;border-radius:12px;box-shadow:0 4px 16px #6741c915;margin-bottom:12px;" />
    <h1 style="color:#fff;font-family:sans-serif;margin:0;">¡Gracias por tu confianza!</h1>
    <p style="color:#fff;font-family:sans-serif;font-size:19px;margin:8px 0 0 0;">Seguimiento PRIORITARIO a tu solicitud | Equipo HABY</p>
  </div>
`;

const userProfessionalMessage = (nombre: string) => `
  <div style="color:#24104c;padding:18px 0 12px 0;">
    <p style="font-size:18px;font-weight:600;">¡Hola ${nombre}!</p>
    <p style="font-size:17px;margin-top:0;margin-bottom:14px;">
      Hemos recibido <b>tu solicitud</b> y la registramos con máxima prioridad.<br>
      El equipo HABY analizará tu petición y, en breve, te responderá a este mismo correo.<br><br>
      <span style="color:#6741C9;font-weight:500">¡Tu proyecto nos emociona!</span>
    </p>
    <ul style="color:#331777;font-size:15px;margin-bottom:10px;">
      <li>✅ Revisión personalizada por nuestro equipo.</li>
      <li>✅ Te acompañaremos en cada etapa.</li>
      <li>✅ Contacto rápido si hay información adicional necesaria.</li>
    </ul>
    <p style="margin-top:14px;font-size:15px;color:#8879b3;">
      Si tu petición es <b>urgente</b>, responde a este correo o contáctanos por WhatsApp: <a href="https://wa.me/5653681237" style="color:#12b26a;font-weight:600;">56 5368 1237</a>
    </p>
  </div>
`;

const campo = (label: string, value?: string) =>
  value
    ? `<tr>
        <td style="padding:5px 16px;font-weight:600;color:#441e88;width:190px;border-bottom:1px solid #eee">${label}</td>
        <td style="padding:5px 16px;color:#2d173a;border-bottom:1px solid #eee">${value}</td>
      </tr>`
    : "";

const tablaResumen = (data: ContactEmailRequest) => `
  <table width="100%" cellpadding="0" cellspacing="0" style="margin:14px 0 25px 0;font-family:sans-serif;border-collapse: collapse;box-shadow:0 2px 10px #e3d2f433;">
    <tbody>
      ${campo("Nombre completo", data.nombre)}
      ${campo("Correo electrónico", data.email)}
      ${campo("Teléfono", data.telefono)}
      ${campo("Institución/organización", data.institucion)}
      ${campo("Área", data.area)}
      ${campo("Ubicación", data.ubicacion)}
      ${campo("Nombre del proyecto", data.proyecto_nombre)}
      ${campo("Objetivo del proyecto", data.proyecto_objetivo)}
      ${campo("Estado del proyecto", data.proyecto_estado)}
      ${campo("Fecha de inicio", data.proyecto_fechainicio)}
      ${campo("Descripción del proyecto", data.proyecto_descripcion)}
      ${campo("Tipo de impacto", data.tipo_impacto)}
      ${campo("Grupos beneficiados", data.grupos_beneficiados)}
      ${campo("Nº estimado de beneficiarios", data.estimacion_beneficiarios)}
      ${campo("Ubicación impacto", data.ubicacion_impacto)}
      ${campo("Aliados / colaboradores", data.aliados_colaboradores)}
      ${campo("Recursos adicionales", data.recursos_adicionales)}
      ${campo("Plan de seguimiento", data.plan_seguimiento)}
      ${campo("Plan de sustentabilidad", data.plan_sustentabilidad)}
      ${campo("Sitio web/redes", data.web_o_redes)}
      ${campo("Motivación principal", data.motivacion)}
      ${campo("Servicio de interés", data.servicio)}
      ${campo("Mensaje personal", data.mensaje)}
    </tbody>
  </table>
`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    logStep("Function started");

    const resendKey = Deno.env.get("RESEND_API_KEY");
    if (!resendKey) throw new Error("RESEND_API_KEY is not set");

    const resend = new Resend(resendKey);

    // Parse incoming data
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
        to: ["info@habydoors.com"],
        subject: `Nueva consulta de ${nombre} - ${servicio}`,
        html: `
          <h2>¡NUEVA SOLICITUD RECIBIDA!</h2>
          <p><strong>Datos capturados:</strong></p>
          ${tablaResumen(requestData)}
          <hr>
          <p><em>Este mensaje fue enviado automáticamente desde el formulario web de HABY.</em></p>
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
      // No arrojamos el error aquí: si ya se notificó a HABY, damos feedback explícito de fallo al usuario
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
