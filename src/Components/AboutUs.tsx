import React from "react";

import { Box, Grid } from "@mui/material";

import Heading from "../Widgets/Heading";
import Vision from "./AboutUs/Vision";
import Concepts from "./AboutUs/Concepts";
import History from "./AboutUs/History";

import background2 from "../Images/background2.png";
import background from "../Images/particles.png";


/* Landing page images */

interface Props {}

const AboutUs = (props: Props) => {
  return (
    <Grid container
    p={{ xs: 4, md: 6 , lg:10}}
    direction="column"
    justifyItems="center"
    alignItems="center"
    sx={{ background: "black" , backgroundImage: `url(${background})` ,   backgroundSize: 'cover' , backgroundAttachment: 'fixed' }}
    
    >
        <Heading white="About " red="Us" />
        <Vision/>
        <Concepts/>
        <History/>
    </Grid>
  );
};

export default AboutUs;
