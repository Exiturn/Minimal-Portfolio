import { useState, useEffect, useRef } from 'react'
import Navbar from './components/navbar/Navbar'
import Mouse from './components/mouse/mouse'
import { HoverContextProvider } from './utils/HoverContext'
import Circle from './components/backgroundCircle/Circle'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Works from './components/works/Works'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'

function App() {
  return (
    <>
      <div>
        <HoverContextProvider>
          <Navbar />
          <Mouse />
          <Hero />
          <About />
          <Skills />
          <Works />
          <Contact />
        </HoverContextProvider>
        <Circle />
      </div>
    </>
  )
}

export default App
