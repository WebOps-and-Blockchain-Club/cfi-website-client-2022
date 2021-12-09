import React from "react";

import { Box, Grid } from "@mui/material";

/* Landing page images */

import Heading from "../Widgets/Heading";
import StudentHeads from "./ContactUs/StudentHeads";

import background2 from "../Images/background2.png";
import background from "../Images/particles.png";

interface Props {}

const AboutUs = (props: Props) => {
  return (
    <Grid
      container
      p={{ xs: 4, md: 6, lg: 10 }}
      direction="column"
      justifyItems="center"
      alignItems="center"
      sx={{
        background: "black",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <Heading white="CONTACT " red="US" />
      <StudentHeads />
    </Grid>
  );
};

export default AboutUs;
