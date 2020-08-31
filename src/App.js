import React from "react";
import "./App.css";
import Experience from "./components/experience/Experience.js";
import Footer from "./components/footer/Footer.js";
import Header from "./components/header/Header.js";
import Skills from "./components/skills/Skills.js";
import Intro from "./components/intro/Intro";

function App() {
  return (
    <div className="App">
      {document.body.scrollHeight >= 0 ? <Header /> : null}
      <Intro />
      <Skills />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
