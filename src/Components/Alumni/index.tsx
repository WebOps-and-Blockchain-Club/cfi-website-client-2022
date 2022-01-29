import React from "react";

import {
  Box,
  Card,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import CustomBox from "../Shared/CustomBox";
import Heading from "../Shared/Heading";
import { AlumniData } from "../../Assets/Data/Alumni";
import MediaCard from "../Community/MediaCard";
import StartUpCard from "./StartUpCard";

interface Props {}

const Alumni = (props: Props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const matches2 = useMediaQuery(theme.breakpoints.down("md"));
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
            textAlign={"center"}
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
          <Grid
            item
            container
            mt={{ xs: 4, sm: 5, md: 6, lg: 7 }}
            justifyContent={"center"}
            rowGap={{ xs: 2, sm: 4, md: 2.5, lg: 3 }}
            columnGap={{ xs: 2, sm: 4, md: 5, lg: 6 }}
          >
            {AlumniData.startUp.map((startUp, i) => {
              if ((i === 5 || i === 10) && window.innerWidth >= 1200)
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
                textAlign: "center",
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
            px={{ xs: 2, md: 10 }}
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
              <a
                href="https://joyofgiving.alumni.iitm.ac.in/projects"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Card
                  sx={{
                    padding: "10px 20px",
                    color: "primary.contrastText",
                    backgroundColor: "secondary.dark",
                    boxShadow: "3.99948px 3.99948px 22.3971px #0E0E0E",
                    fontSize: matches ? "21px" : "26px",
                    fontFamily: "Proxima Nova Bold",
                    ":hover": {
                      backgroundColor: "primary.contrastText",
                      color: "primary.main",
                    },
                  }}
                >
                  GIVE BACK TO CFI
                </Card>
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </CustomBox>
  );
};

export default Alumni;
