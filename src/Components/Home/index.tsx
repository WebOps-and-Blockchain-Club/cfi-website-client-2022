import React from "react";

import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

import {
  AboutCFIOneLinear,
  CFIClubs,
  ClubList,
  CompetitionTeamList,
  CompetitionTeams,
  HomeGalleryData,
  TopNewsData,
} from "../../Assets/Data/Home";

import CustomBox from "../Shared/CustomBox";
import CustomSwiper from "../Shared/Swiper";
import Heading from "../Shared/Heading";
import Gallery from "../Shared/Gallery";

import TopCarousel from "./Carousel";
import IntroCard from "./IntroCard";
import ClubCard from "./ClubCard";
import CompetitionTeamCard from "./CompetitionTeamCard";

interface Props {}

const Home = (props: Props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <CustomBox>
      <Grid container>
        {/* LANDING SECTION */}
        <Grid item>
          <TopCarousel />
        </Grid>

        {/* TOP NEWS SECTION */}
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          width="100vw"
          sx={{ /*minHeight: "100vh", */ width: "99vw" }}
          px={{ xs: 4, sm: 8, md: 12, lg: 16 }}
          py={{ xs: 8, sm: 10, md: 12, lg: 12 }}
        >
          <Grid item>
            <Heading white="IN THE " red="SPOT LIGHT" />
          </Grid>
          <Grid
            item
            container
            justifyContent={"center"}
            mt={{ xs: 4, sm: 5, md: 6, lg: 7 }}
            alignItems="center"
          >
            <CustomSwiper data={TopNewsData} />
          </Grid>
        </Grid>

        {/* INTRO TO CFI */}
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          px={{ xs: 4, sm: 8, md: 12, lg: 16 }}
          py={{ xs: 8, sm: 10, md: 12, lg: 12 }}
        >
          <Grid item>
            <Heading white="ABOUT " red="CFI" />
          </Grid>
          <Grid item mt={{ xs: 4, sm: 5, md: 6, lg: 7 }}>
            <Typography
              color="primary.contrastText"
              sx={{ textAlign: "center", fontSize: matches ? "16px" : "26px" }}
            >
              {AboutCFIOneLinear}
            </Typography>
          </Grid>
          <Grid item mt={{ xs: 4, sm: 5, md: 6, lg: 7 }}>
            <IntroCard />
          </Grid>
        </Grid>

        {/* CFI CLUBS */}
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          px={{ xs: 4, sm: 8, md: 12, lg: 16 }}
          py={{ xs: 8, sm: 10, md: 12, lg: 12 }}
        >
          <Grid item>
            <Heading white="CFI  " red="CLUBS" />
          </Grid>
          <Grid item mt={{ xs: 4, sm: 5, md: 6, lg: 7 }}>
            <Typography
              color="primary.contrastText"
              sx={{
                textAlign: "center",
                fontSize: matches ? "16px" : "26px",
                whiteSpace: "pre-line",
              }}
            >
              {CFIClubs}
            </Typography>
          </Grid>
          <Grid
            item
            container
            mt={{ xs: 4, sm: 5, md: 6, lg: 7 }}
            justifyContent={"center"}
            rowGap={{ xs: 2, sm: 4, md: 5, lg: 3 }}
            columnGap={{ xs: 2, sm: 4, md: 5, lg: 6 }}
          >
            {ClubList.map((club, i) => {
              if ((i === 6 || i === 10) && window.innerWidth >= 1536)
                return (
                  <>
                    <Box width="100%" />
                    <ClubCard
                      logo={club.logo}
                      name={club.name}
                      link={club.link}
                    />
                  </>
                );
              return (
                <ClubCard logo={club.logo} name={club.name} link={club.link} />
              );
            })}
          </Grid>
        </Grid>

        {/* COMPETITION TEAMS */}
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          px={{ xs: 4, sm: 8, md: 12, lg: 16 }}
          py={{ xs: 8, sm: 10, md: 12, lg: 12 }}
        >
          <Grid item>
            <Heading white="COMPETITION  " red="TEAMS" />
          </Grid>
          <Grid item mt={{ xs: 4, sm: 5, md: 6, lg: 7 }}>
            <Typography
              color="primary.contrastText"
              sx={{ textAlign: "center", fontSize: matches ? "16px" : "26px" }}
            >
              {CompetitionTeams}
            </Typography>
          </Grid>
          <Grid
            item
            container
            justifyContent={"center"}
            mt={{ xs: 4, sm: 5, md: 6, lg: 7 }}
            alignItems="center"
            gap={{ xs: 4, sm: 8, md: 9, lg: 9 }}
          >
            {CompetitionTeamList.map((team) => (
              <CompetitionTeamCard
                name={team.name}
                logo={team.logo}
                link={team.link}
              />
            ))}
          </Grid>
        </Grid>

        {/* CFI SHANPSHOTS */}
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          px={{ xs: 4, sm: 8, md: 12, lg: 16 }}
          py={{ xs: 8, sm: 10, md: 12, lg: 12 }}
        >
          <Grid item>
            <Heading white="CFI " red="SNAPSHOTS" />
          </Grid>
          <Grid item mt={{ xs: 4, sm: 5, md: 6, lg: 7 }}>
            <Gallery data={HomeGalleryData} />
          </Grid>
        </Grid>
      </Grid>
    </CustomBox>
  );
};

export default Home;
