
// Utilidad simple para logs estructurados y legibles
export const logStep = (step: string, details?: any) => {
  const detailsStr = details ? ` - ${JSON.stringify(details)}` : "";
  console.log(`[SEND-CONTACT-EMAIL] ${step}${detailsStr}`);
};
