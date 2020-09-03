import React from "react";
import "./App.css";
import Experience from "./components/experience/Experience.js";
import Header from "./components/header/Header.js";
import Skills from "./components/skills/Skills.js";
import Intro from "./components/intro/Intro";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="App">
      {document.body.scrollHeight >= 0 ? <Header /> : null}
      <Intro />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
