import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./AboutUs";
import Home from "./Home";
import Media from "./Media";

interface Probs {}

const AppRoutes = (probs: Probs) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/media" element={<Media />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
