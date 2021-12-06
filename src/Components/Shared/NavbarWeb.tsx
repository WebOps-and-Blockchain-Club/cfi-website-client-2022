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
      style={{ backgroundColor: "#030303", width: "100%" }}
    >
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button
          variant="text"
          style={{
            color: "#D6D6D6",
            margin: "2px 15px",
            fontSize: "24px",
            fontFamily: "Proxima Nova Bold",
          }}
        >
          Home
        </Button>
      </Link>
      <Link to="/clubs" style={{ textDecoration: "none" }}>
        <Button
          variant="text"
          style={{
            color: "#D6D6D6",
            margin: "2px 15px",
            fontSize: "24px",
            fontFamily: "Proxima Nova Bold",
          }}
        >
          Clubs
        </Button>
      </Link>
      <Link to="/achievements" style={{ textDecoration: "none" }}>
        <Button
          variant="text"
          style={{
            color: "#D6D6D6",
            margin: "2px 15px",
            fontSize: "24px",
            fontFamily: "Proxima Nova Bold",
          }}
        >
          Achievements
        </Button>
      </Link>
      <Link to="/competitionteams" style={{ textDecoration: "none" }}>
        <Button
          variant="text"
          style={{
            color: "#D6D6D6",
            margin: "2px 15px",
            fontSize: "24px",
            fontFamily: "Proxima Nova Bold",
          }}
        >
          Competition Teams
        </Button>
      </Link>
      <Link to="/achievements" style={{ textDecoration: "none" }}>
        <Button
          variant="text"
          style={{
            color: "#D6D6D6",
            margin: "2px 15px",
            fontSize: "24px",
            fontFamily: "Proxima Nova Bold",
          }}
        >
          Media
        </Button>
      </Link>
      <Link to="/achievements" style={{ textDecoration: "none" }}>
        <Button
          variant="text"
          style={{
            color: "#D6D6D6",
            margin: "2px 15px",
            fontSize: "24px",
            fontFamily: "Proxima Nova Bold",
          }}
        >
          Alumni
        </Button>
      </Link>
      <Link to="/achievements" style={{ textDecoration: "none" }}>
        <Button
          variant="text"
          style={{
            color: "#D6D6D6",
            margin: "2px 15px",
            fontSize: "24px",
            fontFamily: "Proxima Nova Bold",
          }}
        >
          About Us
        </Button>
      </Link>
      <Link to="/achievements" style={{ textDecoration: "none" }}>
        <Button
          variant="text"
          style={{
            color: "#D6D6D6",
            margin: "2px 15px",
            fontSize: "24px",
            fontFamily: "Proxima Nova Bold",
          }}
        >
          Contact Us
        </Button>
      </Link>
    </ButtonGroup>
  );
}
