import * as React from "react";
import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

import { IMember } from "../../Types";
import ContactCard from "./ContactCard";

interface Probs {
  title: string;
  email?: string | null;
  members: IMember[];
}

export default function ContactSection({ title, members, email }: Probs) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      {email && (
        <Grid
          item
          container
          justifyContent={"center"}
          mt={{ xs: 4, sm: 5, md: 6, lg: 7 }}
        >
          <Typography
            color="primary.contrastText"
            sx={{
              textAlign: "center",
              fontSize: matches ? "16px" : "26px",
            }}
          >
            {title}&nbsp;EMAIL: &nbsp;
          </Typography>
          <a
            href={`mailto:${email}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Typography
              color="secondary"
              sx={{
                textAlign: "center",
                fontSize: matches ? "16px" : "26px",
              }}
            >
              {email}
            </Typography>
          </a>
        </Grid>
      )}
      <Grid item mt={{ xs: 4, sm: 5, md: 6, lg: 7 }}>
        <ContactCard members={members} />
      </Grid>
    </>
  );
}
