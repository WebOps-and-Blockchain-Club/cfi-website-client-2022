import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import headlineImage from "../Images/Home/headline1.png";

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
          color="primary"
          sx={{ textAlign: "center" }}
        >
          {heading}
        </Typography>
        <Typography
          gutterBottom
          variant="subtitle1"
          component="div"
          color="primary"
          sx={{ textAlign: "center" }}
          mt={3}
        >
          Learn more
        </Typography>
      </CardContent>
    </Card>
  );
}
