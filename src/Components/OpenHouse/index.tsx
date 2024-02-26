import React from "react";
import {
  CardMedia,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import FmdGoodRoundedIcon from "@mui/icons-material/FmdGoodRounded";
import ScheduleIcon from "@mui/icons-material/Schedule";

import CustomBox, { CustomGridPage } from "../Shared/CustomBox";
import Heading from "../Shared/Heading";
import Gallery from "../Shared/Gallery";
import Logo from "../../Assets/Images/OpenHouse/OpenHouse2023_white.png";
import Gather from "../../Assets/Images/OpenHouse/GatherLogo.svg";
import OSLogo from "../../Assets/Images/OpenHouse/OSLogo.jpg";
import { OpenHouseData, OpenHouseGallery } from "../../Assets/Data/OpenHouse";
import SponsorLogog from './../../Assets/Images/OpenHouse/image1.png'

interface Props { }

const OpenHouse = (props: Props) => {
  const theme = useTheme();
  const matches2 = useMediaQuery(theme.breakpoints.down("md"));
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <CustomBox>
      <CustomGridPage>
        <Heading white="Open " red="House" />

        {/* OPEN HOUSE 2022 */}
        <Grid
          item
          container
          direction={matches ? "column" : "row"}
          justifyContent="center"
          alignItems="center"
          py={{ xs: 8, sm: 10, md: 12, lg: 12 }}
          gap={10}
        >
          <Grid item>
            <CardMedia
              component="img"
              image={Logo}
              alt={"data.name"}
              sx={{
                verticalAlign: "middle",
                objectFit: "contain",
                height: matchesLG ? "100%" : "300px",
                maxWidth: matches ? "80vw" : "40vw",
              }}
            />
          </Grid>
          <Grid item className="nopadding" container maxWidth={matches ? "80vw" : "40vw"} gap={0}>
            <Grid
              container
              item
              direction="row"
              alignItems="center"
              justifyContent={matches ? "center" : "start"}
              gap={2}
            >
              <Grid item>
                <FmdGoodRoundedIcon
                  style={{
                    color: "#d6d6d6",
                    fontSize: "50px",
                  }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant={matchesLG ? "h5" : "h4"}
                  style={{
                    color: "#d6d6d6",
                    fontFamily: "Proxima Nova Bold",
                  }}
                  textAlign={matches ? "center" : "start"}
                >
                  Venue: Terrace Hall
                  {/* <br />
                  Online - Gather Town */}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              alignItems="center"
              gap={2}
              justifyContent={matches ? "center" : "start"}
              width="fit-content"
            >
              <Grid item>
                <ScheduleIcon
                  style={{
                    color: "#d6d6d6",
                    fontSize: "50px",
                  }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant={matchesLG ? "h5" : "h4"}
                  style={{
                    color: "#d6d6d6",
                    fontFamily: "Proxima Nova Bold",
                  }}
                  textAlign={matches ? "center" : "start"}
                >
                  2nd March, 2024   - 11:00AM Onwards
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {OpenHouseData.map((data, i) => (
          <Grid
            item
            container
            direction={matches ? "column" : "row"}
            justifyContent="center"
            alignItems="center"
            py={{ xs: 8, sm: 10, md: 12, lg: 12 }}
            sx={{ p: 0 }}
            gap={10}
          >
            <Grid item paddingTop={0} alignItems="center" justifyContent="center">
              {data.image &&
                <CardMedia
                  component="img"
                  image={data.image}
                  alt={"image"}
                  sx={{
                    padding: 0,
                    verticalAlign: "middle",
                    objectFit: "contain",
                    alignItems: "center",
                    height: matchesLG ? "100%" : "300px",
                    maxWidth: matches ? "80vw" : "80vw",
                    boxShadow: "6px 6px 6px 6px #7e0000",
                    borderRadius: "20px",
                  }}
                />}
            </Grid>
            <Grid item container paddingTop={0} maxWidth={matches ? "80vw" : "40vw"}>
              <Typography
                variant={matches2 ? "body1" : "h6"}
                color="primary.contrastText"
                textAlign={"justify"}
                dangerouslySetInnerHTML={{
                  __html: data.content,
                }}
              >
              </Typography>
            </Grid>
          </Grid>
        ))}

        {/* SPONSORS */}
        <Grid
          item
          container
          direction={"column"}
          py={{ xs: 8, sm: 10, md: 12, lg: 12 }}
        >
          <Heading white="2024 " red="SPONSORS" />

          <Grid
            container
            mt={{ xs: 4, sm: 5, md: 6, lg: 7 }}
            rowGap={{ xs: 3, sm: 4, md: 5, lg: 6 }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <a
              href="https://www.stellantis.com/en"
              target="_blank"
              rel="noreferrer"
            >
              <CardMedia
                component="img"
                image={SponsorLogog}
                alt={"data.name"}
                sx={{
                  borderRadius: "20px",
                  verticalAlign: "middle",
                  objectFit: "contain",
                  // backgroundColor: "primary.light",
                  // boxShadow:
                  //   "5px 5px 5px #000000, -3px -3px 5px rgba(255, 255, 255, 0.1);",
                  // padding: "20px",
                  width: "300px",
                }}
              />
            </a>
          </Grid>
        </Grid>

        {/* GALLERY */}
        {/* <Grid
          item
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          py={{ xs: 8, sm: 10, md: 12, lg: 12 }}
        >
          <Grid item>
            <Heading white="" red="SNAPSHOTS" />
          </Grid>
          <Grid item mt={{ xs: 4, sm: 5, md: 6, lg: 7 }}>
            <Gallery data={OpenHouseGallery} />
          </Grid>
        </Grid> */}
        {/* </Grid> */}
      </CustomGridPage>
    </CustomBox >
  );
};

export default OpenHouse;
