import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import headlineImage from "../Images/Home/headline1.png";

export default function MediaCard() {
  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: "1em",
        padding: "1em",
        margin: "0.5em",
        backgroundColor: "inherit",
        border: `2px solid #270202`,
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={headlineImage}
        alt="Card image"
        sx={{ borderRadius: "1em" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="secondary">
          Lizard
        </Typography>
        <Typography variant="body2" color="primary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
  );
}
