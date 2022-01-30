import React from "react";

import { Grid, Typography, Box, useTheme, useMediaQuery } from "@mui/material";

import CustomBox from "../Shared/CustomBox";
import Heading from "../Shared/Heading";
import { AchievementsData } from "../../Assets/Data/Achievements";

import "../../Styles/achievements.css";

interface Props {}

const Achievements = (props: Props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

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
        <Heading white="ACHIEVE" red="MENTS" />

        <Box className="achievements-wrapper">
          <Box className="center-line">
            <Box style={{ marginLeft: "-22.5px" }} className="square"></Box>
          </Box>

          {AchievementsData.map((achievement, i) => {
            return i % 2 === 0 ? (
              <section
                id={achievement.id}
                style={{
                  paddingTop: i === 0 ? "180px" : "55px",
                  paddingBottom: "55px",
                }}
                className="row row-1"
              >
                <div className="content">
                  <section>
                    <div className="details">
                      <span style={{ color: "#D6D6D6" }} className="title">
                        {achievement.title}
                      </span>
                    </div>
                    <Typography
                      color="primary.contrastText"
                      fontSize={matches ? "16px" : "18px"}
                      textAlign={"justify"}
                      dangerouslySetInnerHTML={{
                        __html: achievement.description,
                      }}
                    />
                  </section>
                  <div className="square"></div>
                  <div className="branch"></div>
                </div>

                <div className="image">
                  <img src={achievement.image} alt={achievement.title} />
                </div>
              </section>
            ) : (
              <section
                id={achievement.id}
                style={{ paddingTop: "55px", paddingBottom: "55px" }}
                className="row row-2"
              >
                <div className="image">
                  <img src={achievement.image} alt={achievement.title} />
                </div>
                <div
                  className="content"
                  style={{ flexDirection: "row-reverse" }}
                >
                  <section>
                    <div className="details">
                      <span style={{ color: "#D6D6D6" }} className="title">
                        {achievement.title}
                      </span>
                    </div>
                    <Typography
                      color="primary.contrastText"
                      fontSize={matches ? "16px" : "18px"}
                      textAlign={"justify"}
                      dangerouslySetInnerHTML={{
                        __html: achievement.description,
                      }}
                    />
                  </section>
                  <div className="square"></div>
                  <div className="branch"></div>
                </div>
              </section>
            );
          })}
        </Box>
      </Grid>
    </CustomBox>
  );
};

export default Achievements;
