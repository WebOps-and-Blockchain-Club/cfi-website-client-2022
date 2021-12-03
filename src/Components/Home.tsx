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

interface Props {}

const Home = (props: Props) => {
  return (
    <Grid container>
      <div
        style={{
          backgroundImage: `url(${car})`,
          width: "100vw",
          height: "90vh",
          backgroundBlendMode: "soft-light",
          backgroundSize: "cover",
        }}
      >
        <Box
          component="span"
          sx={{ position: "absolute", bottom: "0" }}
          m={2}
          ml={4}
        >
          <Heading white="India's largest student run " red="innovation lab" />
        </Box>
      </div>
      <Grid container sx={{ background: `url(${background2})` }}>
        <TopNews />
        <CfiVideo />
        <CfiClubs />
        <CompationTeams />
        <HomeSocial />
        <ContactUs />
      </Grid>
    </Grid>
  );
};

export default Home;
