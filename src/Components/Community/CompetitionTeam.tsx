import {
  CardMedia,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { Teams } from "../../Assets/Data/Community/CompetitionTeam";
import { ITeam, TeamsName } from "../../Types";
import CustomBox from "../Shared/CustomBox";
import Gallery from "../Shared/Gallery";
import Heading from "../Shared/Heading";
import MediaCard from "./MediaCard";
import ContactCard from "./ContactCard";

const CompetitionTeam = () => {
  const { teamname } = useParams<{ teamname: TeamsName }>();
  console.log(teamname);
  const data: ITeam = Teams[teamname!];

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <CustomBox>
      <Grid
        container
        pb={{ xs: 4, sm: 6, md: 10, lg: 14 }}
        direction="column"
        justifyItems="center"
        alignItems="center"
      >
        {/* LANDING */}
        <Grid
          style={{
            width: "99vw",
            height: matches ? "80vw" : "100vh",
            backgroundImage: `linear-gradient(180deg,#030303 0%,rgba(8, 7, 8, 0) 43.83%,#030303 90.13%), url(${data.landing})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <Grid
            style={{
              bottom: "0",
              left: "auto",
              right: "auto",
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
              paddingBottom: matches ? "40px" : "100px",
            }}
            textAlign="center"
          >
            <CardMedia
              component="img"
              height="200px"
              image={data.logo}
              alt={data.name}
              sx={{
                borderRadius: "40px 40px 0 0",
                verticalAlign: "middle",
                objectFit: "contain",
                p: "5px",
                width: "unset",
              }}
            />
            <Grid item>
              <Typography
                variant={matches ? "h5" : "h3"}
                color="primary.contrastText"
                sx={{
                  display: "inline",
                  textTransform: "uppercase",
                  fontFamily: "Proxima Nova Bold",
                  textAlign: "center",
                }}
              >
                {data.name.split("##")[0]}
              </Typography>
              <Typography
                variant={matches ? "h5" : "h3"}
                color="secondary"
                sx={{
                  display: "inline",
                  textTransform: "uppercase",
                  fontFamily: "Proxima Nova Bold",
                  textAlign: "center",
                }}
              >
                {data.name.split("##")[1]}
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        {/* INTRO */}
        <Grid
          item
          container
          direction={"column"}
          py={{ xs: 8, sm: 10, md: 12, lg: 12 }}
          px={{ xs: 2, sm: 4, md: 6, lg: 10 }}
        >
          <Heading
            red={data.name.split("##")[1]}
            white={data.name.split("##")[0]}
          />
          <Grid item mt={{ xs: 4, sm: 5, md: 6, lg: 7 }}>
            {data.description.map((desc) => (
              <Typography
                // variant={"h5"}
                color="primary.contrastText"
                sx={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                {desc}
              </Typography>
            ))}
          </Grid>
        </Grid>

        {/* ACHIVEMENTS */}
        {data.achivements && (
          <Grid
            item
            container
            direction={"column"}
            py={{ xs: 8, sm: 10, md: 12, lg: 12 }}
            px={{ xs: 2, sm: 4, md: 6, lg: 10 }}
            alignItems={"center"}
          >
            <Heading white="ACHIEVE" red="MENTS" />
            <Grid
              container
              mt={{ xs: 4, sm: 5, md: 6, lg: 7 }}
              rowGap={{ xs: 3, sm: 4, md: 5, lg: 6 }}
            >
              {data.achivements.map((_achivement) => (
                <MediaCard data={_achivement} />
              ))}
            </Grid>
          </Grid>
        )}

        {/* PROJECTS */}
        {data.projects && (
          <Grid
            item
            container
            direction={"column"}
            py={{ xs: 8, sm: 10, md: 12, lg: 12 }}
            px={{ xs: 2, sm: 4, md: 6, lg: 10 }}
            alignItems={"center"}
          >
            <Heading white="PRO" red="JECTS" />
            <Grid
              container
              mt={{ xs: 4, sm: 5, md: 6, lg: 7 }}
              rowGap={{ xs: 3, sm: 4, md: 5, lg: 6 }}
            >
              {data.projects.map((_project) => (
                <MediaCard data={_project} />
              ))}
            </Grid>
          </Grid>
        )}

        {/* GALLERY */}
        {data.gallery && (
          <Grid
            item
            container
            direction="column"
            alignItems="center"
            py={{ xs: 8, sm: 10, md: 12, lg: 12 }}
            px={{ xs: 2, sm: 4, md: 6, lg: 10 }}
          >
            <Grid item>
              <Heading
                white={data.name.split("##").join("")}
                red=" SNAPSHOTS"
              />
            </Grid>
            <Grid item mt={{ xs: 4, sm: 5, md: 6, lg: 7 }}>
              <Gallery data={data.gallery} />
            </Grid>
          </Grid>
        )}

        {/* CONTACT */}
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          py={{ xs: 8, sm: 10, md: 12, lg: 12 }}
          px={{ xs: 2, sm: 4, md: 6, lg: 10 }}
        >
          <Grid item>
            <Heading white="CONTACT" red=" US" />
          </Grid>
          <Grid item>
            <Typography
              color="primary.contrastText"
              sx={{
                textAlign: "center",
                fontSize: matches ? "16px" : "26px",
                pt: 5,
              }}
            >
              {data.name.split("##").join("")}
            </Typography>
          </Grid>
          <Grid item mt={{ xs: 4, sm: 5, md: 6, lg: 7 }}>
            <ContactCard members={data.contacts} email={data.email} />
          </Grid>
        </Grid>
      </Grid>
    </CustomBox>
  );
};

export default CompetitionTeam;
