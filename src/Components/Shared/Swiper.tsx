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
import { HashLink } from "react-router-hash-link";

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
      width={matches ? "calc(68vw + 50px)" : "100%"}
      alignItems={"center"}
      display={"flex"}
      flexDirection={"row"}
    >
      <div className="custom-swiper-button-prev" ref={navigationPrevRef} />
      <Swiper
        loop={true}
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={false}
        navigation={{
          prevEl: ".custom-swiper-button-prev",
          nextEl: ".custom-swiper-button-next",
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={1200}
        loopFillGroupWithBlank={true}
        parallax
        centeredSlides={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          600: {
            slidesPerView: "auto",
            spaceBetween: 30,
          },
        }}
      >
        {probs.data.map((_data: any) => (
          <SwiperSlide className="custom-swiper-slide">
            <SwiperCard
              heading={_data.title}
              image={_data.image}
              link={`/achievements#${_data.id}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-swiper-button-next" ref={navigationNextRef} />
    </Grid>
  );
}

type MediaCardProps = {
  heading: string;
  image: string;
  link: string;
};

function SwiperCard({ heading, image, link }: MediaCardProps) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <HashLink to={link} style={{ textDecoration: "none" }}>
      <Card
        sx={{
          m: "0 5px",
          width: matches ? "68vw" : "350px",
          borderRadius: "20px",
          backgroundColor: "primary.light",
          boxShadow:
            "5px 5px 5px #000000, -3px -3px 5px rgba(255, 255, 255, 0.1);",
        }}
      >
        <CardMedia
          component="img"
          image={image}
          alt="newsimg"
          sx={{
            borderRadius: "20px 20px 0 0",
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
            {heading.split("##").join("")}
          </Typography>
        </CardContent>
      </Card>
    </HashLink>
  );
}
