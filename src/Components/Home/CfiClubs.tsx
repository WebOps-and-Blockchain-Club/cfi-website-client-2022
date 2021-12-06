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
      p={3}
      m={1}
      mt={3}
      justifyContent="space-between"
    >
      <Heading white="cfi " red="clubs" />
      <Typography
        variant={matches ? "h6" : "h5"}
        color="primary.contrastText"
        sx={{
          textAlign: "center",
          width: `${matches ? "100%" : "68%"}`,
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
        mt={2}
        mb={3}
      >
        CFI is now home to 13 clubs:
      </Typography>
      {matches ? (
        <Grid
          item
          container
          direction="column"
          justifyContent="space-evenly"
          mt={3}
          spacing={1}
        >
          <Grid item container justifyContent="center" spacing={1}>
            <Grid item>
              <img src={clublogo} style={{ height: "100px" }}></img>
            </Grid>
            <Grid item>
              <img src={clublogo} style={{ height: "100px" }}></img>
            </Grid>
            <Grid item>
              <img src={clublogo} style={{ height: "100px" }}></img>
            </Grid>
            <Grid item>
              <img src={clublogo} style={{ height: "100px" }}></img>
            </Grid>
            <Grid item>
              <img src={clublogo} style={{ height: "100px" }}></img>
            </Grid>
            <Grid item>
              <img src={clublogo} style={{ height: "100px" }}></img>
            </Grid>
            <Grid item>
              <img src={clublogo} style={{ height: "100px" }}></img>
            </Grid>
            <Grid item>
              <img src={clublogo} style={{ height: "100px" }}></img>
            </Grid>
            <Grid item>
              <img src={clublogo} style={{ height: "100px" }}></img>
            </Grid>
            <Grid item>
              <img src={clublogo} style={{ height: "100px" }}></img>
            </Grid>
            <Grid item>
              <img src={clublogo} style={{ height: "100px" }}></img>
            </Grid>
            <Grid item>
              <img src={clublogo} style={{ height: "100px" }}></img>
            </Grid>
            <Grid item>
              <img src={clublogo} style={{ height: "100px" }}></img>
            </Grid>
          </Grid>
        </Grid>
      ) : (
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
      )}
    </Grid>
  );
}
