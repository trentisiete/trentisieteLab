'use client'

import dynamic from 'next/dynamic'

const Hero = dynamic(() => import('@/components/Hero'), { ssr: false })
const Education = dynamic(() => import('@/components/Education'), { ssr: false })
const Projects = dynamic(() => import('@/components/Projects'), { ssr: false })
const Skills = dynamic(() => import('@/components/Skills'), { ssr: false })
const Contact = dynamic(() => import('@/components/Contact'), { ssr: false })

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Education />
      <Skills />
      <Contact />
    </main>
  )
} 