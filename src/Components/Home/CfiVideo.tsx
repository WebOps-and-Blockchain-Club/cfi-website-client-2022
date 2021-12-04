import React from "react";
import { Grid, Typography } from "@mui/material";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import Heading from "../../Widgets/Heading";

function CfiVideo() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      spacing={3}
      direction="column"
      justifyContent="space-between"
      p={1}
      mt={3}
      alignItems="center"
    >
      <Heading white="about " red="cfi" />
      <Typography
        variant={matches ? "h5" : "h4"}
        color="primary.contrastText"
        p={2}
        sx={{ textAlign: "center", fontWeight: "bold" }}
      >
        ‘‘Walk in with an idea, walk out with a product.’’
      </Typography>
      <Grid
        item
        container
        direction="row"
        alignItems="center"
        justifyContent="space-around"
      >
        <Grid item lg={5} xs={12} p={1}>
          <iframe
            width="100%"
            height={matches ? "200px" : "400px"}
            src="https://www.youtube.com/embed/MRB56CSroVs"
            title="CFI"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </Grid>
        <Grid item lg={5} xs={12} p={1}>
          <Typography
            variant={matches ? "body2" : "body1"}
            color="primary.contrastText"
          >
            The Centre for Innovation (CFI) was established on the premise that
            innovation emerges through community interaction and the freedom to
            learn and experiment. Constituted in 2008, with the help of funds
            raised by the class of 1981, this unique 24/7 student lab is located
            at the New Academic Complex in the heart of campus.
          </Typography>

          <Typography
            variant={matches ? "body2" : "body1"}
            color="primary.contrastText"
          >
            After almost a decade of the team's zeal and passion, combined with
            a comprehensive inventory, ample workspace, guidance from faculty
            and students, CFI is a house to 14 clubs, 4 competition teams and
            counting.
          </Typography>

          <Typography
            variant={matches ? "body2" : "body1"}
            color="primary.contrastText"
          >
            These clubs' interests are spread over a wide spectrum primarily
            fostering innovation and invention in technology, with a focus on
            technologies aimed at contributing positively to the environment and
            to the society.
          </Typography>

          <Typography
            variant={matches ? "body2" : "body1"}
            color="primary.contrastText"
          >
            Several CFI projects have been patented and have received national
            recognition. The team frequently represents IIT Madras in national
            and international competitions. It also constitutes an integral part
            of IIT Madras' entrepreneurial culture, with many CFI projects
            turning into startups.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CfiVideo;
