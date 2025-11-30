import React from "react";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Project";
import TimelineScrollbar from "./Components/UI/TimelineScrollbar";
import "./App.css";

const App = () => {
  return (
    <div className="App" style={{ background: '#0a0a0a', minHeight: '100vh', overflowX: 'hidden' }}>
      <TimelineScrollbar />
      <Hero />
      <About />
      <Skills />
      <Projects />

      <footer style={{ padding: '2rem', textAlign: 'center', color: '#666', background: '#050505' }}>
        <p>&copy; {new Date().getFullYear()} Aphiwe Mntungwa. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
