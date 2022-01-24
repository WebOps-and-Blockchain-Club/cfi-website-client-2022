import React from "react";

import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

import CustomBox from "../Shared/CustomBox";
import Heading from "../Shared/Heading";
import { ManagerialTeams } from "../../Assets/Data/Community/ManagerialTeam";

interface Props {}

const ManagerialTeam = (props: Props) => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <CustomBox>
      <Grid
        container
        pl={{ xs: 2, sm: 4, md: 6, lg: 10 }}
        pr={{ xs: 2, sm: 4, md: 6, lg: 10 }}
        pt={{ xs: 10, sm: 12, md: 14, lg: 16 }}
        pb={{ xs: 2, sm: 6, md: 10, lg: 14 }}
        direction="column"
        justifyItems="center"
        alignItems="center"
      >
        <Heading white="Managerial " red=" Team" />
        {ManagerialTeams.map((_team) => (
          <Grid
            container
            direction="column"
            justifyContent="center"
            mt={3}
            mb={3}
            p={{ xs: 0, sm: 2, md: 4, lg: 8 }}
            alignItems="center"
          >
            <Grid item p={{ sm: 1, md: 3, lg: 4 }}>
              <Typography
                variant={matchesSM ? "h5" : "h4"}
                color="primary.contrastText"
                style={{ fontFamily: "Proxima Nova Bold" }}
                textAlign={"center"}
              >
                {_team.name}
              </Typography>
            </Grid>
            <Grid item p={3} sx={{ textAlign: "center" }}>
              <Typography
                variant={matchesMD ? (matchesSM ? "subtitle1" : "h6") : "h5"}
                color="primary.contrastText"
              >
                {_team.description}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </CustomBox>
  );
};

export default ManagerialTeam;
