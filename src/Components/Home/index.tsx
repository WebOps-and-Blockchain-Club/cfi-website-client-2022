import React from "react";

import { Box, Grid, Typography } from "@mui/material";

import {
  AboutCFIOneLinear,
  CFIClubs,
  ClubList,
  CompetitionTeamList,
  CompetitionTeams,
  TopNewsData,
} from "../../Assets/Data/Home";

import CustomBox from "../Shared/CustomBox";

import Heading from "../Shared/Heading";
import TopCarousel from "./Carousel";
import TopNewCard from "./TopNewCard";
import IntroCard from "./IntroCard";
import ClubCard from "./ClubCard";
import CompetitionTeamCard from "./CompetitionTeamCard";

interface Props {}

const Home = (props: Props) => {
  return (
    <CustomBox>
      <Grid container>
        {/* LANDING SECTION */}
        <Grid
          item
          style={{
            minHeight: "100vh",
            scrollSnapAlign: "start",
          }}
        >
          <TopCarousel />
        </Grid>

        {/* TOP NEWS SECTION */}
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          width="100vw"
          sx={{ minHeight: "100vh", width: "99vw" }}
          px={"135px"}
          py={"75px"}
        >
          <Grid item>
            <Heading white="HEAD" red="LINES" />
          </Grid>
          <Grid item container justifyContent="space-between" mt={"75px"}>
            {TopNewsData.map((n) => (
              <TopNewCard heading={n.title} desc={n.desc} img={n.img} />
            ))}
          </Grid>
        </Grid>

        {/* INTRO TO CFI */}
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          sx={{ minHeight: "100vh" }}
          px={"135px"}
          py={"75px"}
        >
          <Grid item>
            <Heading white="ABOUT " red="CFI" />
          </Grid>
          <Grid item mt={"50px"}>
            <Typography
              color="primary.contrastText"
              sx={{ textAlign: "center", fontSize: "26px" }}
            >
              {AboutCFIOneLinear}
            </Typography>
          </Grid>
          <Grid item mt={"75px"}>
            <IntroCard />
          </Grid>
        </Grid>

        {/* CFI CLUBS */}
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          sx={{ minHeight: "100vh" }}
          px={"135px"}
          py={"75px"}
        >
          <Grid item>
            <Heading white="CFI  " red="CLUBS" />
          </Grid>
          <Grid item mt={"50px"}>
            <Typography
              color="primary.contrastText"
              sx={{ textAlign: "center", fontSize: "26px" }}
            >
              {CFIClubs[0]}
              <br />
              <br />
              {CFIClubs[1]}
            </Typography>
          </Grid>
          <Grid
            item
            container
            mt={"75px"}
            justifyContent={"center"}
            rowGap={"20px"}
            columnGap={"40px"}
          >
            {ClubList.map((club, i) => {
              if (i === 6 || i === 10)
                return (
                  <>
                    <Box width="100%" />
                    <ClubCard logo={club.logo} name={club.name} />
                  </>
                );
              return <ClubCard logo={club.logo} name={club.name} />;
            })}
          </Grid>
        </Grid>

        {/* COMPETITION TEAMS */}
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          sx={{ minHeight: "100vh" }}
          px={"135px"}
          py={"75px"}
        >
          <Grid item>
            <Heading white="COMPETITION  " red="TEAMS" />
          </Grid>
          <Grid item mt={"50px"}>
            <Typography
              color="primary.contrastText"
              sx={{ textAlign: "center", fontSize: "26px" }}
            >
              {CompetitionTeams}
            </Typography>
          </Grid>
          <Grid item container mt={"75px"} justifyContent={"space-between"}>
            {CompetitionTeamList.map((team) => (
              <CompetitionTeamCard name={team.name} logo={team.logo} />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </CustomBox>
  );
};

export default Home;
