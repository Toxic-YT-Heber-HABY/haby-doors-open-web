
// --- Plantillas y utilidades para correos de contacto HABY ---
import { ContactEmailRequest } from "./types.ts";

// Header para correo al usuario
export const userConfirmationHeader = `
  <div style="background: linear-gradient(90deg,#6741C9 0%, #C07EF1 100%);padding:28px 0 16px 0;text-align:center;">
    <img src="https://www.habydoors.com/favicon.ico" alt="HABY" style="width:48px;height:48px;border-radius:12px;box-shadow:0 4px 16px #6741c915;margin-bottom:12px;" />
    <h1 style="color:#fff;font-family:sans-serif;margin:0;">¡Gracias por tu confianza!</h1>
    <p style="color:#fff;font-family:sans-serif;font-size:19px;margin:8px 0 0 0;">Seguimiento PRIORITARIO a tu solicitud | Equipo HABY</p>
  </div>
`;

// Mensaje profesional que acompaña el resumen al usuario
export const userProfessionalMessage = (nombre: string) => `
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

// Header para el correo del equipo (opcionalmente diferente si se desea)
export const profesionalHeader = `
  <div style="background: linear-gradient(90deg,#6741C9 0%, #C07EF1 100%);padding:28px 0 16px 0;text-align:center;">
    <img src="https://www.habydoors.com/favicon.ico" alt="HABY" style="width:48px;height:48px;border-radius:12px;box-shadow:0 4px 16px #6741c915;margin-bottom:12px;" />
    <h1 style="color:#fff;font-family:sans-serif;margin:0;">¡Hemos recibido tu solicitud!</h1>
    <p style="color:#fff;font-family:sans-serif;font-size:18px;margin:6px 0 0 0;">Seguimiento PRIORITARIO | Equipo HABY</p>
  </div>
`;

// Utilidad para construir una fila/campo de tabla
const campo = (label: string, value?: string) =>
  value
    ? `<tr>
        <td style="padding:5px 16px;font-weight:600;color:#441e88;width:190px;border-bottom:1px solid #eee">${label}</td>
        <td style="padding:5px 16px;color:#2d173a;border-bottom:1px solid #eee">${value}</td>
      </tr>`
    : "";

// Utilidad para renderizar el resumen de datos
export const tablaResumen = (data: ContactEmailRequest) => `
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

