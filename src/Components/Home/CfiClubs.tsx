import React from "react";
import { Grid, Typography } from "@mui/material";

import Heading from "../../Widgets/Heading";
import clublogo from "../../Images/Home/3d.svg";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function CfiClubs() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid
      item
      container
      direction="column"
      alignItems="center"
      pt={10}
      justifyContent="space-between"
    >
      <Grid item>
        <Heading white="cfi " red="clubs" />
      </Grid>
      <Grid item></Grid>

      <Typography
        variant={matches ? "h6" : "h5"}
        color="primary.contrastText"
        sx={{
          textAlign: "center",
          width: `${matches ? "90%" : "68%"}`,
          fontFamily: "Proxima Nova Bold",
        }}
        mt={4}
      >
        Clubs at CFI are its functioning organs. Divided based on interest, each
        club represents a student group highly enthusiastic in that specific
        field. Knowledge transfer, resulting in reducing the learning period is
        the strength of clubs at CFI.
      </Typography>
      <Typography
        variant={matches ? "h6" : "h5"}
        color="primary.contrastText"
        sx={{ textAlign: "center", fontWeight: "bold" }}
        mt={3}
      >
        CFI is now home to 13 clubs:
      </Typography>
      {matches ? (
        <Grid
          item
          container
          justifyContent="center"
          spacing={1}
          pr={2}
          pl={2}
          mt={3}
        >
          <Grid item>
            <img src={clublogo} alt="logo" style={{ height: "100px" }}></img>
          </Grid>
          <Grid item>
            <img src={clublogo} alt="logo" style={{ height: "100px" }}></img>
          </Grid>
          <Grid item>
            <img src={clublogo} alt="logo" style={{ height: "100px" }}></img>
          </Grid>
          <Grid item>
            <img src={clublogo} alt="logo" style={{ height: "100px" }}></img>
          </Grid>
          <Grid item>
            <img src={clublogo} alt="logo" style={{ height: "100px" }}></img>
          </Grid>
          <Grid item>
            <img src={clublogo} alt="logo" style={{ height: "100px" }}></img>
          </Grid>
          <Grid item>
            <img src={clublogo} alt="logo" style={{ height: "100px" }}></img>
          </Grid>
          <Grid item>
            <img src={clublogo} alt="logo" style={{ height: "100px" }}></img>
          </Grid>
          <Grid item>
            <img src={clublogo} alt="logo" style={{ height: "100px" }}></img>
          </Grid>
          <Grid item>
            <img src={clublogo} alt="logo" style={{ height: "100px" }}></img>
          </Grid>
          <Grid item>
            <img src={clublogo} alt="logo" style={{ height: "100px" }}></img>
          </Grid>
          <Grid item>
            <img src={clublogo} alt="logo" style={{ height: "100px" }}></img>
          </Grid>
          <Grid item>
            <img src={clublogo} alt="logo" style={{ height: "100px" }}></img>
          </Grid>
        </Grid>
      ) : (
        <Grid
          item
          container
          direction="column"
          justifyContent="space-evenly"
          spacing={4}
          mt={3}
        >
          <Grid item container justifyContent="center" spacing={4}>
            <Grid item>
              <img src={clublogo} alt="logo" style={{ height: "150px" }}></img>
            </Grid>
            <Grid item>
              <img src={clublogo} alt="logo" style={{ height: "150px" }}></img>
            </Grid>
            <Grid item>
              <img src={clublogo} alt="logo" style={{ height: "150px" }}></img>
            </Grid>
            <Grid item>
              <img src={clublogo} alt="logo" style={{ height: "150px" }}></img>
            </Grid>
            <Grid item>
              <img src={clublogo} alt="logo" style={{ height: "150px" }}></img>
            </Grid>
            <Grid item>
              <img src={clublogo} alt="logo" style={{ height: "150px" }}></img>
            </Grid>
          </Grid>
          <Grid item container justifyContent="center" spacing={4}>
            <Grid item>
              <img src={clublogo} alt="logo" style={{ height: "150px" }}></img>
            </Grid>
            <Grid item>
              <img src={clublogo} alt="logo" style={{ height: "150px" }}></img>
            </Grid>
            <Grid item>
              <img src={clublogo} alt="logo" style={{ height: "150px" }}></img>
            </Grid>
            <Grid item>
              <img src={clublogo} alt="logo" style={{ height: "150px" }}></img>
            </Grid>
          </Grid>
          <Grid item container justifyContent="center" spacing={4}>
            <Grid item>
              <img src={clublogo} alt="logo" style={{ height: "150px" }}></img>
            </Grid>
            <Grid item>
              <img src={clublogo} alt="logo" style={{ height: "150px" }}></img>
            </Grid>
            <Grid item>
              <img src={clublogo} alt="logo" style={{ height: "150px" }}></img>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}
