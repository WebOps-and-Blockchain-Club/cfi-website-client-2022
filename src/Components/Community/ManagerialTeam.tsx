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
  return (
    <CustomBox>
      <CustomGridPage>
        <Heading white="Managerial " red=" Team" />
        {ManagerialTeams.map((_team, i) => (
          <Grid
            container
            direction="column"
            justifyContent="center"
            py={{ xs: 8, sm: 10, md: 12, lg: 12 }}
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
            <Grid
              item
              container
              direction={i % 2 === 0 ? "row" : "row-reverse"}
              alignItems="center"
              justifyContent="space-between"
              pt={{ xs: 8, sm: 10, md: 12, lg: 12 }}
              gap={{ xs: 2, sm: 3, md: 4 }}
            >
              <Typography
                color="primary.contrastText"
                sx={{
                  fontSize: "18px",
                  textAlign: "justify",
                  width: matchesSM ? "100%" : "50%",
                }}
              >
                {_team.description}
              </Typography>
              <Grid
                container
                item
                alignItems="center"
                width={matchesSM ? "100%" : "40%"}
                justifyContent="center"
              >
                <img
                  src={_team.image}
                  alt="Idea"
                  style={{
                    boxShadow: "6px 6px 6px 6px #7e0000",
                    borderRadius: "20px",
                    width: "100%",
                  }}
                />
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              alignItems="center"
              pt={{ xs: 8, sm: 10, md: 12, lg: 12 }}
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
