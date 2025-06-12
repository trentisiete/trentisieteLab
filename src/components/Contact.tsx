'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'


const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/jose-a-082b3a195/', // Asegúrate que esta URL es la correcta
    icon: Linkedin,
    glowColor: 'hover:shadow-blue-500/50'
  },
  {
    name: 'GitHub',
    href: 'https://github.com/trentisiete',
    icon: Github,
    glowColor: 'hover:shadow-gray-400/50'
  },
  {
    name: 'Email',
    href: 'mailto:jose.ancizar.667@gmail.com', // Email de tu CV
    icon: Mail,
    glowColor: 'hover:shadow-red-500/50'
  }
];

// Componente principal del Footer rediseñado
export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <footer className="relative bg-neutral-950 text-white pt-24 pb-12 overflow-hidden">
      {/* Efecto de fondo "Aurora" */}
      <div className="absolute inset-0 -z-0">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-primary-600/20 via-transparent to-transparent blur-3xl opacity-50 animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-tl from-secondary-600/20 via-transparent to-transparent blur-3xl opacity-50 animate-pulse-fast" style={{animationDelay: '1s'}}/>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-center"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-display font-extrabold bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent mb-4"
          >
            ¿Listo para construir algo increíble?
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-neutral-400 max-w-xl mx-auto mb-10"
          >
            Estoy buscando activamente oportunidades para aplicar mis habilidades en proyectos desafiantes. Hablemos de cómo puedo aportar valor a tu equipo.
          </motion.p>
          
          {/* Iconos de Redes Sociales */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center items-center gap-6 mb-16"
          >
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  whileHover={{ y: -5, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className={`w-16 h-16 rounded-2xl bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 flex items-center justify-center text-neutral-300
                              hover:text-white hover:border-neutral-600 hover:shadow-2xl ${item.glowColor} transition-all duration-300`}
                >
                  <Icon size={28} />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Copyright y marca personal */}
          <motion.div 
            variants={itemVariants}
            className="border-t border-neutral-800 pt-8"
          >
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-neutral-500">
              <p className="text-2xl font-bold tracking-tighter">
                JA<span className="text-primary-500">.</span>
              </p>
              <p className="text-sm">
                &copy; {new Date().getFullYear()} José Arbeláez. Diseñado y construido desde cero.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}