  import type { Metadata } from 'next'
  import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
  import './globals.css'
  import Navbar from '@/components/Navbar'

  const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
  })

  const plusJakarta = Plus_Jakarta_Sans({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-plus-jakarta',
  })

  const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-jetbrains-mono',
  })

  export const metadata: Metadata = {
    title: 'José Arbeláez | Data Science & AI Engineer',
    description: 'Portafolio profesional de José Arbeláez, especialista en Data Science e Inteligencia Artificial.',
    keywords: ['Data Science', 'AI', 'Machine Learning', 'Deep Learning', 'Portfolio'],
  }

  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="es" className={`${inter.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} scroll-smooth`}>
        <body className="antialiased">
          <Navbar />
          {children}
        </body>
      </html>
    )
  } 