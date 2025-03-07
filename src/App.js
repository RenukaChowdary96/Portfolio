import React, { useState, useEffect } from "react";
import Preloader from "./components/Preloder";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";
import "./styles/App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div className="app">
          <Sidebar />
          <div className="content">
            {/* Each section has an ID for scrolling */}
            <section id="home">
              <Home />
            </section>
            <section id="about">
              <About />
            </section>
            <section id="skills">
              <Skills />
            </section>
            <section id="projects">
              <Projects />
            </section>
            <section id="achievements">
              <Achievements />
            </section>
            <section id="contact">
              <Contact />
            </section>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
