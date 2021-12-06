import React from "react";
import { Grid, Typography } from "@mui/material";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import Heading from "../../Widgets/Heading";
import MediaCard from "../../Widgets/Card";
import { CompititionTeamData } from "../../Assets/Data/HomeData";

export default function CompationTeams() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid item container direction="column" alignItems="center" m={1} mt={5}>
      <Heading white="compitition " red="teams" />
      <Typography
        variant={matches ? "h6" : "h5"}
        color="primary.contrastText"
        sx={{
          textAlign: "center",
          width: `${matches ? "100%" : "68%"}`,
          fontFamily: "Proxima Nova Bold",
        }}
        mt={4}
      >
        CFI’s Competition teams are groups of highly motivated individuals who
        work round the clock to meet challenging deadlines of various
        competitions. Over the years, our teams have have bagged prizes both at
        the national and international level.
      </Typography>
      <Grid item container justifyContent="space-evenly" mt={3}>
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
