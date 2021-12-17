import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Footer from "./Shared/Footer";
import Social from "./Shared/Social";
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
      <Social />
    </BrowserRouter>
  );
};

export default Routes;
