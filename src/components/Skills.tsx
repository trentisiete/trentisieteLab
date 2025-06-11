'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { BrainCircuit, Layers, TrendingUp, Cpu, Database, Server } from 'lucide-react'

// --- DATOS DE HABILIDADES REESTRUCTURADOS ---
// Se basan en tu CV y en tu formación para contar una historia coherente y profesional.

const skillPillars = [
  {
    title: "Data Science & Machine Learning",
    icon: BrainCircuit,
    gradient: "from-purple-500 to-pink-500",
    description: "Como pilar central de mi grado en Ciencia e Ingeniería de Datos, poseo un profundo conocimiento en todo el ciclo de vida de los modelos de Machine Learning, desde el tratamiento y visualización de datos hasta la construcción y validación de algoritmos complejos.",
    tags: [
      "Machine Learning", "Deep Learning", "Generative AI", "Diffusion Models", "Time Series", "Estadística Inferencial",
      "PyTorch", "TensorFlow", "Scikit-learn", "Pandas", "Matplotlib", "Plotly"
    ]
  },
  {
    title: "Data Engineering & Desarrollo Full-Stack",
    icon: Layers,
    gradient: "from-blue-500 to-cyan-500",
    description: "Mi formación en ingeniería me capacita para construir la infraestructura completa que soporta los productos de datos: desde el diseño de bases de datos y la creación de APIs robustas, hasta el desarrollo de aplicaciones web y móviles interactivas.",
    tags: [
      "Python", "JavaScript", "TypeScript", "React", "Astro", "React Native",
      "Node.js", "API RESTful", "Database Management", "SQL", "Git", "GitHub"
    ]
  },
  {
    title: "Análisis Cuantitativo y Financiero",
    icon: TrendingUp,
    gradient: "from-emerald-500 to-teal-500",
    description: "Aplico mi conocimiento en estadística y modelado para analizar los mercados financieros. Esta especialización combina mi pasión por los datos con las finanzas, materializada en el desarrollo de plataformas de backtesting y en la gestión de carteras.",
    tags: [
      "Quantitative Finance", "Financial Modeling", "Portfolio Management", "Benchmarking",
      "Algorithmic Strategies", "MQL5", "NumPy", "R", "Matlab"
    ]
  }
];

// --- COMPONENTE DE TARJETA REDISEÑADO ---
const PillarCard = ({ pillar, index }: { pillar: typeof skillPillars[0], index: number }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const IconComponent = pillar.icon;
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.15, ease: "easeOut" } }
  };
  const tagContainerVariants = {
    visible: { transition: { staggerChildren: 0.05, delayChildren: 0.4 } }
  };
  const tagVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="glass-card flex flex-col p-8 rounded-3xl border border-white/30 shadow-xl h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center text-white shadow-lg`}>
          <IconComponent size={28} />
        </div>
        <h3 className="text-2xl font-bold text-neutral-900">
          {pillar.title}
        </h3>
      </div>
      <p className="text-neutral-600 mb-6 flex-grow">{pillar.description}</p>
      <motion.div 
        variants={tagContainerVariants}
        className="flex flex-wrap gap-2"
      >
        {pillar.tags.map(tag => (
          <motion.span
            key={tag}
            variants={tagVariants}
            className="bg-primary-50/70 text-primary-800 font-medium text-sm px-3 py-1 rounded-full border border-primary-200/50"
          >
            {tag}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

// --- COMPONENTE PRINCIPAL DE LA SECCIÓN ---
export default function SkillsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="skills" className="py-24 lg:py-32 relative overflow-hidden bg-grid-neutral-200/50">
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
            Mis Áreas de Especialización
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            A lo largo de 3 años en el grado de Ciencia e Ingeniería de Datos, he construido una base sólida que me permite abordar problemas complejos desde la teoría hasta la implementación práctica.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillPillars.map((pillar, index) => (
            <PillarCard key={pillar.title} pillar={pillar} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}