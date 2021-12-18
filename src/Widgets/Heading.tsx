import React from "react";
import { Grid, Typography } from "@mui/material";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function Heading({ white, red }: { white: string; red: string }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const matches2 = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid item>
      <Typography
        variant={matches2 ? matches? "h5": "h4": "h3"}
        color="primary.contrastText"
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
        variant={matches2 ? matches? "h5": "h4": "h3"}
        color="secondary"
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

export default Heading;
