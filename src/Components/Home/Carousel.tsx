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

  return (
    <Swiper
      spaceBetween={0}
      loop={true}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation
      style={{ width: "99vw" }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      speed={1200}
      loopFillGroupWithBlank
      parallax
    >
      {CarouselData.map((_data) => (
        <SwiperSlide style={{ height: matches ? "80vw" : "100vh" }}>
          <Grid
            style={{
              height: matches ? "80vw" : "100vh",
              backgroundImage: `linear-gradient(180deg,#030303 0%,rgba(8, 7, 8, 0) 43.83%,#030303 90.13%), url(${_data.image})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <Grid
              style={{
                position: "fixed",
                bottom: "0",
                left: "auto",
                right: "auto",
                // height: "100%",
                height: "fit-content",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                // justifyContent: "center",
                paddingBottom: matches ? "40px" : "100px",
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
    </Swiper>
  );
}
