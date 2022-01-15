import * as React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { AboutCFI } from "../../Assets/Data/Home";

export default function IntroCard() {
  return (
    <Card
      sx={{
        borderRadius: "40px",
        backgroundColor: "primary.light",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: "30px",
        boxShadow:
          "5px 5px 5px #000000, -3px -3px 5px rgba(255, 255, 255, 0.1);",
      }}
    >
      <CardMedia
        component="video"
        image={"Intro.mp4"}
        autoPlay
        sx={{
          borderRadius: "40px",
          verticalAlign: "middle",
          objectFit: "contain",
          width: "400px",
        }}
      />
      <CardContent
        sx={{
          p: "unset",
          pl: "30px",
        }}
      >
        <Typography
          gutterBottom
          component="div"
          color="primary.contrastText"
          sx={{
            fontSize: "18px",
          }}
        >
          {AboutCFI}
        </Typography>
      </CardContent>
    </Card>
  );
}
