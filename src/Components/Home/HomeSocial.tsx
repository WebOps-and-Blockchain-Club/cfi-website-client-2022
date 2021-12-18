import React from "react";
import { Grid } from "@mui/material";

import facebook from "../../Images/Home/facebook.png";
import twitter from "../../Images/Home/twitter.png";
import instagram from "../../Images/Home/instagram.png";

export default function HomeSocial() {
  return (
    <Grid container>
      <Grid
        container
        justifyContent="space-around"
        mt={5}
        sx={{
          background: `linear-gradient(to right,black, #860000, black)`,
        }}
        p={2}
      >
        <Grid item>
          <img src={facebook} alt="Facebook" style={{ height: "50px" }}></img>
        </Grid>
        <Grid item>
          <img src={instagram} alt="Instagram" style={{ height: "50px" }}></img>
        </Grid>
        <Grid item>
          <img src={twitter} alt="Twitter" style={{ height: "50px" }}></img>
        </Grid>
      </Grid>
      <Grid
        container
        mt={4}
        justifyContent="center"
        alignItems="center"
        color="primary.contrastText"
      ></Grid>
    </Grid>
  );
}
