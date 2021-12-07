import * as React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

type MediaCardProps = {
  heading?: string;
  desc?: string;
  img: string;
};

export default function MediaCard({ heading, desc, img }: MediaCardProps) {
  return (
    <Card
      sx={{
        maxWidth: 350,
        borderRadius: "3em",
        padding: "1em",
        margin: "0.5em",
        backgroundColor: "inherit",
        border: `2px solid #270202`,
      }}
    >
      <CardMedia
        component="img"
        height="70%"
        width="100%"
        image={img}
        alt="newsimg"
        sx={{ borderRadius: "2em", verticalAlign: "middle" }}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="subtitle1"
          component="div"
          color="primary.contrastText"
          sx={{ textAlign: "center" }}
        >
          {heading}
        </Typography>
        <Typography
          gutterBottom
          variant="subtitle1"
          component="div"
          color="primary.contrastText"
          sx={{ textAlign: "center" }}
          mt={3}
        >
          Learn more
        </Typography>
      </CardContent>
    </Card>
  );
}
