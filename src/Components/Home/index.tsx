/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

import {
  AboutCFIOneLinear,
  CFIClubs,
  CFIStats,
  ClubList,
  CompetitionTeamList,
  CompetitionTeams,
  HighlightsData,
  HomeGalleryData,
} from "../../Assets/Data/Home";

import CustomBox, { CustomGridSection } from "../Shared/CustomBox";
import CustomSwiper from "../Shared/Swiper";
import Heading from "../Shared/Heading";
import Gallery from "../Shared/Gallery";

import TopCarousel from "./Carousel";
import IntroCard from "./IntroCard";
import ClubCard from "./ClubCard";
import CompetitionTeamCard from "./CompetitionTeamCard";
import StatsCard from "./StatsCard";

import "../../Styles/home.css";
import useWindowSize from "../../Utils/windowSize";

interface Props {}

const Home = (props: Props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const [width] = useWindowSize();

  return (
    <CustomBox>
      <Grid container sx={{ width: "100%" }}>
        {/* LANDING SECTION */}
        <Grid item sx={{ width: "100%" }}>
          <TopCarousel />
          <div className="arrow bounce">
            <a className="fa fa-arrow-down fa-2x" href="#top-news" />
          </div>
        </Grid>

        {/* TOP NEWS SECTION */}
        <section id="top-news" style={{ width: "100%" }}>
          <CustomGridSection>
            <Grid item>
              <Heading white="IN THE " red="SPOTLIGHT" />
            </Grid>
            <Grid
              item
              container
              justifyContent={"center"}
              mt={{ xs: 4, sm: 5, md: 6, lg: 7 }}
              alignItems="center"
            >
              <CustomSwiper data={HighlightsData().slice(0, 9)} />
            </Grid>
          </CustomGridSection>
        </section>

        {/* INTRO TO CFI */}
        <CustomGridSection>
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
          <Grid
            item
            container
            mt={{ xs: 4, sm: 5, md: 6, lg: 7 }}
            maxWidth={"100%"}
          >
            <IntroCard />
          </Grid>
          <Grid
            item
            container
            mt={{ xs: 4, sm: 5, md: 6, lg: 7 }}
            justifyContent={"center"}
            rowGap={{ xs: 3, sm: 4, md: 5, lg: 6 }}
            columnGap={{ xs: 3, sm: 4, md: 5, lg: 6 }}
            style={{ maxWidth: "1200px" }}
          >
            {CFIStats.map((_stat) => (
              <StatsCard
                title={_stat.title}
                number={_stat.number}
                icon={_stat.icon}
              />
            ))}
          </Grid>
        </CustomGridSection>

        {/* CFI CLUBS */}
        <CustomGridSection>
          <Grid item>
            <Heading white="CFI  " red="CLUBS" />
          </Grid>
          <Grid item mt={{ xs: 4, sm: 5, md: 6, lg: 7 }}>
            <Typography
              color="primary.contrastText"
              sx={{
                textAlign: "justify",
                textAlignLast: "center",
                fontSize: matches ? "18px" : "26px",
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
            rowGap={{
              xs: 3,
              sm: 4,
              md: 5,
              lg: width >= 1500 ? 3 : 6,
            }}
            columnGap={{ xs: 3, sm: 4, md: 5, lg: 6 }}
          >
            {ClubList.map((club, i) => {
              if ((i === 6 || i === 10) && width >= 1500)
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
        </CustomGridSection>

        {/* COMPETITION TEAMS */}
        <CustomGridSection>
          <Grid item>
            <Heading white="COMPETITION  " red="TEAMS" />
          </Grid>
          <Grid item mt={{ xs: 4, sm: 5, md: 6, lg: 7 }}>
            <Typography
              color="primary.contrastText"
              sx={{
                textAlign: "justify",
                textAlignLast: "center",
                fontSize: matches ? "18px" : "26px",
              }}
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
            gap={{ xs: 3, sm: 4, md: 5, lg: 6 }}
          >
            {CompetitionTeamList.map((team) => (
              <CompetitionTeamCard
                name={team.name}
                logo={team.logo}
                link={team.link}
              />
            ))}
          </Grid>
        </CustomGridSection>

        {/* CFI SHANPSHOTS */}
        <CustomGridSection>
          <Grid item>
            <Heading white="CFI " red="SNAPSHOTS" />
          </Grid>
          <Grid item mt={{ xs: 4, sm: 5, md: 6, lg: 7 }}>
            <Gallery data={HomeGalleryData} />
          </Grid>
        </CustomGridSection>
      </Grid>
    </CustomBox>
  );
};

export default Home;
