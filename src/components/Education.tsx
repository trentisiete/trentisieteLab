'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { School, TrendingUp, Bot, ShieldCheck, Milestone } from 'lucide-react'

// Componente para los hitos de educación
const HighlightCard = ({ icon: Icon, title, description, delay }: { icon: React.ElementType, title: string, description: string, delay: number }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="flex items-start gap-4"
    >
      <div className="flex-shrink-0 w-12 h-12 bg-primary-100/80 text-primary-600 rounded-xl flex items-center justify-center">
        <Icon size={24} />
      </div>
      <div>
        <h4 className="font-bold text-lg text-neutral-800">{title}</h4>
        <p className="text-neutral-600">{description}</p>
      </div>
    </motion.div>
  );
};


export default function EducationSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="education" className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Título de la Sección */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-neutral-900 mb-4">
            Formación Académica
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Una base rigurosa en los principios de la ciencia de datos y la ingeniería de software, enfocada en la comprensión profunda y la aplicación práctica.
          </p>
        </motion.div>

        {/* Contenido Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

          {/* Tarjeta Principal del Grado */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3 glass-card p-8 rounded-3xl border border-white/30 shadow-xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <School className="text-primary-600" size={32} />
              <h3 className="text-3xl font-bold text-neutral-900">
                Grado en Ciencia e Ingeniería de Datos
              </h3>
            </div>
            <div className="flex justify-between items-baseline mb-6 text-md">
              <span className="font-semibold text-neutral-700">Universidad Autónoma de Madrid (UAM)</span>
              <span className="text-neutral-500">2022 - 2026 (previsto)</span>
            </div>

            <p className="text-neutral-700 leading-relaxed">
              Mi formación va más allá del uso de librerías; se centra en los <strong>fundamentos matemáticos, estadísticos y computacionales</strong> que sustentan la inteligencia artificial. El plan de estudios cubre desde la algorítmica y la arquitectura de sistemas hasta el modelado avanzado de Machine Learning.
            </p>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              Este enfoque me ha proporcionado la capacidad no solo de aplicar técnicas existentes, sino de <strong>comprender, criticar y construir modelos complejos desde sus principios</strong>, tal como demuestro en mis proyectos personales.
            </p>

            <div className="mt-6 pt-4 border-t border-neutral-200">
              <p className="text-lg font-semibold text-neutral-800">Nota Media Actual (2024-2025): <span className="text-primary-600 font-bold text-xl">8.5</span> / 10</p>
            </div>
          </motion.div>

          {/* Columna de Hitos y Aplicaciones */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-2 space-y-8"
          >
            <h3 className="text-2xl font-bold text-neutral-800 flex items-center gap-3 mb-4"><Milestone size={24}/> Hitos y Aplicaciones Prácticas</h3>

            <HighlightCard
              icon={TrendingUp}
              title="Participante en la Liga de Inversores UAM"
              description="Gestión activa de carteras y aplicación de modelos cuantitativos en un entorno de mercado real y competitivo. "
              delay={0.5}
            />
            <HighlightCard
              icon={Bot}
              title="Curso de Gestión Automatizada de Carteras"
              description="Profundizando en el diseño e implementación de estrategias de trading algorítmico y sistemas financieros automatizados. "
              delay={0.6}
            />
            <HighlightCard
              icon={ShieldCheck}
              title="Junta Directiva, Asociación de Seguridad Informática"
              description="Rol de liderazgo y gestión (2023-2024), desarrollando habilidades de organización, responsabilidad y ciberseguridad. "
              delay={0.7}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}