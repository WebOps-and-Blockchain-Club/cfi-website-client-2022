import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wrapper from "../Utils/scrollToTop";
import AboutUs from "./AboutUs";
import Achievements from "./Achievements";
import Alumni from "./Alumni";
import Club from "./Community/Club";
import CompetitionTeam from "./Community/CompetitionTeam";
import ManagerialTeam from "./Community/ManagerialTeam";
import ContactUs from "./ContactUs";
import Home from "./Home";
import Media from "./Media";

interface Probs {}

const AppRoutes = (probs: Probs) => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clubs/:clubname" element={<Club />} />
          <Route
            path="/competition-teams/:teamname"
            element={<CompetitionTeam />}
          />
          <Route path="/managerial-team" element={<ManagerialTeam />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/media" element={<Media />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
};

export default AppRoutes;
