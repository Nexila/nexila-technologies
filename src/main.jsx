import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Hackathon from "./pages/Hackathon";
import Internship from "./pages/Internship";
import About from "./pages/About";
import Contact from "./pages/Contact";

import "./pages/Home.css";

import CoursesPage from "./components/courses/CoursesPage";
import CourseDetail from "./components/courses/CourseDetail";

// Add these routes inside your existing <Routes>.

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nexila-hackathon-2026" element={<Hackathon />} />
        <Route path="/it-internship-for-students-tambaram-chennai" element={<Internship />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:slug" element={<CourseDetail />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);