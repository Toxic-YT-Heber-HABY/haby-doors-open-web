
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const SobreNosotros = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-gradient-to-r from-haby-dark to-haby-primary text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre Nosotros</h1>
              <p className="text-xl text-gray-200">
                Conoce más sobre HABY, nuestra historia, misión y la filosofía detrás de "HABY OPEN THE DOORS".
              </p>
            </div>
          </div>
        </div>

        {/* Nuestra Historia */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block bg-haby-light text-haby-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                  Nuestra Historia
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  El nacimiento de HABY OPEN THE DOORS
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    HABY nació de la visión de Heber Zadkiel García Pérez, quien identificó una necesidad fundamental en el mercado: 
                    soluciones web que realmente resolvieran problemas cotidianos y ayudaran a las personas a optimizar su tiempo.
                  </p>
                  <p>
                    Desde su fundación, HABY ha estado impulsada por la filosofía de "abrir puertas" a nuevas posibilidades. 
                    Creemos firmemente que la tecnología debe ser una herramienta de liberación que permita a las personas 
                    enfocarse en lo que realmente importa, dejando atrás las tareas tediosas y repetitivas.
                  </p>
                  <p>
                    Nuestra trayectoria ha estado marcada por un compromiso inquebrantable con la innovación, la eficiencia 
                    y la creación de soluciones personalizadas que realmente transformen la forma en que nuestros clientes 
                    gestionan su tiempo día a día.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  {/* Aquí iría una imagen del fundador o del equipo */}
                  <div className="w-full h-full flex items-center justify-center bg-haby-light">
                    <span className="text-haby-primary text-lg font-medium">Fundación de HABY</span>
                  </div>
                </div>
                <div className="absolute -bottom-5 -left-5 bg-white p-6 shadow-lg rounded-lg">
                  <p className="text-haby-primary font-bold text-lg">Misión clara desde el primer día</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nuestro Fundador */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  {/* Aquí iría una imagen del fundador */}
                  <div className="w-full h-full flex items-center justify-center bg-haby-light">
                    <span className="text-haby-primary text-lg font-medium">Heber Zadkiel García Pérez</span>
                  </div>
                </div>
                <div className="absolute -bottom-5 -right-5 bg-white p-6 shadow-lg rounded-lg">
                  <p className="text-haby-primary font-bold text-lg">Fundador & Visionario</p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-block bg-haby-light text-haby-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                  Nuestro Fundador
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Heber Zadkiel García Pérez
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Heber Zadkiel García Pérez es el visionario detrás de HABY. Con una sólida formación en desarrollo web 
                    y una pasión por resolver problemas, Heber fundó HABY con la misión de crear soluciones web que realmente 
                    marcaran una diferencia en la vida cotidiana de las personas.
                  </p>
                  <p>
                    Su enfoque único combina habilidades técnicas avanzadas con una profunda comprensión de las necesidades humanas, 
                    lo que le permite diseñar soluciones que no solo son técnicamente sólidas, sino también intuitivas y centradas en el usuario.
                  </p>
                  <p>
                    La filosofía de Heber, que ha permeado toda la cultura de HABY, se basa en la idea de que la tecnología debe abrir puertas 
                    a nuevas posibilidades, liberando tiempo y recursos que pueden ser dedicados a actividades más significativas, ya sean 
                    profesionales o personales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Misión y Visión */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block bg-haby-light text-haby-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                Nuestra Filosofía
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Misión, Visión y Valores
              </h2>
              <p className="text-gray-600">
                Los pilares que guían nuestro trabajo y definen quiénes somos como empresa.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-lg p-8 hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-bold text-haby-primary mb-4">Misión</h3>
                <p className="text-gray-700">
                  Desarrollar soluciones web innovadoras que resuelvan problemas cotidianos, 
                  optimicen el tiempo de nuestros clientes y les permitan enfocarse en lo que realmente importa.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-8 hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-bold text-haby-primary mb-4">Visión</h3>
                <p className="text-gray-700">
                  Ser reconocidos como líderes en el desarrollo de soluciones web que transforman 
                  la manera en que las personas gestionan su tiempo, abriendo puertas a nuevas posibilidades.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-8 hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-bold text-haby-primary mb-4">Valores</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Innovación constante</li>
                  <li>• Enfoque en el cliente</li>
                  <li>• Excelencia técnica</li>
                  <li>• Soluciones personalizadas</li>
                  <li>• Compromiso con la eficiencia</li>
                  <li>• Mejora continua</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Significado del logo y lema */}
        <section className="py-16 md:py-24 bg-haby-dark text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block bg-white bg-opacity-10 text-haby-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
                  Nuestro Lema
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  El significado detrás de "HABY OPEN THE DOORS"
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    "HABY OPEN THE DOORS" es más que un lema, es la esencia de nuestra filosofía. 
                    Representa nuestra misión de abrir puertas a nuevas posibilidades a través de soluciones web innovadoras.
                  </p>
                  <p>
                    Cada solución que desarrollamos está diseñada para "abrir puertas" – para eliminar obstáculos, 
                    automatizar tareas repetitivas y liberar tiempo valioso que puede ser invertido en actividades 
                    más significativas, ya sean profesionales o personales.
                  </p>
                  <p>
                    Creemos firmemente que la tecnología debe ser una herramienta liberadora que expanda horizontes 
                    y cree nuevas oportunidades, no una complicación adicional en nuestras vidas ya ocupadas.
                  </p>
                </div>
                <div className="mt-8">
                  <Link to="/contacto" className="btn-primary bg-haby-accent hover:bg-opacity-90">
                    Abre nuevas puertas con nosotros
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-full max-w-md aspect-square bg-white bg-opacity-5 rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-7xl md:text-8xl font-bold text-white mb-4">HABY</div>
                    <div className="text-xl md:text-2xl font-medium text-haby-accent">OPEN THE DOORS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-haby-primary to-haby-secondary rounded-lg shadow-xl p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para abrir nuevas puertas?</h2>
              <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
                Contáctanos hoy mismo y descubre cómo nuestras soluciones web pueden ayudarte a optimizar tu tiempo 
                y resolver problemas cotidianos.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contacto" className="btn-primary bg-white text-haby-primary hover:bg-gray-100">
                  Contáctanos ahora
                </Link>
                <Link to="/servicios" className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:bg-opacity-10 flex items-center justify-center">
                  Explorar servicios <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SobreNosotros;
