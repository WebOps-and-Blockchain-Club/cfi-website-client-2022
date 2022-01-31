import React, { useState } from "react";

import { Grid, Typography, Box } from "@mui/material";

import Idea1 from "../../Assets/Images/AboutUs/idea1.png";
import Idea2 from "../../Assets/Images/AboutUs/idea2.png";
import Idea3 from "../../Assets/Images/AboutUs/idea3.png";
import Idea4 from "../../Assets/Images/AboutUs/idea4.png";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import "../../Styles/aboutus.css";

function Concepts() {
  const theme = useTheme();
  const matcheslg = useMediaQuery(theme.breakpoints.down("lg"));
  const matches2 = useMediaQuery(theme.breakpoints.down("md"));
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const [ishover, setIshover] = useState(false);
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      mt={3}
      mb={12}
      p={{ xs: 0, sm: 2, md: 4, lg: 8 }}
      alignItems="center"
    >
      <Typography
        variant={matches ? "h5" : "h4"}
        color="primary.contrastText"
        p={{ sm: 1, md: 3, lg: 4 }}
        style={{ fontFamily: "Proxima Nova Bold" }}
        textAlign={"center"}
      >
        The CFI vision is being achieved by espousing three major concepts.
      </Typography>

      {/* CONCEPT 1 */}
      <Grid
        item
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        mt={4}
        mb={4}
      >
        <Grid
          item
          container
          direction="column"
          justifyContent="center"
          lg={6}
          md={6}
          sm={12}
          xs={12}
          p={{ xs: 2, sm: 3, md: 4 }}
        >
          <Typography
            variant={matches2 ? (matches ? "h6" : "h5") : "h4"}
            color="primary.contrastText"
            textAlign={"justify"}
            sx={{ fontFamily: "Proxima Nova Bold", marginBottom: "10px" }}
          >
            Walk in with an idea, walk out with a product
          </Typography>
          <Typography
            variant={matches2 ? "body1" : "h6"}
            color="primary.contrastText"
            textAlign={"justify"}
          >
            Among the general demographic, students are more likely to come up
            with new, creative and outrageous ideas. Add to this the fact that
            students at IIT Madras are competent in engineering studies, we get
            a potent mix of creative and skilled set of people who are ready to
            innovate. To realize these strengths of the student community, the
            CFI will provide the right environment and resources. CFI will try
            to be a place where a student can ‘walk in with an idea and walk out
            with a product’. The innovation itself is sometimes only a small
            part of the story as it encourages students to think freely. Free
            thinking leaders are an asset to and future leaders of any society.
          </Typography>
        </Grid>
        <Grid
          container
          item
          alignItems="center"
          justifyContent="center"
          lg={6}
          md={6}
          sm={10}
          xs={12}
        >
          <Grid
            container
            item
            alignItems="center"
            width="90%"
            justifyContent="center"
          >
            <img
              src={Idea1}
              alt="Idea"
              style={{
                boxShadow: "6px 6px 6px 6px #7e0000",
                borderRadius: "20px",
                width: matches ? "100%" : "99%",
              }}
            />
          </Grid>
        </Grid>
      </Grid>

      {/* CONCEPT 2 */}
      <Grid
        item
        container
        direction="row-reverse"
        alignItems="center"
        justifyContent="center"
        mt={4}
        mb={4}
      >
        <Grid
          item
          container
          direction="column"
          justifyContent="center"
          lg={6}
          md={6}
          sm={12}
          xs={12}
          p={{ xs: 2, sm: 3, md: 4 }}
        >
          <Typography
            variant={matches2 ? (matches ? "h6" : "h5") : "h4"}
            color="primary.contrastText"
            textAlign={"justify"}
            sx={{ fontFamily: "Proxima Nova Bold", marginBottom: "10px" }}
          >
            A futuristic lab environment
          </Typography>
          <Typography
            variant={matches2 ? "body1" : "h6"}
            color="primary.contrastText"
            textAlign={"justify"}
          >
            The interiors of CFI are being developed in collaboration with a
            celebrated green architect. The interiors are being designed to
            stimulate creative thinking, to be non-linear and adaptive, to be
            informal and ice-cream shop relaxing. The most important part of the
            innovation process is free thinking and the interiors of CFI aims at
            giving that freedom to its users. CFI will have large empty spaces.
            Large empty spaces serve as areas which clear up mental clutter,
            especially when users are in a creative block. They also serve as
            space for future expansion. CFI will also have a gallery that will
            showcase successful projects.
          </Typography>
        </Grid>
        <Grid
          container
          item
          alignItems="center"
          justifyContent="center"
          p={3}
          lg={6}
          md={6}
          sm={12}
          xs={12}
        >
          <Box
            style={{
              width: matches ? "95%" : "75%",
              marginTop: matches ? 0 : "5%",
              marginBottom: matches ? 0 : "5%",
              position: "relative",
              height: matches
                ? "200px"
                : matches2
                ? "325px"
                : matcheslg
                ? " 250px"
                : "300px",
            }}
          >
            <img
              src={Idea3}
              alt="Idea"
              style={{
                width: "75%",
                height: "70%",
                position: "absolute",
                left: "0px",
                bottom: "0px",
                zIndex: ishover ? 5 : 0,
                borderRadius: "20px",
              }}
              onMouseEnter={() => setIshover(true)}
              className="aboutus-image2-hover"
            />
            <img
              src={Idea2}
              alt="Idea"
              style={{
                width: "75%",
                height: "70%",
                position: "absolute",
                top: "0px",
                right: "0px",
                zIndex: ishover ? 0 : 5,
                borderRadius: "20px",
              }}
              className="aboutus-image1-hover"
              onMouseEnter={() => setIshover(false)}
            />
          </Box>
        </Grid>
      </Grid>

      {/* CONCEPT 3 */}
      <Grid
        item
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        mt={4}
        mb={4}
      >
        <Grid
          item
          container
          direction="column"
          justifyContent="center"
          lg={6}
          md={6}
          sm={12}
          xs={12}
          p={{ xs: 2, sm: 3, md: 4 }}
        >
          <Typography
            variant={matches2 ? (matches ? "h6" : "h5") : "h4"}
            color="primary.contrastText"
            sx={{ fontFamily: "Proxima Nova Bold", marginBottom: "10px" }}
          >
            Support large student team projects
          </Typography>
          <Typography
            variant={matches2 ? "body1" : "h6"}
            color="primary.contrastText"
            textAlign={"justify"}
          >
            CFI will support large student projects. These projects maybe for
            international contests such as Formula-SAE, University Rover
            Challenge, Intelligent Ground Vehicle Challenge or the famous
            Hyperloop Competition. They may also be for showcasing Shaastra
            series of Spirit of Engineering (SoE) projects. Such projects
            encourage teamwork and build character and confidence in the
            students and serve as inspiration to other students.
          </Typography>
          <Typography
            variant={matches2 ? "body1" : "h6"}
            color="primary.contrastText"
            textAlign={"justify"}
          >
            India is increasingly aware that for uniform progress, we have to
            look for solutions to problems in the villages and other sub-urban
            societies. These solutions are unlikely to come from outside India
            as the problems themselves are very India specific. CFI intends to
            encourage students to look at socially relevant projects.
            Additionally, the CFI will also encourage projects that look at
            environment friendly solutions.
          </Typography>
        </Grid>
        <Grid
          container
          item
          alignItems="center"
          justifyContent="center"
          lg={6}
          md={6}
          sm={10}
          xs={12}
        >
          <Grid container item sx={{ width: "90%" }} justifyContent="center">
            <img
              src={Idea4}
              alt="Idea"
              style={{
                boxShadow: "6px 6px 6px 6px #7e0000",
                borderRadius: "40px",
                width: matches ? "100%" : "99%",
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Concepts;
