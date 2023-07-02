import { useState, useEffect, useRef } from 'react'
import Navbar from './components/navbar/Navbar'
import Mouse from './components/mouse/mouse'
import { HoverContextProvider } from './utils/HoverContext'

function App() {
  return (
    <>
      <HoverContextProvider>
        <Navbar />
        <Mouse />
      </HoverContextProvider>
    </>
  )
}

export default App
