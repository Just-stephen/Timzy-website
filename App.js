import React from "react";
import Navv from "./components/Nav";
// import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  return (
    <div className="Appp">
      {/* <Navbar /> */}
      <Navv />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
