import React from "react";
import { Grid, Typography } from "@mui/material";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import VisionImg from "../../Assets/Images/AboutUs/Vision.png";

function Vision() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      mt={3}
      mb={3}
      alignItems="center"
    >
      <Grid item p={{ sm: 1, md: 3, lg: 4 }}>
        <Typography
          variant={matches ? "h5" : "h4"}
          color="primary.contrastText"
          style={{ fontFamily: "Proxima Nova Bold" }}
        >
          VISION
        </Typography>
      </Grid>
      <Grid item container direction="row" justifyContent="center">
        <Grid
          container
          item
          alignItems="center"
          justifyContent="center"
          p={3}
          lg={5}
          md={5}
          sm={9}
          xs={12}
        >
          <img src={VisionImg} alt="cfi logo" style={{ width: "100%" }} />
        </Grid>
        <Grid
          item
          container
          p={matches ? 2 : 4}
          lg={6}
          md={6}
          sm={12}
          xs={12}
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            variant={matches ? "h6" : "h5"}
            color="primary.contrastText"
            ml={{ md: 10 }}
            sx={{
              fontFamily: "Proxima Nova Bold",
              fontStyle: "italic",
              fontSize: matches ? "1.32rem" : "1.7rem",
            }}
            textAlign="justify"
          >
            “To promote informal learning and foster innovation and invention in
            technology, with a focus on technologies aimed at contributing
            positively to the environment and to the society”
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Vision;
