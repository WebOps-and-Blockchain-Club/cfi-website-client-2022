import React from "react";
import {
  Grid,
  ButtonGroup,
  Button,
  Box,
  Typography,
  Avatar,
} from "@mui/material";
import myPhoto from "../assets/Images/myPhoto.png";
import { Link } from "react-router-dom";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function NavBar() {
  return (
    <ButtonGroup
      size="large"
      variant="text"
      aria-label="text button group"
      style={{ color: "black" }}
    >
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button style={{ color: "black" }}>Home</Button>
      </Link>
      <Link to="/clubs" style={{ textDecoration: "none" }}>
        <Button style={{ color: "black" }}>Clubs</Button>
      </Link>
      <Link to="/achievements" style={{ textDecoration: "none" }}>
        <Button style={{ color: "black" }}>Achievements</Button>
      </Link>
      <Link to="/competitionteams" style={{ textDecoration: "none" }}>
        <Button style={{ color: "black" }}>Compation Teams</Button>
      </Link>
      <Link to="/achievements" style={{ textDecoration: "none" }}>
        <Button style={{ color: "black" }}>Media</Button>
      </Link>
      <Link to="/achievements" style={{ textDecoration: "none" }}>
        <Button style={{ color: "black" }}>Alumni</Button>
      </Link>
      <Link to="/achievements" style={{ textDecoration: "none" }}>
        <Button style={{ color: "black" }}>About Us</Button>
      </Link>
      <Link to="/achievements" style={{ textDecoration: "none" }}>
        <Button style={{ color: "black" }}>Contact Us</Button>
      </Link>
    </ButtonGroup>
  );
}

function NavMenu() {
  return <div>NavMenu</div>;
}

export default function Header() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return matches ? <NavMenu /> : <NavBar />;
}
