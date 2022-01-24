import React from "react";

import { Grid } from "@mui/material";

import CustomBox from "../Shared/CustomBox";
import Heading from "../Shared/Heading";

import Vision from "./Vision";
import Concepts from "./Concepts";
import History from "./History";

interface Props {}

const AboutUs = (props: Props) => {
  return (
    <CustomBox>
      <Grid
        container
        pl={{ xs: 2, sm: 4, md: 6, lg: 10 }}
        pr={{ xs: 2, sm: 4, md: 6, lg: 10 }}
        pt={{ xs: 10, sm: 12, md: 14, lg: 16 }}
        pb={{ xs: 2, sm: 6, md: 10, lg: 14 }}
        direction="column"
        justifyItems="center"
        alignItems="center"
      >
        <Heading white="About " red="Us" />
        <History />
        <Vision />
        <Concepts />
      </Grid>
    </CustomBox>
  );
};

export default AboutUs;
