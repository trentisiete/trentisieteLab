'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ArrowDown, Sparkles, Brain, Code, TrendingUp } from 'lucide-react'
import ContactModal from './ContactModal' // Asegúrate de que este componente esté en la misma carpeta o la ruta sea correcta

export default function Hero() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const floatingIcons = [
    { Icon: Brain, delay: 0, position: { top: '20%', left: '10%' } },
    { Icon: Code, delay: 1, position: { top: '30%', right: '15%' } },
    { Icon: TrendingUp, delay: 2, position: { bottom: '30%', left: '15%' } },
    { Icon: Sparkles, delay: 0.5, position: { top: '60%', right: '10%' } },
  ]

  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
        {/* Fondo con gradiente y elementos decorativos */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50" />
          
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-200/50 rounded-full opacity-30 blur-3xl animate-pulse-slow"/>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-200/50 rounded-full opacity-30 blur-3xl animate-pulse-fast" style={{animationDelay: '1s'}}/>
          
          {/* Iconos flotantes animados */}
          {floatingIcons.map(({ Icon, delay, position }, index) => (
            <motion.div
              key={index}
              className="absolute w-16 h-16 rounded-2xl bg-white/30 backdrop-blur-sm border border-white/40 flex items-center justify-center text-primary-500 shadow-lg"
              style={position}
              initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
              animate={{ opacity: 0.5, scale: 1, rotate: 0, y: [0, -15, 0] }}
              transition={{ 
                duration: 2.5,
                delay: delay,
                y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 1, delay: delay + 0.5 }
              }}
            >
              <Icon size={28} />
            </motion.div>
          ))}
        </div>

        <div className="container relative z-10 px-4">
          <div className="text-center max-w-5xl mx-auto">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-block"
            >
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-primary-200/50 text-primary-800 text-sm font-semibold mb-8 shadow-sm">
                    <Sparkles size={16} className="text-primary-500" />
                    <span>Estudiante de Ciencia e Ingeniería de Datos</span>
                </div>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
              className="font-display text-6xl lg:text-8xl font-black mb-4 text-balance"
            >
              <span className="block text-neutral-900">JOSÉ ARBELÁEZ</span>
            </motion.h1>

            {/* --- TEXTO ACTUALIZADO AQUÍ --- */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl lg:text-2xl text-neutral-600 max-w-3xl mx-auto mb-10 leading-relaxed text-balance"
            >
              Desarrollo modelos de IA y estrategias cuantitativas que transforman datos de mercado en valor.
              Mi especialidad: la intersección entre el <span className="font-semibold text-primary-600">Deep Learning</span> y las <span className="font-semibold text-secondary-600">finanzas</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-12"
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600">8.5<span className="text-2xl text-neutral-500">/10</span></div>
                <div className="text-sm text-neutral-500 font-medium tracking-wide">NOTA MEDIA</div>
              </div>
              <div className="w-px h-10 bg-neutral-300 hidden sm:block"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600">3<span className="text-2xl text-neutral-500">+</span></div>
                <div className="text-sm text-neutral-500 font-medium tracking-wide">AÑOS DE FORMACIÓN</div>
              </div>
              <div className="w-px h-10 bg-neutral-300 hidden sm:block"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600">5<span className="text-2xl text-neutral-500">+</span></div>
                <div className="text-sm text-neutral-500 font-medium tracking-wide">PROYECTOS RELEVANTES</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a 
                href="#projects" 
                className="btn btn-primary group w-full sm:w-auto"
              >
                <span className="flex items-center gap-2">
                  Ver mis proyectos
                  <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
                </span>
              </a>
              
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="btn btn-secondary group w-full sm:w-auto"
              >
                <span className="flex items-center gap-2">
                  Contactar
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                </span>
              </button>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-400"
        >
          <span className="text-sm font-medium">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-0.5 h-4 bg-neutral-400 rounded-full"
          />
        </motion.div>
      </section>

      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  )
}