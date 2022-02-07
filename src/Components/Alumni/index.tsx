import React from "react";

import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

import CustomBox, { CustomGridPage } from "../Shared/CustomBox";
import Heading from "../Shared/Heading";
import { AlumniData } from "../../Assets/Data/Alumni";
import MediaCard from "../Community/MediaCard";
import StartUpCard from "./StartUpCard";
import WebsiteBtn from "../Shared/WebsiteBtn";
import useWindowSize from "../../Utils/windowSize";

interface Props {}

const Alumni = (props: Props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const matches2 = useMediaQuery(theme.breakpoints.down("md"));
  const [width] = useWindowSize();

  return (
    <CustomBox>
      <CustomGridPage>
        {/* INTRO */}
        <Heading white="" red="ALUMNI" />
        <Grid
          container
          direction="column"
          justifyContent="center"
          py={{ xs: 8, sm: 10, md: 12, lg: 12 }}
          alignItems="center"
        >
          <Typography
            variant={matches2 ? (matches ? "subtitle1" : "h6") : "h5"}
            color="primary.contrastText"
            sx={{
              textAlign: "justify",
              textAlignLast: "center",
            }}
          >
            {AlumniData.description}
          </Typography>
        </Grid>

        {/* STARTUPS */}
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          py={{ xs: 8, sm: 10, md: 12, lg: 12 }}
        >
          <Grid item>
            <Heading white="ALUMNI  " red="STARTUPS" />
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
              {AlumniData.startUpDescription}
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
            {AlumniData.startUp.map((startUp, i) => {
              if ((i === 5 || i === 10) && width >= 1300)
                return (
                  <>
                    <Box width="100%" />
                    <StartUpCard
                      logo={startUp.logo}
                      name={startUp.name}
                      link={startUp.link}
                    />
                  </>
                );
              return (
                <StartUpCard
                  logo={startUp.logo}
                  name={startUp.name}
                  link={startUp.link}
                />
              );
            })}
          </Grid>
        </Grid>

        {/* CONNECT TO CFI */}
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          py={{ xs: 8, sm: 10, md: 12, lg: 12 }}
        >
          <Grid item>
            <Heading white="CONNECT TO " red="CFI" />
          </Grid>
          <Grid item mt={{ xs: 4, sm: 5, md: 6, lg: 7 }}>
            <Typography
              color="primary.contrastText"
              sx={{
                textAlign: "justify",
                textAlignLast: "center",
                fontSize: matches ? "18px" : "26px",
                whiteSpace: "pre-line",
              }}
            >
              {AlumniData.connectToCFI.description}
            </Typography>
          </Grid>
          <Grid
            item
            container
            mt={{ xs: 4, sm: 5, md: 6, lg: 7 }}
            justifyContent={"center"}
            rowGap={{ xs: 2, sm: 4, md: 5, lg: 6 }}
            columnGap={{ xs: 2, sm: 4, md: 5, lg: 6 }}
          >
            {AlumniData.connectToCFI.content.map((_content, i) => (
              <MediaCard data={_content} />
            ))}
          </Grid>
        </Grid>

        {/* CONTRIBUTE TO CFI */}
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          py={{ xs: 8, sm: 10, md: 12, lg: 12 }}
        >
          <Grid item>
            <Heading white="CONTRIBUTE TO " red="CFI" />
          </Grid>
          <Grid
            item
            container
            direction={"column"}
            mt={{ xs: 4, sm: 5, md: 6, lg: 7 }}
          >
            <Typography
              textAlign={"start"}
              fontSize={matches ? "18px" : "20px"}
              color={"primary.contrastText"}
            >
              {AlumniData.contributeToCFI.intro}
            </Typography>

            {AlumniData.contributeToCFI.description.map((_content, i) => (
              <Typography
                textAlign={"start"}
                fontSize={matches ? "18px" : "20px"}
                color={"primary.contrastText"}
                dangerouslySetInnerHTML={{ __html: i + 1 + ". " + _content }}
              />
            ))}

            <Grid margin={"auto"} mt={{ xs: 4, sm: 5, md: 6, lg: 7 }}>
              <WebsiteBtn
                title="GIVE BACK TO CFI"
                link={"https://joyofgiving.alumni.iitm.ac.in/projects"}
              />
            </Grid>
          </Grid>
        </Grid>
      </CustomGridPage>
    </CustomBox>
  );
};

export default Alumni;
