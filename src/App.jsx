import React from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Projects from "./Component/Projects";
import About from "./Component/About";
import Quiz from "./Projects/Quiz";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/projects?/:id' element={<Projects />} />
        <Route path='/about' element={<About />} />
        <Route path='/quiz' element={<Quiz />} />
      </Routes>
    </Router>
  );
}

export default App;
