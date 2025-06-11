'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Hero = dynamic(() => import('@/components/Hero'), { 
  ssr: false,
  loading: () => <div className="h-screen" />
})
const Education = dynamic(() => import('@/components/Education'), { 
  ssr: false,
  loading: () => <div className="h-screen" />
})
const Projects = dynamic(() => import('@/components/Projects'), { 
  ssr: false,
  loading: () => <div className="h-screen" />
})
const Skills = dynamic(() => import('@/components/Skills'), { 
  ssr: false,
  loading: () => <div className="h-screen" />
})
const Contact = dynamic(() => import('@/components/Contact'), { 
  ssr: false,
  loading: () => <div className="h-screen" />
})

export default function Home() {
  return (
    <main>
      <Suspense fallback={<div className="h-screen" />}>
        <Hero />
        <Projects />
        <Education />
        <Skills />
        <Contact />
      </Suspense>
    </main>
  )
} 