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
import ContactSection from "../ContactUs/ContactSection";
import WebsiteBtn from "../Shared/WebsiteBtn";

const CompetitionTeam = () => {
  const { teamname } = useParams<{ teamname: TeamsName }>();
  console.log(teamname);
  const data: ITeam = Teams[teamname!];

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));

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
          {!matchesLG && (
            <CompetitionTeamLogoCard name={data.name} logo={data.logo} />
          )}
        </Grid>
        {matchesLG && (
          <CompetitionTeamLogoCard
            name={data.name}
            logo={data.logoM ? data.logoM : data.logo}
          />
        )}

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
            <Typography
              color="primary.contrastText"
              sx={{
                textAlign: "center",
                fontSize: "18px",
              }}
              dangerouslySetInnerHTML={{ __html: data.description }}
            />
          </Grid>
        </Grid>

        {/* ACHIVEMENTS */}
        {data.achievements && (
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
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "stretch",
              }}
            >
              {data.achievements.map((_achievement) => (
                <MediaCard data={_achievement} />
              ))}
            </Grid>
          </Grid>
        )}

        {/* HIGHLIGHTS */}
        {data.projects && (
          <Grid
            item
            container
            direction={"column"}
            py={{ xs: 8, sm: 10, md: 12, lg: 12 }}
            px={{ xs: 2, sm: 4, md: 6, lg: 10 }}
            alignItems={"center"}
          >
            <Heading white="HIGH" red="LIGHTS" />
            <Grid
              container
              mt={{ xs: 4, sm: 5, md: 6, lg: 7 }}
              rowGap={{ xs: 3, sm: 4, md: 5, lg: 6 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "stretch",
              }}
            >
              {data.projects.map((_project) => (
                <MediaCard data={_project} />
              ))}
            </Grid>
          </Grid>
        )}

        {/* WEBSITE LINK */}
        {data.website && (
          <Grid
            item
            container
            direction="column"
            alignItems="center"
            py={{ xs: 8, sm: 10, md: 12, lg: 12 }}
            px={{ xs: 2, sm: 4, md: 6, lg: 10 }}
          >
            <WebsiteBtn title={`VISIT TEAM WEBSITE`} link={data.website} />
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
              <Heading white="SNAP" red="SHOTS" />
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
          <ContactSection
            title="TEAM"
            email={data.email}
            members={data.contacts}
          />
        </Grid>
      </Grid>
    </CustomBox>
  );
};

export default CompetitionTeam;

const CompetitionTeamLogoCard = ({
  name,
  logo,
}: {
  name: string;
  logo: string;
}) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Grid
      style={{
        bottom: "0",
        left: "auto",
        right: "auto",
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "end",
        paddingBottom: matches ? "20px" : "60px",
      }}
      textAlign="center"
    >
      <CardMedia
        component="img"
        image={logo}
        alt={name}
        sx={{
          verticalAlign: "middle",
          objectFit: "contain",
          height: matchesLG ? "150px" : "250px",
          maxWidth: matchesLG ? "300px" : "500px",
        }}
      />
    </Grid>
  );
};
