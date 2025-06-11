'use client'

import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X, FileText, Mail, User, Code, GraduationCap } from 'lucide-react'
import ContactModal from './ContactModal'

const navItems = [
  { name: 'Inicio', href: '#home', icon: User },
  { name: 'Proyectos', href: '#projects', icon: Code },
  { name: 'Educación', href: '#education', icon: GraduationCap },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { scrollY } = useScroll()
  
  // Transforma el scroll en un valor de opacidad, desenfoque y sombra para el efecto "glassmorphism"
  const navStyle = {
    backgroundColor: useTransform(scrollY, [0, 100], ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.6)']),
    backdropFilter: useTransform(scrollY, [0, 100], ['blur(0px)', 'blur(16px)']),
    boxShadow: useTransform(scrollY, [0, 100], ['none', '0 4px_6px_-1px_rgb(0_0_0_/_0.05),_0_2px_4px_-2px_rgb(0_0_0_/_0.05)'])
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      let currentSection = 'home';
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element && element.offsetTop <= scrollPosition) {
          currentSection = sectionId;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href === '#contact') {
      setIsContactModalOpen(true);
      return;
    }
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const mobileMenuVariants = {
    open: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.4, ease: 'easeInOut', staggerChildren: 0.05, delayChildren: 0.1 }
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: 'easeInOut' }
    }
  };

  const mobileNavItemVariants = {
    open: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
    closed: { opacity: 0, y: -15 }
  };

  return (
    <>
      <motion.nav
        style={navStyle}
        className="fixed top-0 left-0 right-0 z-40 border-b border-transparent"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={() => handleNavClick('#home')}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="text-2xl font-bold text-neutral-900 tracking-tighter"
            >
              JA<span className="text-primary-600">.</span>
            </motion.a>

            {/* Desktop Navigation - Estilo unificado */}
            <div className="hidden lg:flex items-center bg-white/60 border border-neutral-200/80 rounded-xl p-1 shadow-sm">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-colors duration-300 ${
                    activeSection === item.href.substring(1) ? 'text-primary-600' : 'text-neutral-500 hover:text-primary-600'
                  }`}
                >
                  <item.icon size={16} />
                  <span>{item.name}</span>
                  {activeSection === item.href.substring(1) && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-white rounded-lg shadow-md -z-10"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Desktop CTA Buttons - Estilo unificado */}
            <div className="hidden lg:flex items-center space-x-4">
              <motion.a
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                href="/projects/Curriculum de Internships 2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary group rounded-xl"
              >
                <FileText size={16} className="mr-2 group-hover:scale-110 transition-transform" />
                CV
              </motion.a>
              
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                onClick={() => setIsContactModalOpen(true)}
                className="btn btn-primary group rounded-xl"
              >
                <Mail size={16} className="mr-2 group-hover:scale-110 transition-transform" />
                Contactar
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 rounded-xl bg-white/80 backdrop-blur-sm border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-primary-600 transition-colors"
              aria-label="Abrir menú"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-md border-t border-neutral-200"
            >
              <div className="container py-4 px-4 space-y-2">
                {navItems.map((item) => (
                  <motion.button
                    key={item.name}
                    variants={mobileNavItemVariants}
                    onClick={() => handleNavClick(item.href)}
                    className={`w-full flex items-center px-4 py-3 rounded-xl font-medium text-left transition-all duration-300 ${
                      activeSection === item.href.substring(1)
                        ? 'text-primary-600 bg-primary-100/50'
                        : 'text-neutral-700 hover:text-primary-600 hover:bg-neutral-100'
                    }`}
                  >
                    <item.icon size={18} className="mr-3" />
                    {item.name}
                  </motion.button>
                ))}
                
                <div className="pt-4 mt-2 border-t border-neutral-200 space-y-2">
                   <motion.button
                      variants={mobileNavItemVariants}
                      onClick={() => handleNavClick('#contact')}
                      className="w-full btn btn-primary justify-start"
                   >
                     <Mail size={16} className="mr-3" />
                     Contactar
                   </motion.button>
                  <motion.a
                    variants={mobileNavItemVariants}
                    href="/projects/Curriculum de Internships 2025.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full btn btn-secondary justify-start"
                  >
                    <FileText size={16} className="mr-3" />
                    Descargar CV
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <div className="h-20" />

      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  )
}