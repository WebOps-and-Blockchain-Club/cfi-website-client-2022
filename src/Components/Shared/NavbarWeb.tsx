import React from "react";
import { ButtonGroup, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function NavbarWeb() {
  return (
    <ButtonGroup
      size="large"
      variant="text"
      aria-label="text button group"
      style={{ backgroundColor: "#030303", width: "100%", padding: "5px 0" }}
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
