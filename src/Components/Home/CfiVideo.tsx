import React from "react";
import { Grid, Typography } from "@mui/material";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import Heading from "../../Widgets/Heading";

function CfiVideo() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const matches2 = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid
      item
      container
      direction="column"
      alignItems="center"
      justifyContent="space-between"
      sx={{ minHeight: "100vh" }}
      pt={10}
    >
      <Grid item>
        <Heading white="about " red="cfi" />
      </Grid>
      <Grid item>
        <Typography
          variant={matches2 ? matches? "h6": "h5" :"h4"}
          color="primary.contrastText"
          sx={{ textAlign: "center", fontWeight: "bold" }}
          mt={3}
        >
          ‘‘Walk in with an idea, walk out with a product.’’
        </Typography>
      </Grid>
      <Grid
        item
        container
        spacing={4}
        alignItems="center"
        justifyContent="center"
        mt={3}
        sx={{ width: "100%" }}
      >
        <Grid item lg={7} xs={11}>
          <iframe
            width="100%"
            height={matches ? "200px" : "500px"}
            src="https://www.youtube.com/embed/MRB56CSroVs?autoplay=1"
            title="CFI"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </Grid>
        <Grid item lg={5} xs={11}>
          <Typography
            variant={matches ? "body2" : "h6"}
            color="primary.contrastText"
          >
            The Centre for Innovation (CFI) was established on the premise that
            innovation emerges through community interaction and the freedom to
            learn and experiment. Constituted in 2008, with the help of funds
            raised by the class of 1981, this unique 24/7 student lab is located
            at the New Academic Complex in the heart of campus.
          </Typography>

          <Typography
            variant={matches ? "body2" : "h6"}
            color="primary.contrastText"
          >
            After almost a decade of the team's zeal and passion, combined with
            a comprehensive inventory, ample workspace, guidance from faculty
            and students, CFI is a house to 14 clubs, 4 competition teams and
            counting.
          </Typography>

          <Typography
            variant={matches ? "body2" : "h6"}
            color="primary.contrastText"
          >
            These clubs' interests are spread over a wide spectrum primarily
            fostering innovation and invention in technology, with a focus on
            technologies aimed at contributing positively to the environment and
            to the society.
          </Typography>

          <Typography
            variant={matches ? "body2" : "h6"}
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
