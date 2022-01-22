import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Grid } from "@mui/material";

import SwiperCore, { Autoplay, Navigation, Pagination, Parallax } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/swiper-bundle";
import "swiper/swiper-bundle.esm.browser";

interface Probs {
  data: any[];
}

SwiperCore.use([Parallax, Pagination, Navigation, Autoplay]);

export default function Gallery(probs: Probs) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Swiper
      spaceBetween={0}
      loop={true}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation
      style={{ width: matches ? "80vw" : "70vw", borderRadius: "40px" }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      speed={1200}
      loopFillGroupWithBlank
      parallax
    >
      {probs.data.map((_data) => (
        <SwiperSlide>
          <Grid
            style={{
              height: matches ? "50vw" : "35vw",
              backgroundImage: `url(${_data.image})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
