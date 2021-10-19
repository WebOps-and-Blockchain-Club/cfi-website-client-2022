import React from "react";
import { Grid, Typography } from "@mui/material";

function Heading({ white, red }: { white: string; red: string }) {
  return (
    <Grid item>
      <Typography
        variant="h3"
        color="primary"
        sx={{ display: "inline", textTransform: "uppercase" }}
      >
        {white}
      </Typography>
      <Typography
        variant="h3"
        color="secondary"
        sx={{ display: "inline", textTransform: "uppercase" }}
      >
        {red}
      </Typography>
    </Grid>
  );
}

export default Heading;
