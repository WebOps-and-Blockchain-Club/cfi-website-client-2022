import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

interface Probs {
  logo: string;
  name: string;
  link: string;
}

export default function StartUpCard(probs: Probs) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Link to={probs.link} style={{ textDecoration: "none" }}>
      <Card
        sx={{
          width: matches ? "110px" : "150px",
          height: matches ? "100px" : "140px",
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
          width={matches ? "75px" : "90px"}
          height={matches ? "75px" : "90px"}
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
            height: matches ? "15px" : "40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
          style={{
            paddingTop: "5px",
            paddingBottom: "0",
          }}
        >
          <Typography
            color="primary.contrastText"
            sx={{
              textAlign: "center",
              fontSize: matches ? "12px" : "16px",
            }}
            fontWeight="bolder"
            // fontFamily="Proxima Nova Bold"
            // letterSpacing={1}
          >
            {probs.name}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
