import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// import Carousel from "react-material-ui-carousel";
// import CarouselSlide from "react-material-ui-carousel";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import car from "../../Assets/Images/Home/Landing images/car.jpg";
import car2 from "../../Assets/Images/Home/Landing images/car2.jpg";
import dron from "../../Assets/Images/Home/Landing images/dron.jpg";
import rover from "../../Assets/Images/Home/Landing images/rover.jpg";
import Heading from "../Shared/Heading";

import "../../Styles/Home.css";

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
      <div className="landing-img1">CENTRE FOR INNOVATION</div>
      <div className="landing-img2">CENTRE FOR INNOVATION</div>
      <div className="landing-img3">CENTRE FOR INNOVATION</div>
      <div className="landing-img2">CENTRE FOR INNOVATION</div>
      <div className="landing-img2">CENTRE FOR INNOVATION</div>
      <div className="landing-img2">CENTRE FOR INNOVATION</div>
    </Carousel>
  );
}
