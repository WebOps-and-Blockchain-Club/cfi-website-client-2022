import React from "react";
import { Grid, Typography } from "@mui/material";

import Heading from "../../Widgets/Heading";

function CfiVideo() {
  return (
    <Grid
      container
      spacing={3}
      direction="column"
      justifyContent="space-between"
      p={3}
      m={1}
      mt={3}
      alignItems="center"
    >
      <Heading white="cfi " red="shots" />
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
            molestiae nam nisi nihil suscipit illum officiis, ab laborum placeat
            temporibus.
          </Typography>
        </Grid>
        <Grid item>
          <iframe
            width="600px"
            height="400px"
            src="https://www.youtube.com/embed/MRB56CSroVs"
            title="CFI"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CfiVideo;
