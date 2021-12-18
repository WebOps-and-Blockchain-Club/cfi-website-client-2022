import React from "react";

import { Grid } from "@mui/material";

/* Landing page images */
import CfiVideo from "./Home/CfiVideo";
import CfiClubs from "./Home/CfiClubs";
import CompationTeams from "./Home/CompationTeams";
import ContactUs from "./Home/ContactUs";
import TopNews from "./Home/TopNews";
import HomeSocial from "./Home/HomeSocial";
import TopCarousel from "./Home/Carousel";


import background from "../Images/particles.png";

interface Props {}

const Home = (props: Props) => {
  return (
    <Grid container sx={{ backgroundColor: "primary.main" }}>
      <Grid item>
        <TopCarousel />
      </Grid>
      <Grid container item sx={{ backgroundColor: "primary.main" , backgroundImage: `url(${background})` ,   backgroundSize: 'cover' , backgroundAttachment: 'fixed'  }}>
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
