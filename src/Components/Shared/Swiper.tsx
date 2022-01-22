import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/swiper-bundle";
import "swiper/swiper-bundle.esm.browser";

SwiperCore.use([Pagination, Navigation, Autoplay]);

interface Probs {
  data: any[];
}

export default function CustomSwiper(probs: Probs) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <Grid
      width={"100%"}
      alignItems={"center"}
      display={"flex"}
      flexDirection={"row"}
    >
      <div className="custom-swiper-button-prev" ref={navigationPrevRef} />
      <Swiper
        loop={false}
        slidesPerView={matches ? 1 : "auto"}
        pagination={false}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        style={{
          width: "100%",
          justifyContent: "space-evenly",
        }}
        speed={1200}
        loopFillGroupWithBlank={true}
        parallax
        centeredSlidesBounds={true}
        centeredSlides={true}
        watchSlidesVisibility
        // breakpoints={{
        //   0: {
        //     slidesPerView: 1,
        //     slidesPerGroup: 1,
        //   },
        //   // 600: {
        //   //   slidesPerView: 3,
        //   //   spaceBetween: 30,
        //   // },
        //   900: {
        //     slidesPerView: 2,
        //     slidesPerGroup: 2,
        //   },
        //   1200: {
        //     slidesPerView: 2,
        //     slidesPerGroup: 2,
        //   },
        //   1536: {
        //     slidesPerView: 3,
        //     slidesPerGroup: 3,
        //   },
        // }}
      >
        {probs.data.map((_data: any) => (
          <SwiperSlide className="custom-swiper-slide">
            <SwiperCard heading={_data.title} img={_data.img} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-swiper-button-next" ref={navigationNextRef} />
      {/* <div className="swiper-pagination" ref={events_paginationRef}></div> */}
    </Grid>
  );
}

type MediaCardProps = {
  heading: string;
  img: string;
};

function SwiperCard({ heading, img }: MediaCardProps) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Card
      sx={{
        m: "0 10px",
        width: matches ? "68vw" : "350px",
        borderRadius: "40px",
        backgroundColor: "primary.light",
        boxShadow:
          "5px 5px 5px #000000, -3px -3px 5px rgba(255, 255, 255, 0.1);",
      }}
    >
      <CardMedia
        component="img"
        image={img}
        alt="newsimg"
        sx={{
          borderRadius: "40px 40px 0 0",
          verticalAlign: "middle",
          objectFit: "cover",
          height: matches ? "50vw" : "270px",
        }}
      />
      <CardContent
        sx={{
          px: "10px",
          py: "20px",
          height: matches ? "50px" : "100px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
        style={{
          paddingBottom: "20px",
        }}
      >
        <Typography
          component="div"
          color="primary.contrastText"
          sx={{
            textAlign: "center",
            fontSize: matches ? "16px" : "18px",
            fontWeight: "bold",
            letterSpacing: "1px",
          }}
        >
          {heading}
        </Typography>
      </CardContent>
    </Card>
  );
}
