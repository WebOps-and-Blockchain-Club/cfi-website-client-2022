import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  // Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { AboutCFI } from "../../Assets/Data/Home";

import IntroVideo from "../../Assets/Video/Intro.mp4";

export default function IntroCard() {
  const theme = useTheme();
  const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Card
      sx={{
        borderRadius: "40px",
        backgroundColor: "primary.light",
        display: "flex",
        flexDirection: matchesLG ? "column" : "row",
        alignItems: "center",
        justifyContent: "center",
        p: matchesSM ? "15px" : "30px",
        boxShadow:
          "5px 5px 5px #000000, -3px -3px 5px rgba(255, 255, 255, 0.1);",
      }}
    >
      <CardMedia
        component="video"
        image={IntroVideo}
        controls
        sx={{
          borderRadius: "20px",
          verticalAlign: "middle",
          objectFit: "contain",
          width: matchesLG ? "80vw" : "400px",
          backgroundColor:
            "linear-gradient(138.5deg, #000000 42%, rgba(255, 0, 0, 0) 109.29%)",
        }}
      />
      <CardContent
        sx={{
          p: "unset",
          pl: matchesLG ? "unset" : "30px",
          pt: matchesLG ? "30px" : "unset",
        }}
      >
        <Typography
          gutterBottom
          component="div"
          color="primary.contrastText"
          fontSize={{
            xs: "14px",
            sm: "18px",
          }}
          textAlign={"center"}
        >
          {AboutCFI}
        </Typography>
      </CardContent>
    </Card>
  );
}
