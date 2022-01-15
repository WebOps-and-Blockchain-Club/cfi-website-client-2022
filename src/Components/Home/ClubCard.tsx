import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import React from "react";

interface Probs {
  logo: string;
  name: string;
}

export default function ClubCard(probs: Probs) {
  return (
    <Card
      sx={{
        width: "150px",
        height: "140px",
        borderRadius: "25px",
        backgroundColor: "secondary.dark",
        p: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        boxShadow: "3.99948px 3.99948px 22.3971px #0E0E0E",
      }}
    >
      <CardMedia
        component="img"
        height="90px"
        width="90px"
        image={probs.logo}
        alt={probs.name}
        sx={{
          verticalAlign: "middle",
          objectFit: "contain",
        }}
      />
      <CardContent
        sx={{
          p: "0",
          //   pt: "5px",
          height: "40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <Typography
          //   gutterBottom
          //   variant="subtitle1"
          component="div"
          color="primary.contrastText"
          sx={{
            textAlign: "center",
            fontSize: "16px",
            // fontWeight: "bolder",
            // letterSpacing: "1px",
          }}
        >
          {probs.name}
        </Typography>
      </CardContent>
    </Card>
  );
}
