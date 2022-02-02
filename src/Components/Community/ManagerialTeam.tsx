import React from "react";

import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

import CustomBox, { CustomGridPage } from "../Shared/CustomBox";
import Heading from "../Shared/Heading";
import { ManagerialTeams } from "../../Assets/Data/Community/ManagerialTeam";
import ContactSection from "../ContactUs/ContactSection";

interface Props {}

const ManagerialTeam = (props: Props) => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <CustomBox>
      <CustomGridPage>
        <Heading white="Managerial " red=" Team" />
        {ManagerialTeams.map((_team) => (
          <Grid
            container
            direction="column"
            justifyContent="center"
            mt={3}
            mb={3}
            py={{ xs: 0, sm: 2, md: 4, lg: 8 }}
            alignItems="center"
          >
            <Grid item py={{ sm: 1, md: 3, lg: 4 }}>
              <Typography
                variant={matchesSM ? "h5" : "h4"}
                color="primary.contrastText"
                style={{ fontFamily: "Proxima Nova Bold" }}
                textAlign={"center"}
              >
                {_team.name.split("##").join("")}
              </Typography>
            </Grid>
            <Grid item py={3} sx={{ textAlign: "center" }}>
              <Typography
                variant={matchesMD ? (matchesSM ? "subtitle1" : "h6") : "h5"}
                color="primary.contrastText"
                sx={{ textAlign: "justify" }} //, textAlignLast: "center" }}
              >
                {_team.description}
              </Typography>
            </Grid>
            <Grid
              item
              container
              direction="column"
              alignItems="center"
              py={{ xs: 8, sm: 10, md: 12, lg: 12 }}
            >
              <Grid item>
                <Typography
                  variant={matchesSM ? "h5" : "h4"}
                  color="primary.contrastText"
                  style={{ fontFamily: "Proxima Nova Bold" }}
                  textAlign={"center"}
                >
                  CONTACT US
                </Typography>
              </Grid>
              <ContactSection
                title="TEAM"
                email={_team.email}
                members={_team.contacts}
              />
            </Grid>
          </Grid>
        ))}
      </CustomGridPage>
    </CustomBox>
  );
};

export default ManagerialTeam;
