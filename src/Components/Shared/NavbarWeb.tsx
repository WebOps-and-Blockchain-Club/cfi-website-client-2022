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

export default function NavbarWeb() {
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
        <Button style={{ color: "black" }}>Competition Teams</Button>
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
