import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Hero as V } from './components/Hero';
import Footer from './components/Footer';
import { Contact } from "./components/contact/Contact";
import { About } from "./components/About";
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
    <Router>
      {/* Components visible on every page */}
      <Routes>
        <Route path="/" element={<V />} />
        <Route path="/blog" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
