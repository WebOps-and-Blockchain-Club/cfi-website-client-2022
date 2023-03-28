import { Chip, Grid, useTheme } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import LikeButton from "../LikeButton";
import WhatsappBtn from "../../Shared/WhatsappBtn";

interface Probs {
  project: {
    id: string;
    title: string;
    clubs: {
      id: string;
      name: string;
    }[];
    contact: string;
    likeCount: number;
    isLiked: boolean;
    createdBy?: {
      name: string;
    };
    updatedAt: string;
  };
  handleClubClick: Function;
  handleEdit?: Function | null;
}

const ProjectCard = (probs: Probs) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Card
      sx={{
        width: matches ? "68vw" : "350px",
        borderRadius: "20px",
        backgroundColor: "primary.light",
        boxShadow:
          "5px 5px 5px #000000, -3px -3px 5px rgba(255, 255, 255, 0.1);",
      }}
    >
      <CardContent
        sx={{
          px: "20px",
          py: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
        style={{
          paddingBottom: "20px",
        }}
      >
        <Link
          to={`/sip/projects/${probs.project.id}`}
          style={{ textDecoration: "none" }}
        >
          <Typography
            component="div"
            color="primary.contrastText"
            sx={{
              textAlign: "justify",
              fontSize: matches ? "16px" : "18px",
              fontWeight: "bold",
              letterSpacing: "1px",
            }}
          >
            {probs.project.title}
          </Typography>
        </Link>
        <Typography
          component="div"
          color="primary.contrastText"
          sx={{
            textAlign: "justify",
            fontSize: matches ? "12px" : "14px",
            letterSpacing: "1px",
          }}
        >
          Last updated at{" "}
          {moment(probs.project.updatedAt).format("MMMM Do YYYY, h:mm a")}
        </Typography>
        <Grid item pt={1}>
          <LikeButton
            projectId={probs.project.id}
            likeCount={probs.project.likeCount}
            isLiked={probs.project.isLiked}
          />
          <WhatsappBtn phone={probs.project.contact} matches={matches}></WhatsappBtn>
        </Grid>
        {probs.project.clubs && (
          <Grid container gap={2} pt={1}>
            {probs.project.clubs.map((_club) => (
              <Chip
                label={_club.name}
                sx={{
                  backgroundColor: "primary.contrastText",
                  ":hover": {
                    backgroundColor: "primary.contrastText",
                  },
                }}
                size="small"
                onClick={() => probs.handleClubClick(_club.name)}
              />
            ))}
          </Grid>
        )}
        {probs.handleEdit && (
          <Grid container gap={2} pt={1}>
            <Chip
              label={"Edit"}
              sx={{
                backgroundColor: "secondary.main",
                ":hover": {
                  backgroundColor: "secondary.main",
                },
              }}
              onClick={() => probs.handleEdit!(probs.project.id)}
            />
          </Grid>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
