import toast, { Toaster } from 'react-hot-toast';
import 'react-custom-alert/dist/index.css';


import Navbar from '../components/navbar/Navbar'
import Mouse from '../components/mouse/mouse'
import Hero from '../components/hero/Hero'
import About from '../components/about/About'
import Works from '../components/works/Works'
import Skills from '../components/skills/Skills'
import Contact from '../components/contact/Contact'
import Project from '../pages/Project'

const Home = () => {
    return (
        <>
            <Navbar />
            <Mouse />
            <Hero />
            <About />
            <Skills />
            <Works />
            <Contact />
            <Toaster />
        </>
    )
}

export default Home