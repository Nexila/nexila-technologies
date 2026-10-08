import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Hackathon from "./pages/Hackathon";
import Internship from "./pages/Internship";
import About from "./pages/About";
import Contact from "./pages/Contact";

import "./pages/Home.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nexila-hackathon" element={<Hackathon />} />
        <Route path="/nexila-internship" element={<Internship />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
