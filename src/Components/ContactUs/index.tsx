import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { ContactUsData } from "../../Assets/Data/ContactUs";

import LandingImage from "../../Assets/Images/ContactUs/Landing.png";
import { IContact } from "../../Types";

import CustomBox from "../Shared/CustomBox";
import Heading from "../Shared/Heading";
import ContactCard from "./ContactCard";

const ContactUs = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <CustomBox>
      <Grid
        container
        pb={{ xs: 4, sm: 6, md: 10, lg: 14 }}
        direction="column"
        justifyItems="center"
        alignItems="center"
      >
        {/* LANDING */}
        <Grid
          style={{
            width: "99vw",
            height: matches ? "80vw" : "100vh",
            backgroundImage: `linear-gradient(180deg,#030303 0%,rgba(8, 7, 8, 0) 43.83%,#030303 90.13%), url(${LandingImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <Grid
            style={{
              bottom: "0",
              left: "auto",
              right: "auto",
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              paddingTop: matches ? "60px" : "120px",
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
                CFI&nbsp;
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
                TEAM
              </Typography>
            </Grid>
            <Typography
              style={{
                color: "#D6D6D6",
                fontSize: matches ? "18px" : "26px",
                fontWeight: matches ? "bold" : "bolder",
                paddingLeft: matches ? "10px" : "100px",
                paddingRight: matches ? "10px" : "100px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
          </Grid>
        </Grid>

        {/* CONTACTS */}
        {ContactUsData().map((_data: IContact) => (
          <Grid
            item
            container
            direction={"column"}
            py={{ xs: 8, sm: 10, md: 12, lg: 12 }}
            px={{ xs: 2, sm: 4, md: 6, lg: 10 }}
          >
            <Heading
              white={_data.title.split("##")[0]}
              red={_data.title.split("##")[1]}
            />
            <Grid item mt={{ xs: 4, sm: 6, md: 8, lg: 10 }}>
              <ContactCard members={_data.members} />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </CustomBox>
  );
};

export default ContactUs;
