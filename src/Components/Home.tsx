import React from "react";

import { Box, Grid, Typography } from "@mui/material";

import clublogo from "../Images/Home/3d.svg";
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
          width: "100%",
        }}
      >
        <img
          src={car}
          alt="carImage"
          style={{
            height: "88vh",
            width: "100%",
            opacity: 0.6,
          }}
        />
      </div>
      <Grid container sx={{ backgroundColor: "black" }}>
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          p={3}
          m={1}
          justifyContent="space-between"
        >
          <Grid item>
            <Typography
              variant="h3"
              color="primary"
              sx={{ display: "inline", textTransform: "uppercase" }}
            >
              {"In the "}
            </Typography>
            <Typography
              variant="h3"
              color="secondary"
              sx={{ display: "inline", textTransform: "uppercase" }}
            >
              hadlines
            </Typography>
          </Grid>
          <Grid item container justifyContent="space-evenly" mt={3}>
            <MediaCard />
            <MediaCard />
            <MediaCard />
          </Grid>
        </Grid>

        <Grid
          container
          spacing={3}
          direction="column"
          justifyContent="space-between"
          p={3}
          m={1}
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h3" color="primary" sx={{ display: "inline" }}>
              {"CFI "}
            </Typography>
            <Typography
              variant="h3"
              color="secondary"
              sx={{ display: "inline" }}
            >
              SHOTS
            </Typography>
          </Grid>
          <Grid
            item
            container
            direction="row"
            alignItems="center"
            flexWrap="nowrap"
            p={2}
            spacing={4}
          >
            <Grid item>
              <Typography variant="body1" color="primary">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
                architecto sequi, ad at iste quos qui perferendis quam adipisci
                molestiae nam nisi nihil suscipit illum officiis, ab laborum
                placeat temporibus.
              </Typography>
            </Grid>
            <Grid item>
              <iframe
                width="300px"
                src="https://www.youtube.com/embed/MRB56CSroVs"
                title="CFI"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          p={3}
          m={1}
          justifyContent="space-between"
        >
          <Grid item>
            <Typography
              variant="h3"
              color="primary"
              sx={{ display: "inline", textTransform: "uppercase" }}
            >
              {"cfi "}
            </Typography>
            <Typography
              variant="h3"
              color="secondary"
              sx={{ display: "inline", textTransform: "uppercase" }}
            >
              clubs
            </Typography>
          </Grid>
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
      </Grid>
    </Grid>
  );
};

export default Home;
