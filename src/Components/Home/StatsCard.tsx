import {
  Card,
  CardContent,
  Typography,
  useTheme,
  useMediaQuery,
  CardMedia,
} from "@mui/material";
import React from "react";

interface Probs {
  title: string;
  number: string;
  icon: string;
}

export default function StatsCard(probs: Probs) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Card
      sx={{
        width: matches ? "130px" : "240px",
        height: matches ? "140px" : "190px",
        borderRadius: "20px",
        backgroundColor: "primary.light",
        p: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        boxShadow:
          "5px 5px 5px #000000, -3px -3px 5px rgba(255, 255, 255, 0.1);",
      }}
    >
      <CardMedia
        component="img"
        height={matches ? "30px" : "60px"}
        image={probs.icon}
        alt={probs.title}
        sx={{
          verticalAlign: "middle",
          objectFit: "contain",
        }}
      />
      <CardContent
        sx={{
          p: "0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
        style={{
          paddingBottom: "0",
        }}
      >
        <Typography
          variant={matches ? "h5" : "h3"}
          color="primary.contrastText"
          sx={{
            display: "inline",
            textTransform: "uppercase",
            fontFamily: "Proxima Nova Bold",
            textAlign: "center",
          }}
        >
          {probs.number}
        </Typography>
        <Typography
          color="primary.contrastText"
          fontSize={matches ? "14px" : "16px"}
          sx={{
            textAlign: "center",
            alignContent: "center",
          }}
          dangerouslySetInnerHTML={{ __html: probs.title }}
        />
      </CardContent>
    </Card>
  );
}
