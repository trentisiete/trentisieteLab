'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image' // Importado para futuras imágenes
import { 
  Car,
  Users,
  Code2,
  Database,
  Shield,
  Building2,
  ArrowLeft,
  Lock,
  LayoutDashboard,
  Server,
  Smartphone,
  Globe,
  Palette,
  Layers,
  Contact,
  ImageIcon,
  Calendar
} from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import ContactModal from '@/components/ContactModal'
import { useState } from 'react'

// Componente reutilizable para las secciones principales
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

// Componente Principal de la Página
export default function WorkshopPlatformPage() {
  const { ref: mainRef, inView: mainInView } = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 py-16">
      {/* Botón de volver */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="fixed top-24 left-8 z-40 hidden md:block"
      >
        <Link
          href="/"
          className="flex items-center gap-2 px-5 py-2 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 transition-all duration-300 transform hover:scale-105"
          aria-label="Volver al portafolio principal"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">Volver</span>
        </Link>
      </motion.div>

      {/* Elementos de fondo decorativos */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary-200 rounded-full opacity-5 blur-3xl mix-blend-multiply animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-secondary-200 rounded-full opacity-5 blur-3xl mix-blend-multiply animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 space-y-16">
        {/* SECCIÓN DE CABECERA */}
        <motion.div
          ref={mainRef}
          initial={{ opacity: 0, y: 20 }}
          animate={mainInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 lg:p-12 rounded-3xl border border-white/40 shadow-2xl relative z-10"
        >
          <h1 className="text-4xl md:text-6xl font-display font-extrabold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-6 text-center lg:text-left leading-tight">
            Plataforma de Servicios para Talleres
          </h1>
          <p className="text-xl text-neutral-700 mb-10 text-center lg:text-left max-w-4xl mx-auto lg:mx-0">
            Un proyecto integral de desarrollo <strong>Full-Stack</strong> para modernizar y unificar las operaciones de una red de 5 talleres en Madrid. La solución incluye una aplicación web y móvil para clientes, y un potente panel de administración.
          </p>
          <div className="text-center lg:text-left">
            <span className="inline-block bg-secondary-100 text-secondary-800 text-sm font-semibold px-4 py-1 rounded-full">
              En colaboración con <strong>Grupo Driver</strong>
            </span>
            <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-4 py-1 rounded-full ml-3">
              Proyecto en desarrollo
            </span>
          </div>
        </motion.div>

        {/* SECCIÓN: MI ROL Y CONTRIBUCIONES */}
        <SectionCard title="Mi Rol: Full-Stack Developer" icon={Code2} delay={0.2}>
          <p>
            Como parte de un equipo de cuatro estudiantes, he asumido un rol de desarrollador Full-Stack con responsabilidades clave en la arquitectura y ejecución del proyecto. Mi trabajo ha sido fundamental para construir el sistema desde cero, demostrando una amplia gama de habilidades técnicas.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* Columna Backend */}
            <div className="glass-card p-6 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold text-neutral-800 mb-4 flex items-center gap-3">
                <Server className="text-primary-500" />
                Arquitectura y Backend
              </h3>
              <ul className="list-disc list-inside text-neutral-700 space-y-2">
                <li>Diseño e implementación de la <strong>base de datos completa</strong> desde cero.</li>
                <li>Desarrollo de la <strong>API RESTful</strong> para comunicar el frontend y la base de datos.</li>
                <li>Creación de un sistema de <strong>autenticación y cuentas de usuario seguras</strong>.</li>
                <li>Integración con la base de datos de productos de <strong>Grupo Driver</strong>.</li>
              </ul>
            </div>
            {/* Columna Frontend */}
            <div className="glass-card p-6 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold text-neutral-800 mb-4 flex items-center gap-3">
                <Palette className="text-primary-500" />
                Frontend y Experiencia de Usuario
              </h3>
              <ul className="list-disc list-inside text-neutral-700 space-y-2">
                <li>Desarrollo del frontend de la <strong>aplicación web principal</strong> y del <strong>panel de administración</strong>.</li>
                <li>Implementación de la interfaz para la <strong>gestión de cuentas de usuario y vehículos</strong>.</li>
                <li>
                  <strong>Desarrollo exclusivo y en solitario</strong> de los módulos de:
                  <ul className="list-['-_'] list-inside ml-4 mt-1">
                    <li>Gestión de productos</li>
                    <li>Carrito de compra / Cartera</li>
                    <li>Pasarelas y métodos de pago</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </SectionCard>

        {/* SECCIÓN: GALERÍA DEL PROYECTO */}
        <SectionCard title="Galería del Proyecto (WIP)" icon={ImageIcon} delay={0.3}>
            <p>
                Debido a la naturaleza del acuerdo con nuestro cliente, el servicio principal de la aplicación es confidencial hasta su lanzamiento oficial. Sin embargo, a continuación se muestran algunas capturas de las áreas que he desarrollado y que puedo compartir.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-neutral-100 rounded-lg shadow-inner">
                    <h4 className="font-bold text-lg mb-4">Panel de Cuenta de Usuario</h4>
                    <div className="relative w-full h-[200px] bg-neutral-200 rounded-md overflow-hidden">
                        <Image 
                            src="/projects/autocenter/dashboard.jpg"
                            alt="Panel de cuenta de usuario"
                            fill
                            style={{ objectFit: 'contain', objectPosition: 'center' }}
                            className="w-full h-full"
                            priority
                        />
                    </div>
                </div>
                <div className="text-center p-4 bg-neutral-100 rounded-lg shadow-inner">
                    <h4 className="font-bold text-lg mb-4">Interfaz de Gestión de Vehículos</h4>
                    <div className="relative w-full h-[200px] bg-neutral-200 rounded-md overflow-hidden">
                        <Image 
                            src="/projects/autocenter/vehiculos.jpg"
                            alt="Interfaz de gestión de vehículos"
                            fill
                            style={{ objectFit: 'contain', objectPosition: 'center' }}
                            className="w-full h-full"
                            priority
                        />
                    </div>
                </div>
                <div className="text-center p-4 bg-neutral-100 rounded-lg shadow-inner">
                    <h4 className="font-bold text-lg mb-4">Log in y Registro de Usuarios</h4>
                    <div className="relative w-full h-[200px] bg-neutral-200 rounded-md overflow-hidden">
                        <Image 
                            src="/projects/autocenter/login.jpg"
                            alt="Login y registro de usuarios"
                            fill
                            style={{ objectFit: 'contain', objectPosition: 'center' }}
                            className="w-full h-full"
                            priority
                        />
                    </div>
                </div>
            </div>
        </SectionCard>


        {/* SECCIÓN: STACK TECNOLÓGICO */}
        <SectionCard title="Stack Tecnológico Aplicado" icon={Layers} delay={0.4}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-neutral-800 mb-4 flex items-center gap-3"><Globe size={24}/> Aplicación Web y Backend</h3>
              <div className="flex flex-wrap gap-3">
                  {['Astro', 'React', 'TypeScript', 'Node.js', 'API REST', 'DBeaver'].map((tech) => (
                      <span key={tech} className="tech-badge p-2 px-4 rounded-full bg-neutral-100 text-neutral-800 font-medium shadow-sm">{tech}</span>
                  ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-neutral-800 mb-4 flex items-center gap-3"><Smartphone size={24}/> Aplicación Móvil</h3>
              <div className="flex flex-wrap gap-3">
                  {['React Native', 'TypeScript', 'JavaScript'].map((tech) => (
                      <span key={tech} className="tech-badge p-2 px-4 rounded-full bg-neutral-100 text-neutral-800 font-medium shadow-sm">{tech}</span>
                  ))}
              </div>
            </div>
          </div>
          <p className="mt-6 text-sm text-neutral-600">
            <strong>Nota:</strong> Aunque el proyecto principal se centra en la aplicación web, se han realizado avances significativos en la versión móvil para garantizar una experiencia de usuario consistente en ambas plataformas.
          </p>
        </SectionCard>

        {/* SECCIÓN: NOTA DE PRIVACIDAD Y CONTACTO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={mainInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16 p-8 bg-primary-900/5 rounded-2xl border border-primary-200 shadow-md"
        >
          <div className="flex justify-center mb-4">
              <Lock size={32} className="text-primary-700"/>
          </div>
          <h2 className="text-3xl font-bold text-primary-800 mb-4">Privacidad y Siguientes Pasos</h2>
          <p className="text-xl text-neutral-700 mb-8 max-w-3xl mx-auto">
            Debido a un acuerdo de confidencialidad con el cliente, el código fuente no es público. Sin embargo, estoy disponible para discutir en detalle la arquitectura técnica, los desafíos superados y cómo mi experiencia en este proyecto puede aportar un gran valor.
          </p>
          <div className="flex justify-center">
            <div className="flex flex-col items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsContactModalOpen(true)}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Contactar
              </motion.button>
              <motion.a
                href="/projects/Curriculum de Internships 2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl bg-white border border-neutral-200 text-neutral-700 font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Ver CV
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}