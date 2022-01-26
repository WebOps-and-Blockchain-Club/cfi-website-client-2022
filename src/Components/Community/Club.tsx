import {
  CardMedia,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { Clubs } from "../../Assets/Data/Community/Clubs";
import { ClubsName, IClub } from "../../Types";
import CustomBox from "../Shared/CustomBox";
import Gallery from "../Shared/Gallery";
import Heading from "../Shared/Heading";
import ContactSection from "./ContactSection";
import MediaCard from "./MediaCard";

const Club = () => {
  const { clubname } = useParams<{ clubname: ClubsName }>();
  const data: IClub = Clubs[clubname!];

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
        {/* HEADING */}
        <Grid item container direction={"column"}>
          <Heading
            red={data.name.split("##")[1]}
            white={data.name.split("##")[0]}
          />
          {data.oneLiner && (
            <Typography
              color="primary.contrastText"
              mt={{ xs: 3, sm: 3, md: 4, lg: 4 }}
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: matches ? "21px" : "26px",
              }}
              dangerouslySetInnerHTML={{ __html: data.oneLiner }}
            />
          )}
        </Grid>

        {/* INTRO */}
        <Grid
          item
          container
          direction={{ xs: "column", lg: "row" }}
          py={{ xs: 8, sm: 10, md: 12, lg: 12 }}
          alignItems={"center"}
          rowGap={{ xs: 3, sm: 4, md: 5, lg: 6 }}
        >
          <Grid item width={{ xs: "100%", lg: "50%" }}>
            <CardMedia
              component="img"
              image={data.logo}
              alt={data.name}
              sx={{
                borderRadius: "40px 40px 0 0",
                verticalAlign: "middle",
                objectFit: "contain",
                height: "270px",
              }}
            />
          </Grid>
          <Grid item width={{ xs: "100%", lg: "50%" }}>
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

        {/* PROJECTS */}
        {data.projects && (
          <Grid
            item
            container
            direction={"column"}
            py={{ xs: 8, sm: 10, md: 12, lg: 12 }}
          >
            <Heading white="PRO" red="JECTS" />
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

        {/* GALLERY */}
        {data.gallery && (
          <Grid
            item
            container
            direction="column"
            alignItems="center"
            py={{ xs: 8, sm: 10, md: 12, lg: 12 }}
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
        >
          <Grid item>
            <Heading white="CONTACT" red=" US" />
          </Grid>
          <ContactSection
            title="CLUB"
            email={data.email}
            members={data.contacts}
          />
        </Grid>
      </Grid>
    </CustomBox>
  );
};

export default Club;
