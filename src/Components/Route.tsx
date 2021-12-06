import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Achievements from "./Achievements";
import Clubs from "./Clubs";
import Home from "./Home";
import CompationTeams from "../Components/CompetitionTeams";
import Navbar from "./Shared/Navbar";

interface Probs {}

const Routes = (probs: Probs) => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/clubs" component={Clubs} />
        <Route exact path="/achievements" component={Achievements} />
        <Route exact path="/competitionteams" component={CompationTeams} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
