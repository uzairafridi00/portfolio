import "./App.css";
import React from "react";
import Card from "./components/Card";
import About from "./components/About";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

import { useEffect } from "react";

// Animantion on Scroll Library
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  });

  return (
    <>
      <div className="min-h-screen py-10 px-3 sm:px-5 bg-gray-100">
        <div data-aos="fade-down" data-aos-duration="800">
          <Card />
        </div>

        <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
          <About />
        </div>

        <div data-aos="zoom-in" data-aos-duration="800">
          <Skills />
        </div>

        <div data-aos="fade-left" data-aos-duration="800" data-aos-delay="400">
          <Contact />
        </div>

        <div data-aos="fade-right" data-aos-duration="800" data-aos-delay="400">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
