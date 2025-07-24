import { Phone, Mail, MessageCircle, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const ContactChannels = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono / WhatsApp",
      value: "56 5368 1237",
      href: "https://wa.me/5653681237",
      description: "Lunes a viernes, 9:00 a 18:00",
      color: "text-green-600"
    },
    {
      icon: Mail,
      title: "Correo Electrónico",
      value: "contacto@haby-open-doors.com",
      href: "mailto:contacto@haby-open-doors.com",
      description: "Respuesta en 24 horas",
      color: "text-blue-600"
    },
    {
      icon: MessageCircle,
      title: "Chat en Vivo",
      value: "Soporte Inmediato",
      href: "#chat",
      description: "Disponible durante horario laboral",
      color: "text-haby-accent"
    },
    {
      icon: MapPin,
      title: "Ubicación",
      value: "Ciudad de México, México",
      href: "#location",
      description: "Servicios en toda la región",
      color: "text-gray-600"
    }
  ];

  const socialMedia = [
    {
      icon: Facebook,
      name: "Facebook",
      href: "https://facebook.com/habyopenthedoors",
      color: "text-blue-600 hover:text-blue-700"
    },
    {
      icon: Instagram,
      name: "Instagram", 
      href: "https://instagram.com/haby_open_doors",
      color: "text-pink-600 hover:text-pink-700"
    },
    {
      icon: Twitter,
      name: "Twitter",
      href: "https://twitter.com/haby_open_doors",
      color: "text-blue-400 hover:text-blue-500"
    },
    {
      icon: Youtube,
      name: "YouTube",
      href: "https://youtube.com/@habyopenthedoors",
      color: "text-red-600 hover:text-red-700"
    }
  ];

  return (
    <div className="bg-white rounded-3xl p-8 shadow-elegant border border-gray-100">
      <div className="inline-block bg-haby-accent/10 text-haby-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
        Información de contacto
      </div>
      
      <h2 className="text-2xl font-bold text-haby-primary mb-3">
        ¿Prefieres contactarnos directamente?
      </h2>
      
      <p className="text-gray-600 mb-8">
        Puedes comunicarte por cualquiera de estos medios para apoyo rápido y personalizado.
      </p>

      {/* Canales de contacto principales */}
      <div className="space-y-6 mb-8">
        {contactInfo.map((contact, index) => {
          const IconComponent = contact.icon;
          return (
            <div key={index} className="flex items-start hover:bg-gray-50 rounded-xl p-4 transition group">
              <div className={`h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center ${contact.color} mr-4 flex-shrink-0 group-hover:scale-110 transition`}>
                <IconComponent className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-gray-900 mb-1">
                  {contact.title}
                </h3>
                <a 
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${contact.color} hover:underline font-medium transition-colors`}
                >
                  {contact.value}
                </a>
                <p className="text-sm text-gray-500 mt-1">
                  {contact.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Redes sociales */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Síguenos en redes sociales
        </h3>
        <div className="flex space-x-4">
          {socialMedia.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full bg-gray-100 ${social.color} hover:bg-gray-200 transition-all duration-300 hover:scale-110`}
                aria-label={`Seguir en ${social.name}`}
              >
                <IconComponent className="h-5 w-5" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactChannels;