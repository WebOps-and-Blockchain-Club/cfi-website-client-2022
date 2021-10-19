import React from "react";

import { Box, Grid, Typography } from "@mui/material";

import clublogo from "../Images/Home/3d.svg";
import car from "../Images/Home/car.png";
import background2 from "../Images/Home/background2.png";
import background3 from "../Images/Home/background3.png";
import contact from "../Images/Home/contact.png";
import facebook from "../Images/Home/facebook.png";
import twitter from "../Images/Home/twitter.png";
import instagram from "../Images/Home/instagram.png";

import MediaCard from "../Widgets/Card";
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
          background: `linear-gradient(rgb(56, 56, 56) 13%, white, black)`,
          width: "100%",
        }}
      >
        <img
          src={car}
          alt="carImage"
          style={{
            height: "90vh",
            width: "100%",
            opacity: 0.6,
          }}
        />
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
