import React from "react";
import { Grid, Typography } from "@mui/material";

import Heading from "../../Widgets/Heading";
import clublogo from "../../Images/Home/3d.svg";

export default function CfiClubs() {
  return (
    <Grid
      item
      container
      direction="column"
      alignItems="center"
      p={3}
      m={1}
      mt={3}
      justifyContent="space-between"
    >
      <Heading white="cfi " red="clubs" />
      <Grid
        item
        container
        direction="column"
        justifyContent="space-evenly"
        mt={3}
        spacing={4}
      >
        <Grid item container justifyContent="center" spacing={4}>
          <Grid item>
            <img src={clublogo} style={{ height: "150px" }}></img>
          </Grid>
          <Grid item>
            <img src={clublogo} style={{ height: "150px" }}></img>
          </Grid>
          <Grid item>
            <img src={clublogo} style={{ height: "150px" }}></img>
          </Grid>
          <Grid item>
            <img src={clublogo} style={{ height: "150px" }}></img>
          </Grid>
          <Grid item>
            <img src={clublogo} style={{ height: "150px" }}></img>
          </Grid>
          <Grid item>
            <img src={clublogo} style={{ height: "150px" }}></img>
          </Grid>
        </Grid>
        <Grid item container justifyContent="center" spacing={4}>
          <Grid item>
            <img src={clublogo} style={{ height: "150px" }}></img>
          </Grid>
          <Grid item>
            <img src={clublogo} style={{ height: "150px" }}></img>
          </Grid>
          <Grid item>
            <img src={clublogo} style={{ height: "150px" }}></img>
          </Grid>
          <Grid item>
            <img src={clublogo} style={{ height: "150px" }}></img>
          </Grid>
        </Grid>
        <Grid item container justifyContent="center" spacing={4}>
          <Grid item>
            <img src={clublogo} style={{ height: "150px" }}></img>
          </Grid>
          <Grid item>
            <img src={clublogo} style={{ height: "150px" }}></img>
          </Grid>
          <Grid item>
            <img src={clublogo} style={{ height: "150px" }}></img>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
