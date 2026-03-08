import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import CustomCursor from './components/CustomCursor'

function App() {
  return (
    <div className="relative min-h-screen bg-brutalist-darkgray text-white overflow-x-hidden">
      <CustomCursor/>
      <Navbar/>
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-12 bg-brutalist-darkgray">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">         
            <p className="text-brutalist-neon font-black brutalist-text text-sm">
              /// DESIGNED & BUILT <span className="text-brutalist-purple">BY</span> MATIAS SECO © 2025
            </p>
        </div>
      </footer>
    </div>
  )
}

export default App
