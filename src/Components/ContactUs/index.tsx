import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { ContactUsData } from "../../Assets/Data/ContactUs";

import LandingImage from "../../Assets/Images/ContactUs/Landing.png";
import { IContact } from "../../Types";
import ContactSection from "./ContactSection";

import CustomBox from "../Shared/CustomBox";
import Heading from "../Shared/Heading";

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
            width: "100%",
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
              justifyContent: "space-between",
              paddingTop: matches ? "7vh" : "15vh",
              paddingBottom: "5vh",
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
            {!matches && (
              <Typography
                style={{
                  color: "#D6D6D6",
                  fontSize: matches ? "18px" : "26px",
                  fontWeight: matches ? "bold" : "bolder",
                  paddingLeft: matches ? "10px" : "100px",
                  paddingRight: matches ? "10px" : "100px",
                }}
                textAlign={"center"}
              >
                13 years of staying true to our motto, 'Walk in with and idea,
                Walk out with a product', CFI is now more than just a student
                lab, it is a feeling which holds an entire community together.
              </Typography>
            )}
          </Grid>
        </Grid>

        {matches && (
          <Typography
            style={{
              color: "#D6D6D6",
              fontSize: matches ? "16px" : "26px",
              fontWeight: matches ? "bold" : "bolder",
              paddingLeft: matches ? "20px" : "100px",
              paddingRight: matches ? "20px" : "100px",
            }}
            textAlign={"center"}
          >
            13 years of staying true to our motto, <br /> "Walk in with and
            idea, Walk out with a product",
            <br /> CFI is now more than just a student lab, it is a feeling
            which holds an entire community together.
          </Typography>
        )}

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
            <ContactSection
              title=""
              email={_data.email}
              members={_data.members}
            />
          </Grid>
        ))}
      </Grid>
    </CustomBox>
  );
};

export default ContactUs;
