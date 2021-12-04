import React from "react";

import { Box, Grid } from "@mui/material";

/* Landing page images */
import car from "../Images/Home/Landing images/car.jpg";

import background2 from "../Images/Home/background2.png";

import Heading from "../Widgets/Heading";
import CfiVideo from "./Home/CfiVideo";
import CfiClubs from "./Home/CfiClubs";
import CompationTeams from "./Home/CompationTeams";
import ContactUs from "./Home/ContactUs";
import TopNews from "./Home/TopNews";
import HomeSocial from "./Home/HomeSocial";
import TopCarousel from "./Home/Carousel";

interface Props {}

const Home = (props: Props) => {
  return (
    <Grid container>
      <Grid item>
        <TopCarousel />
      </Grid>
      <Grid container item sx={{ background: `url(${background2})` }}>
        <TopNews />
        <CfiVideo />
        <CfiClubs />
        <CompationTeams />
        <ContactUs />
        <HomeSocial />
      </Grid>
    </Grid>
  );
};

export default Home;
