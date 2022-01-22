import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./AboutUs";
import Home from "./Home";

interface Probs {}

const AppRoutes = (probs: Probs) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
