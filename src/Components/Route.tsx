import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./AboutUs";
import Club from "./Community/Club";
import CompetitionTeam from "./Community/CompetitionTeam";
import ManagerialTeam from "./Community/ManagerialTeam";
import Home from "./Home";
import Media from "./Media";

interface Probs {}

const AppRoutes = (probs: Probs) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clubs/:clubname" element={<Club />} />
        <Route
          path="/competition-teams/:teamname"
          element={<CompetitionTeam />}
        />
        <Route path="/managerial-team" element={<ManagerialTeam />} />
        <Route path="/media" element={<Media />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
