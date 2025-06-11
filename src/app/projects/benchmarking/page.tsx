'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowLeft,
  Github,
  Trophy,
  CheckCircle,
  Radio,
  Rocket,
  ClipboardList,
  BrainCircuit,
  ExternalLink,
  Code,
  HardDrive,
  Cpu
} from 'lucide-react'
import { useInView } from 'react-intersection-observer'

// --- DATOS ESTÁTICOS DEFINIDOS FUERA DEL COMPONENTE ---
// Esto mejora el rendimiento y evita problemas de parsing durante el renderizado.

const features = [
  { title: "Backtesting Robusto", description: "Simula estrategias con pesos fijos o dinámicos, rebalanceo y costes de transacción." },
  { title: "Análisis de Rendimiento", description: "Calcula métricas clave como CAGR, Sharpe, Sortino y Máximo Drawdown." },
  { title: "Comparativa vs. Benchmark", description: "Mide el rendimiento relativo con Alpha, Beta y Tracking Error." },
  { title: "Análisis de Riesgo Avanzado", description: "Estima el VaR y Expected Shortfall con métodos históricos y paramétricos." },
  { title: "Optimización de Carteras", description: "Encuentra la Frontera Eficiente, la cartera MVP y la de Máximo Sharpe." },
  { title: "Pruebas de Estrés y Escenarios", description: "Evalúa la resiliencia ante shocks y crisis históricas como la de 2008 o el COVID-19." },
  { title: "Simulación de Montecarlo", description: "Proyecta miles de posibles resultados futuros para tu cartera." },
  { title: "Análisis de Correlación", description: "Visualiza la relación entre activos con matrices estáticas y rodantes." },
  { title: "Contribución al Riesgo", description: "Descompone la volatilidad para entender el papel diversificador de cada activo." },
];

const technologies = [
  { name: "Python", description: "Núcleo del motor de análisis y cálculo." },
  { name: "Streamlit", description: "Framework para la interfaz de usuario interactiva." },
  { name: "Pandas & NumPy", description: "Manipulación y análisis de datos de alto rendimiento." },
  { name: "PyPortfolioOpt", description: "Librería para la optimización de carteras." },
  { name: "Plotly & Matplotlib", description: "Generación de visualizaciones y gráficos dinámicos." },
  { name: "Empyrical", description: "Cálculo de métricas de rendimiento financiero." },
];

// --- COMPONENTES REUTILIZABLES ---
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

// --- COMPONENTE PRINCIPAL DE LA PÁGINA ---
export default function BacktesterPage() {
  const { ref: mainRef, inView: mainInView } = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

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
          className="glass-card p-8 lg:p-12 rounded-3xl border border-white/40 shadow-2xl relative z-10 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-display font-extrabold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-6 leading-tight">
            Backtester Quant v5.0
          </h1>
          <p className="text-xl text-neutral-700 mb-10 max-w-4xl mx-auto">
            Un sistema integral para el análisis, optimización y gestión avanzada de carteras de inversión.
            Esta es la herramienta que ha sido clave en nuestro liderazgo en la competición de inversión y que ha sido reconocida en medios de comunicación.
          </p>

          {/* HITOS Y RECONOCIMIENTOS */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={mainInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 100 }}
              className="flex items-center gap-4"
            >
              <Trophy size={48} className="text-yellow-500 drop-shadow-md" />
              <div>
                <h2 className="text-2xl font-display font-bold text-neutral-800 text-left">Líderes en la Liga de Inversores UAM</h2>
                <p className="text-neutral-600 text-left">Herramienta probada en un entorno competitivo real.</p>
              </div>
          </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={mainInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6, type: "spring", stiffness: 100 }}
              className="flex items-center gap-4"
            >
              <Radio size={48} className="text-red-500 drop-shadow-md" />
              <div>
                <h2 className="text-2xl font-display font-bold text-neutral-800 text-left">Entrevista en Radio Intereconomía</h2>
                <p className="text-neutral-600 text-left">Reconocimiento externo de la innovación del proyecto.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* SECCIÓN: PROPÓSITO */}
        <SectionCard title="Propósito y Solución" icon={Rocket} delay={0.2}>
          <p>
            En el competitivo mundo de la inversión, tomar decisiones basadas en datos es crucial. El Backtester Quant v5.0 nació de la necesidad de contar con una herramienta sofisticada para analizar estrategias, gestionar el riesgo y optimizar carteras de manera sistemática.
            </p>
            <p className="mt-4">
            Nuestra solución ofrece un entorno "todo en uno" que va desde la simulación histórica hasta la proyección futura, permitiendo a los inversores moverse con mayor confianza y precisión. Es una plataforma diseñada para transformar datos en decisiones estratégicas.
            </p>
          </SectionCard>

        {/* SECCIÓN: FUNCIONALIDADES */}
        <SectionCard title="Capacidades de la Plataforma" icon={ClipboardList} delay={0.3}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={mainInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + idx * 0.05 }}
                  className="glass-card p-5 rounded-xl border border-white/20 shadow-md flex items-start gap-4 hover:shadow-lg transition-shadow duration-200"
                >
                  <CheckCircle size={24} className="text-primary-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-800 mb-1">{feature.title}</h3>
                    <p className="text-neutral-600 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </SectionCard>

        {/* SECCIÓN: TECNOLOGÍAS */}
        <SectionCard title="Stack Tecnológico" icon={Code} delay={0.4}>
            <p className="mb-6">
            El proyecto está construido sobre un stack de Python robusto, ideal para el análisis de datos y la computación científica.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {technologies.map((tech, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={mainInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + idx * 0.08 }}
                className="tech-badge flex items-center p-3 px-4 rounded-full bg-neutral-100 text-neutral-700 shadow-sm hover:shadow-md hover:bg-neutral-200 transition-all duration-200"
                >
                <span className="font-semibold text-base">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </SectionCard>

        {/* SECCIÓN: FUTURO DEL PROYECTO (VERSIÓN TÉCNICA Y PROFESIONAL) */}
        <SectionCard title="Hoja de Ruta Técnica: IA y Simulación Avanzada" icon={BrainCircuit} delay={0.5}>
          <p>
            El Backtester Quant v5.0 es un proyecto en <strong>proceso de mejora continua</strong>. El estado actual, enfocado en la monitorización y el análisis, es la base para la siguiente fase: la generación de estrategias de inversión mediante Inteligencia Artificial.
          </p>
          
          <h3 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4 flex items-center gap-3"><Cpu size={28} className="text-primary-600"/> 1. Agente de Inversión con Aprendizaje por Refuerzo (RL)</h3>
          <p>
            El objetivo es construir un agente autónomo que aprenda una política de inversión óptima. Esto va más allá de la optimización clásica, ya que el agente se adapta a las condiciones cambiantes del mercado.
          </p>
          <ul className="list-disc list-inside mt-4 space-y-3 text-neutral-600">
            <li>
              <strong>Entorno de Simulación:</strong> El motor de backtesting actual se adaptará para servir como el entorno de entrenamiento, donde el agente podrá interactuar y aprender de los datos históricos.
            </li>
            <li>
              <strong>Espacio de Estados (Observaciones):</strong> El agente tomará decisiones basándose en un conjunto rico de características, incluyendo: series temporales de precios, indicadores técnicos (RSI, MACD, Bandas de Bollinger), métricas de volatilidad (VIX), y los pesos actuales de la cartera.
            </li>
            <li>
              <strong>Espacio de Acciones:</strong> En lugar de simples acciones de "comprar/vender", el agente aprenderá a determinar el vector de pesos óptimo para la cartera en cada paso de tiempo. Esto representa un espacio de acciones continuo y más sofisticado.
            </li>
            <li>
              <strong>Función de Recompensa:</strong> Para guiar el aprendizaje, se diseñará una función de recompensa que no solo incentive el retorno, sino también el rendimiento ajustado al riesgo. Se utilizará el <strong>Differential Sharpe Ratio</strong>, que premia la mejora incremental y consistente del riesgo-retorno, junto con penalizaciones por exceso de rotación (turnover) y grandes drawdowns.
            </li>
            <li>
              <strong>Algoritmos:</strong> Se explorarán algoritmos de RL de vanguardia como <strong>PPO (Proximal Policy Optimization)</strong> o <strong>SAC (Soft Actor-Critic)</strong>, adecuados para entornos con espacios de acción continuos como la gestión de carteras.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold text-neutral-800 mt-8 mb-4 flex items-center gap-3"><HardDrive size={28} className="text-primary-600"/> 2. Migración a un Backtester Basado en Eventos</h3>
          <p>
            Para aumentar el realismo y la precisión de las simulaciones, se planea evolucionar del actual sistema vectorial a un motor de backtesting basado en eventos.
          </p>
          <ul className="list-disc list-inside mt-4 space-y-3 text-neutral-600">
            <li>
              <strong>Procesamiento Secuencial:</strong> Simulará el mercado tal como ocurre en la realidad, procesando los datos (barras de precios) uno a uno, en lugar de en bloques.
            </li>
            <li>
              <strong>Eliminación del Sesgo de Anticipación (Lookahead Bias):</strong> Esta arquitectura, por su naturaleza, previene uno de los errores más comunes y graves en el backtesting, asegurando que el modelo solo utilice información disponible en el momento de la decisión.
            </li>
            <li>
              <strong>Realismo en la Ejecución:</strong> Permitirá modelar con mayor fidelidad el impacto en el mercado (<em>market impact</em>), el deslizamiento (<em>slippage</em>) de las órdenes y la gestión de liquidez, aspectos cruciales en estrategias reales.
            </li>
            <li>
              <strong>Flexibilidad Estratégica:</strong> Abrirá la puerta al testeo de estrategias más complejas que dependen de múltiples tipos de órdenes (límite, stop-loss) y de la gestión explícita del efectivo y el apalancamiento.
            </li>
          </ul>
          </SectionCard>

        {/* SECCIÓN: LLAMADA A LA ACCIÓN */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={mainInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16 p-8 bg-primary-900/5 rounded-2xl border border-primary-200 shadow-md"
          >
          <h2 className="text-3xl font-bold text-primary-800 mb-4">Explora el Proyecto</h2>
            <p className="text-xl text-neutral-700 mb-8">
            El código es open-source y la aplicación está desplegada para que puedas probarla.
            </p>
            <div className="flex justify-center flex-wrap gap-6">
              <a
              href="https://github.com/trentisiete/backtester_fondos"
                target="_blank"
                rel="noopener noreferrer"
              className="btn btn-primary group px-8 py-4 rounded-xl flex items-center gap-3 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 bg-neutral-800 text-white hover:bg-neutral-900"
              >
              <Github size={22} className="group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-lg">Ver Código en GitHub</span>
              </a>
            <a
              href="https://diosfamiliafe.streamlit.app/"
                target="_blank"
                rel="noopener noreferrer"
              className="btn btn-secondary group px-8 py-4 rounded-xl flex items-center gap-3 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 bg-primary-600 text-white hover:bg-primary-700"
            >
              <ExternalLink size={22} className="group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-lg">Probar la Aplicación</span>
            </a>
            </div>
        </motion.div>

      </div>
    </div>
  );
}