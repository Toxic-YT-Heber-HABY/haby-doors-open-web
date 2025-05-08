
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="section bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-square max-w-md bg-gray-100 rounded-lg overflow-hidden">
                {/* Reemplazamos el placeholder con la imagen real del fundador */}
                <img 
                  src="/lovable-uploads/d3be837f-42a6-40ff-a75e-ea4c473f067e.png" 
                  alt="Heber Zadkiel García Pérez" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-white p-4 shadow-lg rounded-lg max-w-[250px]">
                <p className="text-haby-primary font-medium">Fundador de HABY</p>
                <p className="text-gray-600 text-sm mt-1">Visionario detrás de "HABY OPEN THE DOORS"</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-6">
            <div className="inline-block bg-haby-light text-haby-primary px-4 py-2 rounded-full text-sm font-medium">
              Sobre Nosotros
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              El concepto <span className="text-haby-primary">HABY OPEN THE DOORS</span>
            </h2>
            <p className="text-gray-600">
              En HABY nos especializamos en el desarrollo de soluciones web innovadoras que resuelven problemas cotidianos. 
              Nuestra misión es ayudar a nuestros clientes a optimizar su tiempo, eliminando tareas repetitivas 
              y permitiéndoles enfocarse en lo que realmente importa.
            </p>
            <p className="text-gray-600">
              Nuestro fundador, Heber Zadkiel García Pérez, creó HABY con una visión clara: abrir puertas 
              a nuevas posibilidades mediante el desarrollo web personalizado y centrado en soluciones prácticas.
            </p>
            <Link to="/sobre-nosotros" className="inline-flex items-center text-haby-primary hover:text-haby-secondary font-medium">
              Conoce más sobre HABY <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
