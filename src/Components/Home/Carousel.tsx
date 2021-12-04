import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import car from "../../Images/Home/Landing images/car.jpg";
import car2 from "../../Images/Home/Landing images/car2.jpg";
import dron from "../../Images/Home/Landing images/dron.jpg";
import rover from "../../Images/Home/Landing images/rover.jpg";
import Heading from "../../Widgets/Heading";

export default class TopCarousel extends Component {
  render() {
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
        <div style={{ height: "92vh" }}>
          <img src={car} style={{ height: "inherit" }} />
          <p className="legend" style={{ backgroundColor: "transparent" }}>
            <Heading
              white="India's largest student run "
              red="innovation lab"
            />
          </p>
        </div>
        <div style={{ height: "92vh" }}>
          <img src={car2} style={{ height: "inherit" }} />
          <p className="legend" style={{ backgroundColor: "transparent" }}>
            <Heading
              white="India's largest student run "
              red="innovation lab"
            />
          </p>
        </div>
        <div style={{ height: "92vh" }}>
          <img src={dron} style={{ height: "inherit" }} />
          <p className="legend" style={{ backgroundColor: "transparent" }}>
            <Heading
              white="India's largest student run "
              red="innovation lab"
            />
          </p>
        </div>
        <div style={{ height: "92vh" }}>
          <img src={rover} style={{ height: "inherit" }} />
          <p className="legend" style={{ backgroundColor: "transparent" }}>
            <Heading
              white="India's largest student run "
              red="innovation lab"
            />
          </p>
        </div>
      </Carousel>
    );
  }
}
