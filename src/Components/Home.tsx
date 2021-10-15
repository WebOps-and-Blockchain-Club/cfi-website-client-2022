import React from "react";
import { Box, Grid } from "@mui/material";
import background1 from "../Images/Home/firstImageHome.png";
import car from "../Images/Home/car.png";

interface Props {}

const Home = (props: Props) => {
  return (
    <Grid container>
      <Box component="div" sx={{ backgroundImage: `${background1}` }}>
        <img src={car} alt="carImage" />
      </Box>
    </Grid>
  );
};

export default Home;
