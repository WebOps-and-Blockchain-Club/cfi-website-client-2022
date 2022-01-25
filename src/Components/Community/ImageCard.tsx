import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

type MediaCardProps = {
  heading: string;
  image: string;
};

export default function ImageCard({ heading, image }: MediaCardProps) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Card
      sx={{
        m: "0 10px",
        width: matches ? "68vw" : "350px",
        borderRadius: "20px",
        backgroundColor: "primary.light",
        boxShadow:
          "5px 5px 5px #000000, -3px -3px 5px rgba(255, 255, 255, 0.1);",
      }}
    >
      <CardMedia
        component="img"
        image={image}
        alt="newsimg"
        sx={{
          borderRadius: "20px 20px 0 0",
          verticalAlign: "middle",
          objectFit: "cover",
          height: matches ? "50vw" : "270px",
        }}
      />
      <CardContent
        sx={{
          px: "10px",
          py: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
        style={{
          paddingBottom: "20px",
        }}
      >
        <Typography
          component="div"
          color="primary.contrastText"
          sx={{
            textAlign: "center",
            fontSize: matches ? "16px" : "18px",
            fontWeight: "bold",
            letterSpacing: "1px",
          }}
        >
          {heading}
        </Typography>
      </CardContent>
    </Card>
  );
}
