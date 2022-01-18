import React from "react";

import { Grid } from "@mui/material";

import Heading from "../Shared/Heading";
import Vision from "./Vision";
import Concepts from "./Concepts";
import History from "./History";

import background from "../../Assets/Images/particles.png";

interface Props {}

const AboutUs = (props: Props) => {
  return (
    <Grid
      container
      pl={{ xs: 2, sm: 4, md: 6, lg: 10 }}
      pr={{ xs: 2, sm: 4, md: 6, lg: 10 }}
      pt={{ xs: 2, sm: 4, md: 6, lg: 10 }}
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
      <Heading white="About " red="Us" />
      <Vision />
      <Concepts />
      <History />
    </Grid>
  );
};

export default AboutUs;
