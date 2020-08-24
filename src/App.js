import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Experience from "./components/experience/Experience.js";
import Footer from "./components/footer/Footer.js";
import Header from "./components/header/Header.js";
import Intro from "./components/intro/Intro.js";
import Skills from "./components/skills/Skills.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Skills />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
