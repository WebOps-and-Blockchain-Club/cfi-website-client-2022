import React from "react";
import { Grid, Typography } from "@mui/material";

import Heading from "../../Widgets/Heading";
import MediaCard from "../../Widgets/Card";

export default function TopNews() {
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
      <Heading white={"in the "} red="headlines" />
      <Grid item container justifyContent="space-evenly" mt={3}>
        <MediaCard />
        <MediaCard />
        <MediaCard />
      </Grid>
    </Grid>
  );
}
