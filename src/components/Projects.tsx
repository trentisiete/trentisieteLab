'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, ExternalLink, BrainCircuit, TrendingUp, Building2, ArrowRight } from 'lucide-react'
import Link from 'next/link'

// Definiendo la interfaz y los datos de los proyectos
interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  githubUrl?: string
  demoUrl?: string
  icon: React.ElementType
  path: string
  featured?: boolean
}

// --- ORDEN DE PROYECTOS ACTUALIZADO ---
// El proyecto de IA Generativa ahora es el primero para que sea el destacado.
const projects: Project[] = [
  {
    title: "IA Generativa: Modelos de Difusión con SDE",
    description: "Implementación desde cero de modelos de difusión estocástica (SDE) para la generación de imágenes, replicando papers de investigación y demostrando un profundo entendimiento de la arquitectura de redes neuronales.",
    image: "/projects/diffusion-sde.jpg",
    tags: ["Python", "PyTorch", "Deep Learning", "Generative AI", "SDE"],
    githubUrl: "https://github.com/josearbelaez/diffusion-sde",
    icon: BrainCircuit,
    path: "/projects/ai-diffusion",
    featured: true, // Marcamos este como el proyecto principal
  },
  {
    title: "Plataforma de Benchmarking para Gestión de Carteras",
    description: "Diseño y desarrollo de una plataforma robusta para evaluar y comparar estrategias de inversión con IA. ¡Clave para nuestro liderazgo en la Liga de Inversores de la UAM!",
    image: "/projects/benchmarking-preview.jpg",
    tags: ["Python", "Finanzas Cuantitativas", "Streamlit", "Optimización", "Backtesting"],
    githubUrl: "https://github.com/trentisiete/backtester_fondos",
    demoUrl: "https://diosfamiliafe.streamlit.app/",
    icon: TrendingUp,
    path: "/projects/benchmarking",
  },
  {
    title: "Plataforma de Servicios para Talleres",
    description: "Desarrollo full-stack de una solución integral para una red de talleres en Madrid, incluyendo app para clientes y panel de administración, en colaboración con Grupo Driver.",
    image: "/projects/autocenter/dashboard.jpg",
    tags: ["React", "Astro", "TypeScript", "Node.js", "API REST", "BBDD"],
    icon: Building2,
    path: "/projects/autocenter"
  },
];

// Componente de Tarjeta de Proyecto Rediseñado
const ProjectCard = ({ project, index }: { project: Project, index: number }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const Icon = project.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
      className={`group relative flex flex-col overflow-hidden rounded-3xl bg-white/50 backdrop-blur-sm border border-neutral-200/50 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ${
        // La lógica para destacar el primer elemento
        index === 0 ? 'lg:col-span-2' : ''
      }`}
    >
      <Link href={project.path} className="block absolute inset-0 z-10" aria-label={`Ver proyecto ${project.title}`} />
      
      {/* Contenido de la Imagen */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold">
                <ArrowRight size={16} />
                <span>Ver Detalles del Proyecto</span>
            </div>
        </div>
      </div>

      {/* Contenido de Texto */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-3 mb-3">
          <Icon className="text-primary-600" size={24} />
          <h3 className="text-xl font-bold text-neutral-900 line-clamp-2">{project.title}</h3>
        </div>
        <p className="text-neutral-600 mb-4 line-clamp-3 flex-grow">{project.description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.slice(0, 5).map((tag) => (
            <span key={tag} className="px-3 py-1 text-xs bg-primary-50 text-primary-700 font-semibold rounded-full border border-primary-100">
              {tag}
            </span>
          ))}
        </div>

        {/* Enlaces Externos */}
        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-neutral-200/80">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="flex items-center gap-2 text-neutral-500 hover:text-primary-600 transition-colors z-20 font-medium">
              <Github size={20} />
              <span>Código</span>
            </a>
          )}
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="flex items-center gap-2 text-neutral-500 hover:text-primary-600 transition-colors z-20 font-medium">
              <ExternalLink size={20} />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// Componente Principal de la Sección de Proyectos
export default function ProjectsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="projects" className="py-24 lg:py-32 relative overflow-hidden bg-grid-neutral-200/50">
      <div className="absolute inset-0 -z-10 bg-white" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-white/80 to-transparent" />
      
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-neutral-900 mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Una selección de proyectos donde aplico mis habilidades para crear soluciones tangibles, desde modelos de IA hasta plataformas web completas.
          </p>
        </motion.div>

        {/* La lógica del grid ahora destacará el primer proyecto del array */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}