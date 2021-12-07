import React from "react";
import { Grid, Typography } from "@mui/material";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { TopNewsData } from "../../Assets/Data/HomeData";

import Heading from "../../Widgets/Heading";
import MediaCard from "../../Widgets/Card";

export default function TopNews() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      item
      container
      direction="column"
      alignItems="center"
      justifyContent="space-between"
      sx={{ minHeight: "100vh" }}
      pt={10}
    >
      <Grid item>
        <Heading white="head" red="lines" />
      </Grid>
      <Grid item>
        <Typography
          variant={matches ? "h5" : "h4"}
          color="primary.contrastText"
          sx={{ textAlign: "center", fontWeight: "bold" }}
        >
          Top News
        </Typography>
      </Grid>
      <Grid item container justifyContent="space-evenly">
        {TopNewsData.map((n) => (
          <MediaCard heading={n.title} desc={n.desc} img={n.img} />
        ))}
      </Grid>
    </Grid>
  );
}
