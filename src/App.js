import "./index.css";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Menu from "./Components/Menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
