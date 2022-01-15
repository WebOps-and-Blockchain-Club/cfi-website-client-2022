import * as React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

type MediaCardProps = {
  heading?: string;
  desc?: string;
  img: string;
};

export default function TopNewCard({ heading, desc, img }: MediaCardProps) {
  return (
    <Card
      sx={{
        width: "350px",
        borderRadius: "40px",
        backgroundColor: "primary.light",
        boxShadow:
          "5px 5px 5px #000000, -3px -3px 5px rgba(255, 255, 255, 0.1);",
      }}
    >
      <CardMedia
        component="img"
        height="300px"
        image={img}
        alt="newsimg"
        sx={{
          borderRadius: "40px 40px 0 0",
          verticalAlign: "middle",
          objectFit: "cover",
        }}
      />
      <CardContent
        sx={{
          px: "10px",
          py: "20px",
          height: "100px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <Typography
          component="div"
          color="primary.contrastText"
          sx={{
            textAlign: "center",
            fontSize: "18px",
            fontWeight: "bolder",
            letterSpacing: "1px",
          }}
        >
          {heading}
        </Typography>
        {/* <Typography
          gutterBottom
          variant="subtitle1"
          component="div"
          color="primary.contrastText"
          sx={{ textAlign: "center", fontSize: "14px" }}
          // mt={3}
        >
          {desc}
        </Typography> */}
      </CardContent>
    </Card>
  );
}
