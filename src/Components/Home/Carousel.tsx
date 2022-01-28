import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Grid, Typography } from "@mui/material";

import { CarouselData } from "../../Assets/Data/Home";

import SwiperCore, { Autoplay, Navigation, Pagination, Parallax } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/swiper-bundle";
import "swiper/swiper-bundle.esm.browser";

import "../../Styles/Swiper.css";

SwiperCore.use([Parallax, Pagination, Navigation, Autoplay]);

export default function TopCarousel() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <Swiper
      spaceBetween={0}
      loop={true}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation={{
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      }}
      style={{ width: "99vw" }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      speed={1200}
      loopFillGroupWithBlank
      parallax
    >
      <div
        className="swiper-button-prev custom-home-swiper-button-prev"
        ref={navigationPrevRef}
      />
      {CarouselData.map((_data) => (
        <SwiperSlide style={{ height: matches ? "90vh" : "100vh" }}>
          <Grid
            style={{
              height: matches ? "90vh" : "100vh",
              backgroundImage: matches
                ? `linear-gradient(180deg, #030303 0%, rgba(8, 7, 8, 0) 43.83%, #030303 75.13%), url(${_data.image})`
                : `linear-gradient(180deg,#030303 0%,rgba(8, 7, 8, 0) 43.83%,#030303 90.13%), url(${_data.image})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              paddingBottom: "100px",
            }}
          >
            <Grid
              style={{
                position: "fixed",
                bottom: "0",
                left: "auto",
                right: "auto",
                height: "fit-content",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                paddingBottom: matches ? "80px" : "100px",
              }}
              textAlign="center"
            >
              <Grid item>
                <Typography
                  variant={matches ? "h5" : "h3"}
                  color="primary.contrastText"
                  sx={{
                    display: "inline",
                    textTransform: "uppercase",
                    fontFamily: "Proxima Nova Bold",
                    textAlign: "center",
                  }}
                >
                  CENTRE&nbsp;
                </Typography>
                <Typography
                  variant={matches ? "h5" : "h3"}
                  color="secondary"
                  sx={{
                    display: "inline",
                    textTransform: "uppercase",
                    fontFamily: "Proxima Nova Bold",
                    textAlign: "center",
                  }}
                >
                  FOR INNOVATION
                </Typography>
              </Grid>
              <Typography
                style={{
                  color: "#D6D6D6",
                  fontSize: matches ? "18px" : "26px",
                  fontWeight: matches ? "bold" : "bolder",
                }}
              >
                {_data.linear}
              </Typography>
            </Grid>
          </Grid>
        </SwiperSlide>
      ))}
      <div
        className="swiper-button-next custom-home-swiper-button-next"
        ref={navigationNextRef}
      />
    </Swiper>
  );
}
