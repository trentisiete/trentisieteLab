'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Brain, Code, LineChart, Layers, TestTube, Github, FileText, ArrowLeft, Lightbulb, ExternalLink, Mail } from 'lucide-react' // Added Mail to imports
import 'katex/dist/katex.min.css'
import { InlineMath, BlockMath } from 'react-katex'
import { useInView } from 'react-intersection-observer' // Import useInView

// Componente para las secciones principales (Fundamentos, Resultados, etc.)
interface SectionCardProps {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
  delay?: number;
}

const SectionCard = ({ title, icon: Icon, children, delay = 0 }: SectionCardProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: delay }}
      className="glass-card p-8 rounded-3xl border border-white/30 shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1"
    >
      <h2 className="text-3xl font-display font-bold text-neutral-800 mb-6 flex items-center gap-3">
        <Icon className="text-primary-600" size={32} />
        {title}
      </h2>
      <div className="prose prose-lg max-w-none text-neutral-700 leading-relaxed">
        {children}
      </div>
    </motion.div>
  );
};

// Componente para una subsección con descripción y una imagen
interface SubSectionWithImageProps {
  title: string;
  description: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  imageCaption?: string;
  reverse?: boolean; // Para alternar el diseño de texto/imagen
  delay?: number;
}

const SubSectionWithImage = ({ title, description, imageSrc, imageAlt, imageCaption, reverse = false, delay = 0 }: SubSectionWithImageProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: delay }}
      className={`glass-card p-6 rounded-2xl border border-white/20 shadow-md ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} flex flex-col items-center gap-8 mb-8`}
    >
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-neutral-800 mb-4">{title}</h3>
        <div className="prose prose-base max-w-none text-neutral-700">
          {description}
        </div>
      </div>
      <div className="flex-1 w-full md:w-auto relative rounded-lg overflow-hidden shadow-lg border border-neutral-200">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={700}
          height={400}
          layout="responsive"
          className="object-cover rounded-lg"
        />
        {imageCaption && (
          <p className="text-sm text-neutral-500 text-center mt-2 px-2 pb-2">{imageCaption}</p>
        )}
      </div>
    </motion.div>
  );
};


export default function AIDiffusionPage() {
    // New useInView hook for the problematic motion.div
    const { ref: resultsRef, inView: resultsInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 py-16">
      {/* Botón de volver arriba y elementos de fondo */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="fixed top-24 left-8 z-40 hidden md:block"
      >
        <Link
          href="/"
          className="flex items-center gap-2 px-5 py-2 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 transition-all duration-300 transform hover:scale-105"
          aria-label="Volver al inicio"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">Volver</span>
        </Link>
      </motion.div>

      {/* Background elements (sutiles y dinámicos) */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary-200 rounded-full opacity-5 blur-3xl mix-blend-multiply animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-secondary-200 rounded-full opacity-5 blur-3xl mix-blend-multiply animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-200 rounded-full opacity-3 blur-3xl animate-pulse-fast" style={{ animationDelay: '2s' }} />
      </div>


      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 lg:p-12 rounded-3xl border border-white/40 shadow-2xl relative z-10"
        >
          {/* Título y descripción principal */}
          <h1 className="text-4xl md:text-6xl font-display font-extrabold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-6 text-center lg:text-left leading-tight">
            Generación de Imágenes con Modelos de Difusión Estocástica (SDEs)
          </h1>
          <p className="text-xl text-neutral-700 mb-10 text-center lg:text-left max-w-3xl mx-auto lg:mx-0">
            Una inmersión profunda en la creación de imágenes de alta fidelidad mediante la formulación matemática de Ecuaciones Diferenciales Estocásticas (SDEs).
          </p>

          {/* Enlaces de acceso rápido */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center lg:justify-start gap-4 mb-16"
          >
            <a
              href="https://github.com/trentisiete/DiffusionImaGen"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary group px-8 py-3 rounded-xl flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <img src="/projects/favicon.ico.png" alt="JA" className="w-5 h-5 mr-2 rounded-full" />
              <span className="font-semibold">Código en GitHub</span>
            </a>
            <a
              href="/projects/Informe_JO1_Arbelaez_Mohanu.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary group px-8 py-3 rounded-xl flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <FileText size={20} className="group-hover:scale-110 transition-transform" />
              <span className="font-semibold">Ver Artículo (PDF)</span>
            </a>
          </motion.div>

          {/* Sección de Introducción */}
          <SectionCard title="Visión General del Proyecto" icon={Lightbulb} delay={0.5}>
            <p>
              Este proyecto representa una inmersión profunda en el campo de la **inteligencia artificial generativa**,
              centrándose específicamente en los modelos de difusión basados en **Ecuaciones Diferenciales Estocásticas (SDEs)**
              para la generación de imágenes de alta fidelidad. Fue un desarrollo completamente implementado desde cero en
              <strong className="text-primary-600"> Python</strong> y <strong className="text-secondary-600">PyTorch</strong>,
              sin depender de bibliotecas de alto nivel para los componentes centrales de los modelos de difusión.
              Este enfoque nos permitió explorar a fondo los principios subyacentes y las optimizaciones de estos modelos de última generación.
            </p>
          </SectionCard>

          {/* Sección de Fundamentos Matemáticos */}
          <SectionCard title="Fundamentos Matemáticos" icon={Brain} delay={0.7}>
            <p className="mb-6">
              Las Ecuaciones Diferenciales Estocásticas (SDEs) constituyen la piedra angular matemática de nuestro modelo de difusión.
              Estas ecuaciones nos permiten modelar la evolución de un sistema en el tiempo bajo la influencia de un componente
              aleatorio (ruido), crucial para el proceso de agregar y eliminar ruido en las imágenes.
            </p>
            <h3 className="text-2xl font-semibold mb-4 text-neutral-800">Formulación General de una SDE</h3>
            <p className="text-neutral-700 mb-4">
              La formulación general de una SDE es la siguiente:
            </p>
            <div className="bg-neutral-100 p-6 rounded-lg mb-8 border border-neutral-200 shadow-inner">
              <BlockMath math="dx = f(x,t)dt + g(t)dw" />
              <p className="text-sm text-neutral-500 mt-2">
                Donde <InlineMath math="x" /> es el estado de la imagen, <InlineMath math="t" /> el tiempo,
                <InlineMath math="f(x,t)" /> el coeficiente de deriva (drift), <InlineMath math="g(t)" /> el coeficiente de difusión,
                y <InlineMath math="dw" /> un proceso de Wiener (ruido blanco).
              </p>
            </div>
            <p className="text-neutral-700 mb-6">
              En este proyecto, implementamos y exploramos tres variantes principales de SDEs, cada una con sus características únicas para modelar el proceso de difusión:
            </p>
            <ul className="space-y-8">
              <li>
                <h4 className="text-xl font-bold text-primary-700 mb-3 flex items-center gap-2">
                  <Layers size={24} /> VE-SDE (Variance Exploding)
                </h4>
                <p className="text-neutral-700 mb-3">
                  En este tipo de SDE, la varianza del ruido añadido aumenta exponencialmente con el tiempo. El coeficiente de deriva es cero, lo que significa que el proceso está impulsado puramente por el ruido.
                </p>
                <div className="bg-neutral-100 p-6 rounded-lg border border-neutral-200 shadow-inner">
                  <BlockMath math="f(x,t) = 0, \quad g(t) = \sqrt{\frac{d\sigma^2}{dt}}" />
                </div>
              </li>
              <li>
                <h4 className="text-xl font-bold text-secondary-700 mb-3 flex items-center gap-2">
                  <TestTube size={24} /> VP-SDE (Variance Preserving)
                </h4>
                <p className="text-neutral-700 mb-3">
                  A diferencia de VE-SDE, en VP-SDE la varianza de la imagen se mantiene acotada. Introduce un término de deriva que empuja la imagen de vuelta a la media (cero), mientras que un término de difusión añade ruido.
                </p>
                <div className="bg-neutral-100 p-6 rounded-lg border border-neutral-200 shadow-inner">
                  <BlockMath math="f(x,t) = -\frac{1}{2}\beta(t)x, \quad g(t) = \sqrt{\beta(t)}" />
                </div>
              </li>
              <li>
                <h4 className="text-xl font-bold text-accent-700 mb-3 flex items-center gap-2">
                  <Code size={24} /> Sub-VP SDE
                </h4>
                <p className="text-neutral-700 mb-3">
                  Una variante de VP-SDE que ajusta el término de difusión para asegurar que la varianza marginal sea siempre menor o igual a la de la imagen original. Esto puede conducir a un muestreo más estable.
                </p>
                <div className="bg-neutral-100 p-6 rounded-lg border border-neutral-200 shadow-inner">
                  <BlockMath math="f(x,t) = -\frac{1}{2}\beta(t)x, \quad g(t) = \sqrt{\beta(t)(1-e^{-2\int\beta(s)ds})}" />
                </div>
              </li>
            </ul>
          </SectionCard>

          {/* Sección de Resultados */}
          <SectionCard title="Resultados y Aplicaciones" icon={LineChart} delay={0.9}>
            <p className="mb-6">
              El sistema fue evaluado exhaustivamente en los populares datasets **CIFAR-10** y **MNIST**, logrando resultados competitivos
              y demostrando la solidez de nuestra implementación desde cero. Los detalles técnicos y las métricas de evaluación completas
              pueden encontrarse en nuestro artículo adjunto.
            </p>

            <h3 className="text-2xl font-semibold mb-6 text-neutral-800">Explorando las Capacidades del Modelo</h3>

            {/* Generación No Condicional */}
            <SubSectionWithImage
              title="1. Generación No Condicional: De Ruido a Realidad"
              description={
                <>
                  <p>
                    La generación no condicional es el proceso fundamental donde el modelo aprende a transformar ruido gaussiano puro en imágenes coherentes y realistas. Este proceso se basa en la capacidad de las SDEs para guiar la transición gradual del ruido a datos significativos.
                  </p>
                  <h4 className="text-lg font-semibold text-neutral-800 mb-3 mt-5">Pasos Clave del Proceso:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2 flex-shrink-0 mt-1">•</span>
                      <span className="text-neutral-700">
                        Inicia con una muestra de **ruido gaussiano puro**, representando un estado inicial aleatorio.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2 flex-shrink-0 mt-1">•</span>
                      <span className="text-neutral-700">
                        A través de múltiples **pasos de denoising iterativos**, el modelo elimina gradualmente el ruido, refinando las características de la imagen.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2 flex-shrink-0 mt-1">•</span>
                      <span className="text-neutral-700">
                        La evolución está guiada por las SDEs, asegurando una transición suave y controlada desde el ruido hasta la imagen final.
                      </span>
                    </li>
                  </ul>
                </>
              }
              imageSrc="/projects/image_dcfe22.png"
              imageAlt="Ejemplos de generación no condicional y su evolución temporal"
              imageCaption="Arriba: Imágenes generadas incondicionalmente. Abajo: Proceso de denoising a través de diferentes pasos de tiempo (de ruido puro a imagen final)."
            />

            {/* Generación Condicional */}
            <SubSectionWithImage
              title="2. Generación Condicional: Control Preciso del Contenido"
              description={
                <>
                  <p>
                    La generación condicional eleva la utilidad de nuestro modelo al permitir controlar la salida mediante información adicional, como etiquetas de clase. Implementamos un **clasificador auxiliar** que guía el proceso de difusión.
                  </p>
                  <h4 className="text-lg font-semibold text-neutral-800 mb-3 mt-5">Mecanismo de Control:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2 flex-shrink-0 mt-1">•</span>
                      <span className="text-neutral-700">
                        El clasificador se entrena para reconocer la clase de una imagen en cualquier etapa, incluso con ruido.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2 flex-shrink-0 mt-1">•</span>
                      <span className="text-neutral-700">
                        Durante la generación, el clasificador proporciona **gradientes** que dirigen el denoising hacia la clase objetivo, manteniendo la coherencia.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2 flex-shrink-0 mt-1">•</span>
                      <span className="text-neutral-700">
                        Esto permite generar imágenes que no solo pertenecen a la clase especificada, sino que también mantienen la diversidad y calidad inherentes a los modelos de difusión.
                      </span>
                    </li>
                  </ul>
                </>
              }
              imageSrc="/projects/classifier_architecture_image.png"
              imageAlt="Arquitectura del clasificador condicional y resultados"
              imageCaption="Esquema de la arquitectura del clasificador auxiliar utilizado para la guía condicional."
              reverse={true}
            />
            {/* Added ref and inView for this motion.div */}
            <motion.div
                ref={resultsRef} // Assign the ref here
                initial={{ opacity: 0, y: 20 }}
                animate={resultsInView ? { opacity: 1, y: 0 } : {}} // Use resultsInView here
                transition={{ duration: 0.6, delay: 0.5 }}
                className="glass-card p-6 rounded-2xl border border-white/20 shadow-md mb-8"
            >
              <h4 className="text-lg font-semibold text-neutral-800 mb-4">Resultados de Generación Condicional:</h4>
              <div className="relative w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg border border-neutral-200">
                <Image
                  src="/projects/final_conditional_comparison.png" // Asegúrate de que esta sea la imagen que realmente quieres mostrar. Según la descripción de tu problema, la imagen que subiste es `image_be52f2.jpg`. Si quieres mostrar esa, cambia el src.
                  alt="Comparación de generación condicional"
                  width={900}
                  height={500}
                  layout="responsive"
                  // CAMBIO CLAVE AQUÍ: De object-cover a object-contain
                  className="object-contain rounded-lg" // <-- MODIFICACIÓN
                />
                <p className="text-sm text-neutral-500 text-center mt-2 px-2 pb-2">
                  Imágenes generadas bajo condiciones específicas, demostrando el control preciso del modelo.
                  En este caso, el modelo classifier predecía con un 55% de Accuracy el gradiente de la clase correcta.
                </p>
              </div>
            </motion.div>


            {/* Imputación de Imágenes */}
            <SubSectionWithImage
              title="3. Imputación de Imágenes: Restauración de Contenido Faltante"
              description={
                <>
                  <p>
                    La imputación de imágenes es una aplicación avanzada que permite reconstruir partes faltantes o dañadas de una imagen. Esta técnica es invaluable en escenarios con información parcial o para la restauración de datos visuales.
                  </p>
                  <h4 className="text-lg font-semibold text-neutral-800 mb-3 mt-5">Proceso de Reconstrucción:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2 flex-shrink-0 mt-1">•</span>
                      <span className="text-neutral-700">
                        Comienza con una imagen parcialmente observada, donde las regiones ocultas se marcan como "no observadas".
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2 flex-shrink-0 mt-1">•</span>
                      <span className="text-neutral-700">
                        El modelo utiliza la información circundante para inferir y generar el contenido faltante, manteniendo la coherencia contextual.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2 flex-shrink-0 mt-1">•</span>
                      <span className="text-neutral-700">
                        La imputación se realiza en múltiples etapas de refinamiento, asegurando una transición suave entre las partes originales y las generadas.
                      </span>
                    </li>
                  </ul>
                </>
              }
              imageSrc="/projects/imputacion_cifar_mnist_3etapas.png"
              imageAlt="Ejemplo de imputación de imágenes en 3 etapas"
              imageCaption="Proceso de imputación de imágenes a través de 3 etapas, demostrando la reconstrucción progresiva de áreas ocultas en MNIST y CIFAR-10."
            />

          </SectionCard>


          {/* Sección de Conclusión o Llamada a la acción */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="text-center mt-16 p-8 bg-primary-50/50 rounded-2xl border border-primary-200 shadow-md"
          >
            <h2 className="text-3xl font-bold text-primary-800 mb-4">¡Gracias por explorar este proyecto!</h2>
            <p className="text-xl text-neutral-700 mb-8">
              Espero que esta inmersión detallada en los modelos de difusión con SDEs haya sido informativa.
              Si tienes preguntas o quieres discutir colaboraciones, ¡no dudes en contactarme!
            </p>
            <div className="flex justify-center gap-6">
              <Link
                href="/"
                className="btn btn-secondary group px-8 py-4 rounded-xl flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                <span className="font-semibold">Volver al Portafolio</span>
              </Link>
              <Link
                href="#contact" // Assuming you have a contact section with ID "contact"
                className="btn btn-primary group px-8 py-4 rounded-xl flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Mail size={20} className="group-hover:translate-x-1 transition-transform" />
                <span className="font-semibold">Contactar</span>
              </Link>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  )
}