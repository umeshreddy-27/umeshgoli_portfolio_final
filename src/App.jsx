import React from 'react'
import Experience from './components/Projects'
import Preloader from './components/Preloader'
import ParticlesBackground from './components/ParticlesBackground'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="relative">
      <ScrollProgress />
      <Preloader />
      <ParticlesBackground />
      <Navbar />
      <main className="pt-28">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
