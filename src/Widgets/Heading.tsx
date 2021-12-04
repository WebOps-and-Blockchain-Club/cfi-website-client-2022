import React from "react";
import { Grid, Typography } from "@mui/material";

function Heading({ white, red }: { white: string; red: string }) {
  return (
    <Grid item>
      <Typography
        variant="h3"
        color="primary.contrastText"
        sx={{
          display: "inline",
          textTransform: "uppercase",
          fontFamily: "fantasy",
        }}
      >
        {white}
      </Typography>
      <Typography
        variant="h3"
        color="secondary"
        sx={{
          display: "inline",
          textTransform: "uppercase",
          fontFamily: "fantasy",
        }}
      >
        {red}
      </Typography>
    </Grid>
  );
}

export default Heading;
