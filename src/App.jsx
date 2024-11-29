import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Hero as V } from './components/Hero';
import Footer from './components/Footer';
import Intro  from "./components/services/Intro";
import { Nav } from "./components/Nav";
import Contact from "./components/contact/Contact"
import { About } from "./components/About";
import Service from "./components/service/Service";
import {Blog}from "./components/Blog"

import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      easing: "ease-in-out", // Easing function
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <>
 
    <Router>
      {/* Components visible on every page */}
      <Nav/>
      <Routes>
        <Route path="/" element={<V />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Intro/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/blog" element={<Blog/>} />
        
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
