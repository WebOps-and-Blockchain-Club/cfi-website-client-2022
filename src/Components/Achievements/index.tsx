import React from "react";

import { Grid, Typography } from "@mui/material";

import CustomBox from "../Shared/CustomBox";
import Heading from "../Shared/Heading";
import { AchievementsData } from "../../Assets/Data/Achievements";

interface Props {}

const Achievements = (props: Props) => {
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
        {AchievementsData.map((_achievement) => (
          <section id={_achievement.id}>
            <Grid minHeight={"100vh"}>
              <Typography
                color={"white"}
                dangerouslySetInnerHTML={{ __html: _achievement.description }}
              />
            </Grid>
          </section>
        ))}
      </Grid>
    </CustomBox>
  );
};

export default Achievements;
