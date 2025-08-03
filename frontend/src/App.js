import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import InteractiveExperience from "./components/InteractiveExperience";
import InteractiveSkills from "./components/InteractiveSkills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/toaster";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <InteractiveExperience />
        <InteractiveSkills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </>
  );
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes here if needed */}
      </Routes>
    </div>
  );
}

export default App;
