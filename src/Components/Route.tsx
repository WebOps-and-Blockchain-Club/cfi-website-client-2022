import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Navbar from "./Shared/Navbar";
import Footer from "./Shared/Footer";

interface Probs {}

const Routes = (probs: Probs) => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={AboutUs} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
