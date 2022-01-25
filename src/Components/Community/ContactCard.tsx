import * as React from "react";
import { Card, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

import { IMember } from "../../Types";

interface Probs {
  title: string;
  email: string;
  members: IMember[];
}

export default function ContactCard({ title, members, email }: Probs) {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Card
      sx={{
        borderRadius: "20px",
        backgroundColor: "primary.light",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        p: matchesSM ? 2 : 4,
        boxShadow:
          "5px 5px 5px #000000, -3px -3px 5px rgba(255, 255, 255, 0.1);",
      }}
    >
      <Grid item textAlign="center" mb={1}>
        <Typography
          variant={matchesSM ? "h6" : "h5"}
          color="primary.contrastText"
          sx={{
            display: "inline",
            textTransform: "uppercase",
            fontFamily: "Proxima Nova Bold",
            textAlign: "center",
          }}
        >
          {title}&nbsp;
        </Typography>
        <Typography
          variant={matchesSM ? "h6" : "h5"}
          color="secondary"
          sx={{
            display: "inline",
            textTransform: "uppercase",
            fontFamily: "Proxima Nova Bold",
            textAlign: "center",
          }}
        >
          EMAIL
        </Typography>
      </Grid>
      <Grid pb={4}>
        <a
          href={`mailto:${email}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <Typography p={0.5} fontSize={"18px"}>
            {email}
          </Typography>
        </a>
      </Grid>
      <Grid item textAlign="center" mb={1}>
        <Typography
          variant={matchesSM ? "h6" : "h5"}
          color="primary.contrastText"
          sx={{
            display: "inline",
            textTransform: "uppercase",
            fontFamily: "Proxima Nova Bold",
            textAlign: "center",
          }}
        >
          {title}&nbsp;
        </Typography>
        <Typography
          variant={matchesSM ? "h6" : "h5"}
          color="secondary"
          sx={{
            display: "inline",
            textTransform: "uppercase",
            fontFamily: "Proxima Nova Bold",
            textAlign: "center",
          }}
        >
          HEADS
        </Typography>
      </Grid>
      <Grid
        container
        direction={"row"}
        rowGap={{ xs: 3, sm: 4, md: 5, lg: 6 }}
        columnGap={{ xs: 3, sm: 4, md: 5, lg: 6 }}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {members.map((_contact) => (
          <Grid textAlign={"center"} fontSize={"18px"}>
            <Typography fontWeight={"bolder"} p={0.5} fontSize={"18px"}>
              {_contact.name}
            </Typography>
            <a
              href={`mailto:${_contact.email}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Typography p={0.5} fontSize={"18px"}>
                {_contact.email}
              </Typography>
            </a>
            <Typography p={0.5} fontSize={"18px"}>
              {_contact.phone}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Card>
  );
}
