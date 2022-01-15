import * as React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

type MediaCardProps = {
  name: string;
  logo: string;
};

export default function CompetitionTeamCard({ name, logo }: MediaCardProps) {
  return (
    <Card
      sx={{
        width: "270px",
        borderRadius: "40px",
        backgroundColor: "primary.light",
        boxShadow:
          "5px 5px 5px #000000, -3px -3px 5px rgba(255, 255, 255, 0.1);",
      }}
    >
      <CardMedia
        component="img"
        height="270px"
        image={logo}
        alt={name}
        sx={{
          borderRadius: "40px 40px 0 0",
          verticalAlign: "middle",
          objectFit: "contain",
          p: "5px",
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
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
}
