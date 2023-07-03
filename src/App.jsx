import { useState, useEffect, useRef } from 'react'
import Navbar from './components/navbar/Navbar'
import Mouse from './components/mouse/mouse'
import { HoverContextProvider } from './utils/HoverContext'
import Circle from './components/backgroundCircle/Circle'
import Hero from './components/hero/Hero'

function App() {
  return (
    <>
      <HoverContextProvider>
        <Navbar />
        <Mouse />
        <Hero />
      </HoverContextProvider>
      <Circle />
    </>
  )
}

export default App
