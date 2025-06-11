'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail, Linkedin } from 'lucide-react'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        // Contenedor principal que usa Flexbox para centrar el modal.
        // - `fixed inset-0`: Cubre toda la pantalla y se mantiene en su sitio.
        // - `flex items-center justify-center`: Centra su contenido (el modal) vertical y horizontalmente.
        <div className="fixed inset-0 flex items-center justify-center z-50">
          
          {/* Capa de fondo oscura (Overlay) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />
          
          {/* Contenido del Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-md p-6 bg-white rounded-2xl shadow-2xl mx-4"
          >
            {/* Cabecera del Modal */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-neutral-900">
                Contacto
              </h2>
              <button
                onClick={onClose}
                className="p-2 text-neutral-500 hover:text-neutral-800 hover:bg-neutral-100 rounded-full transition-colors"
                aria-label="Cerrar modal"
              >
                <X size={24} />
              </button>
            </div>

            {/* Cuerpo del Modal */}
            <div className="space-y-4">
              <a
                href="mailto:jose.ancizar.667@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-neutral-50 hover:bg-neutral-100 transition-colors border border-transparent hover:border-neutral-200"
              >
                <Mail size={24} className="text-primary-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-neutral-900">Email Personal</p>
                  <p className="text-sm text-neutral-600">jose.ancizar.667@gmail.com</p>
                </div>
              </a>

              <a
                href="mailto:jose.arbelaez@estudiante.uam.es"
                className="flex items-center gap-4 p-4 rounded-xl bg-neutral-50 hover:bg-neutral-100 transition-colors border border-transparent hover:border-neutral-200"
              >
                <Mail size={24} className="text-primary-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-neutral-900">Email UAM</p>
                  <p className="text-sm text-neutral-600">jose.arbelaez@estudiante.uam.es</p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/jose-a-082b3a195/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-neutral-50 hover:bg-neutral-100 transition-colors border border-transparent hover:border-neutral-200"
              >
                <Linkedin size={24} className="text-primary-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-neutral-900">LinkedIn</p>
                  <p className="text-sm text-neutral-600">linkedin.com/in/jose-arbelaez</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}