import React from "react";
import { Grid, SvgIcon, useMediaQuery, useTheme } from "@mui/material";
import ExternalIcon from "../../Assets/Images/external-link.svg?react";

import "../../Styles/website-btn.css";

interface Props {
  title: string;
  link: string;
}

const WebsiteBtn = (props: Props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
      className="website-a-btn"
    >
      <Grid
        container
        alignItems={"center"}
        gap={2}
        sx={{
          padding: "15px 20px",
          color: "primary.contrastText",
          backgroundColor: "secondary.dark",
          borderRadius: "10px",
          boxShadow: "3.99948px 3.99948px 22.3971px #0E0E0E",
          fontSize: matches ? "21px" : "26px",
          fontFamily: "Proxima Nova Bold",
        }}
      >
        {props.title}
        <SvgIcon
          component={ExternalIcon}
          inheritViewBox
          sx={{
            color: "primary.contrastText",
          }}
          className="website-icon"
        />
      </Grid>
    </a>
  );
};

export default WebsiteBtn;
