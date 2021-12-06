import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Navbar from "./Shared/Navbar";

interface Probs {}

const Routes = (probs: Probs) => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/aboutus" component={AboutUs} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
