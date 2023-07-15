import { useState, useEffect, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import 'react-custom-alert/dist/index.css';


import Navbar from './components/navbar/Navbar'
import Mouse from './components/mouse/mouse'
import { HoverContextProvider } from './utils/HoverContext'
import Circle from './components/backgroundCircle/Circle'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Works from './components/works/Works'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'
import Project from './pages/Project'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <HoverContextProvider>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </HoverContextProvider>
      <Circle />
      <Toaster />
    </Router>
  )
}

export default App
