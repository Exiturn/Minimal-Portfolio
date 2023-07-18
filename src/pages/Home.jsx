import toast, { Toaster } from "react-hot-toast";
import { useContext, useEffect } from "react";
import "react-custom-alert/dist/index.css";

import { HoverContext } from "../utils/HoverContext";

import Navbar from "../components/navbar/Navbar";
import Mouse from "../components/mouse/Mouse";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Works from "../components/works/Works.jsx";
import Skills from "../components/skills/Skills";
import Contact from "../components/contact/Contact";

const Home = () => {
  const { handleClick } = useContext(HoverContext);

  useEffect(() => {
    handleClick();
  }, []);

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
  );
};

export default Home;
