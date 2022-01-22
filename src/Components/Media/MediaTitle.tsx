import React from "react";
import { Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function MediaTitle({ white, red }: { white: string; red: string }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid item textAlign="center">
      <Typography
        variant={matches ? "h6" : "h4"}
        color="secondary"
        sx={{
          display: "inline",
          textTransform: "uppercase",
          fontFamily: "Proxima Nova Bold",
          textAlign: "center",
        }}
      >
        {white}
      </Typography>
      <Typography
        variant={matches ? "h6" : "h4"}
        color="primary.contrastText"
        sx={{
          display: "inline",
          textTransform: "uppercase",
          fontFamily: "Proxima Nova Bold",
          textAlign: "center",
        }}
      >
        {red}
      </Typography>
    </Grid>
  );
}

export default MediaTitle;
