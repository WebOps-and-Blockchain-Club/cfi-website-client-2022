import React from "react";

import { Box, Grid } from "@mui/material";

import Heading from "../Widgets/Heading";
import Vision from "./AboutUs/Vision";
import Concepts from "./AboutUs/Concepts";
import History from "./AboutUs/History";

import background2 from "../Images/background2.png";
import background from "../Images/particles.png";
import Footer from "./Shared/Footer";


/* Landing page images */

interface Props {}

const AboutUs = (props: Props) => {
  return (
    <Grid container
    pl={{ xs: 2, sm:4 , md: 6 , lg:10}}
    pr={{ xs: 2, sm:4 , md: 6 , lg:10}}
    pt={{ xs: 2, sm:4 , md: 6 , lg:10}}
    direction="column"
    justifyItems="center"
    alignItems="center"
    sx={{ background: "black" , backgroundImage: `url(${background})` ,   backgroundSize: 'cover' , backgroundAttachment: 'fixed' }}
    
    >
        <Heading white="About " red="Us" />
        <Vision/>
        <Concepts/>
        <History/>
        <Footer/>
    </Grid>
  );
};

export default AboutUs;
