import React from "react";
import { Grid, Typography } from "@mui/material";

import Heading from "../../Widgets/Heading";
import MediaCard from "../../Widgets/Card";
import { CompititionTeamData } from "../../Assets/Data/HomeData";

export default function CompationTeams() {
  return (
    <Grid
      item
      container
      direction="column"
      alignItems="center"
      p={3}
      m={1}
      mt={5}
    >
      <Heading white="compitition " red="teams" />
      <Typography
        variant="h5"
        color="primary"
        sx={{ textAlign: "center", width: "63%", fontWeight: "bold" }}
        mt={4}
      >
        CFI’s Competition teams are groups of highly motivated individuals who
        work round the clock to meet challenging deadlines of various
        competitions. Over the years, our teams have have bagged prizes both at
        the national and international level.
      </Typography>
      <Grid item container justifyContent="center" spacing={4} mt={3}>
        {CompititionTeamData.map((d) => {
          return (
            <Grid item>
              <MediaCard heading={d.title} desc={d.desc} img={d.img} />
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}
