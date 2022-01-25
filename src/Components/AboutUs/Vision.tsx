import React from "react";
import { Grid, Typography } from "@mui/material";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import cfilogo from "../../Assets/Images/CFILogo/CFI Logo (with text) - White - Copy.png";

function Vision() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      rowSpacing={3}
      direction="column"
      justifyContent="center"
      mt={3}
      mb={3}
      alignItems="center"
    >
      <Typography
        variant={matches ? "h5" : "h4"}
        color="primary.contrastText"
        p={matches ? 2 : 5}
        style={{ fontFamily: "Proxima Nova Bold" }}
      >
        VISION
      </Typography>
      <Grid item container direction="row" justifyContent="center">
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
            mr={{ md: 10 }}
            sx={{ fontFamily: "Proxima Nova Bold" }}
          >
            “To promote informal learning and foster innovation and invention in
            technology, with a focus on technologies aimed at contributing
            positively to the environment and to the society”
          </Typography>
        </Grid>
        <Grid
          container
          item
          sx={{
            background: "linear-gradient(138.5deg, #0000006b, #420101)",
            borderRadius: "20px",
          }}
          alignItems="center"
          justifyContent="center"
          p={3}
          lg={5}
          md={5}
          sm={9}
          xs={12}
        >
          <img
            src={cfilogo}
            alt="cfi logo"
            style={{ width: "50%", marginTop: "10%", marginBottom: "10%" }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Vision;
