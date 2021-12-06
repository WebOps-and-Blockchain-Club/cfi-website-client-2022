import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import car from "../../Images/Home/Landing images/car.jpg";
import car2 from "../../Images/Home/Landing images/car2.jpg";
import dron from "../../Images/Home/Landing images/dron.jpg";
import rover from "../../Images/Home/Landing images/rover.jpg";
import Heading from "../../Widgets/Heading";

export default function TopCarousel() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Carousel
      autoPlay
      interval={5000}
      autoFocus
      dynamicHeight
      swipeable
      infiniteLoop
      showStatus={false}
      showThumbs={false}
      stopOnHover={false}
    >
      <div
        style={{
          height: `${matches ? "40vh" : "92vh"}`,
          backgroundImage: "linear-gradient(180deg, black, white, black)",
        }}
      >
        <img src={car} style={{ height: "inherit", opacity: "0.7" }} />
        <p className="legend" style={{ backgroundColor: "transparent" }}>
          <Heading white="India's largest student run " red="innovation lab" />
        </p>
      </div>
      <div
        style={{
          height: `${matches ? "40vh" : "92vh"}`,
          backgroundImage: "linear-gradient(180deg, black, white, black)",
        }}
      >
        <img src={car2} style={{ height: "inherit", opacity: "0.7" }} />
        <p className="legend" style={{ backgroundColor: "transparent" }}>
          <Heading white="India's largest student run " red="innovation lab" />
        </p>
      </div>
      <div
        style={{
          height: `${matches ? "40vh" : "92vh"}`,
          backgroundImage: "linear-gradient(180deg, black, white, black)",
        }}
      >
        <img src={dron} style={{ height: "inherit", opacity: "0.7" }} />
        <p className="legend" style={{ backgroundColor: "transparent" }}>
          <Heading white="India's largest student run " red="innovation lab" />
        </p>
      </div>
      <div
        style={{
          height: `${matches ? "40vh" : "92vh"}`,
          backgroundImage: "linear-gradient(180deg, black, white, black)",
        }}
      >
        <img src={rover} style={{ height: "inherit", opacity: "0.6" }} />
        <p className="legend" style={{ backgroundColor: "transparent" }}>
          <Heading white="India's largest student run " red="innovation lab" />
        </p>
      </div>
    </Carousel>
  );
}
