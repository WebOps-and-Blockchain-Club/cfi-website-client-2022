import React from "react";
import { ButtonGroup, Button } from "@mui/material";
import { Link } from "react-router-dom";

import cfilogo from "../../Images/CFILogo/CFI Logo - White.png"

export default function NavbarWeb() {
  return (
    
    <ButtonGroup
      size="large"
      variant="text"
      aria-label="text button group"
      style={{ backgroundColor: "#030303", width: "100%", padding: "5px 0" , display:"flex" , alignItems: "center" , borderRadius:0  , position: "fixed" , top: "0px" , left: "0px" , right:0  , zIndex:10 }}
    >
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button
          variant="text"
          style={{
            color: "#D6D6D6",
            margin: "2px 0px 2px 15px",
            fontSize: "20px",
          }}
        >
          <img src={cfilogo} style={{height: "25px"}} />
        </Button>
      </Link>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button
          variant="text"
          style={{
            color: "#D6D6D6",
            margin: "2px 15px",
            fontSize: "20px",
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
            fontSize: "20px",
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
            fontSize: "20px",
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
            fontSize: "20px",
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
            fontSize: "20px",
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
            fontSize: "20px",
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
            fontSize: "20px",
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
            fontSize: "20px",
            fontFamily: "Proxima Nova Bold",
          }}
        >
          Contact Us
        </Button>
      </Link>
    </ButtonGroup>
  );
}
