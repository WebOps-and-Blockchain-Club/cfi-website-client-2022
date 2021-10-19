import React from "react";
import { Grid, Typography } from "@mui/material";

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
          <img src={facebook} style={{ height: "50px" }}></img>
        </Grid>
        <Grid item>
          <img src={instagram} style={{ height: "50px" }}></img>
        </Grid>
        <Grid item>
          <img src={twitter} style={{ height: "50px" }}></img>
        </Grid>
      </Grid>
      <Grid
        container
        mt={4}
        justifyContent="center"
        alignItems="center"
        color="primary"
      >
        <Grid item>
          <Typography variant="body1" color="primary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            voluptatibus eos, dolorem nisi porro inventore nobis delectus
            cupiditate hic repudiandae possimus labore nihil optio, ducimus
            fugit ex commodi? Natus, illo? Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Eveniet, eius quia, praesentium
            ratione debitis, voluptas est reiciendis ipsam autem ex numquam ea
            ab maiores eum ipsum nisi nam neque dicta.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
