import { useState, useEffect } from "react";
//import { motion, AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Certification from "./components/Certification";
import Footer from "./components/Footer";
import SEO from "./components/SEO";
import Education from "./components/Education";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setNavScrolled(true) : setNavScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`min-h-screen ${darkMode ? "dark bg-gray-900" : "bg-white"}`}
    >
      <SEO
        title="Gopal Dhakal - Full Stack Developer"
        description="Portfolio of Gopal Dhakal showcasing MERN stack projects and skills."
      />
      <Header
        darkMode={darkMode}
        navScrolled={navScrolled}
        setDarkMode={setDarkMode}
      />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certification />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
