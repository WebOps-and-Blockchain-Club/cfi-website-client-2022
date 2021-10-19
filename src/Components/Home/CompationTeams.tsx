import React from "react";
import { Grid, Typography } from "@mui/material";

import Heading from "../../Widgets/Heading";
import MediaCard from "../../Widgets/Card";

export default function CompationTeams() {
  return (
    <Grid
      item
      container
      direction="column"
      alignItems="center"
      p={3}
      m={1}
      mt={5}
    >
      <Heading white="compitition " red="teams" />
      <Grid item container justifyContent="space-between" mt={3} spacing={7}>
        <Grid item container justifyContent="center" spacing={4}>
          <Grid item>
            <MediaCard />
          </Grid>
          <Grid item>
            <MediaCard />
          </Grid>
        </Grid>
        <Grid item container justifyContent="center" spacing={4}>
          <Grid item>
            <MediaCard />
          </Grid>
          <Grid item>
            <MediaCard />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
