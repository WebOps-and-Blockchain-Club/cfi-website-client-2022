import React from "react";

import { Box, Grid, Typography } from "@mui/material";

import background2 from "../Images/Home/background2.svg";
import car from "../Images/Home/car.png";

import MediaCard from "../Widgets/Card";

interface Props {}

const Home = (props: Props) => {
  return (
    <Grid container>
      <div
        style={{
          // background: `linear-gradient(black 25%, white 25%),linear-gradient(to top ,white 25%, black 25%)`,
          background: `linear-gradient(rgb(56, 56, 56) 13%, white, black)`,
        }}
      >
        <img
          src={car}
          alt="carImage"
          style={{
            height: "70vh",
            width: "100%",
            opacity: 0.6,
          }}
        />
      </div>
      <Grid container sx={{ background: `${background2}` }}>
        <Grid item container>
          <Grid item>
            <Typography variant="h3" color="secondary">
              In the hadlines
            </Typography>
          </Grid>
          <Grid item container spacing={2} justifyContent="space-evenly">
            <MediaCard />
            <MediaCard />
            <MediaCard />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
