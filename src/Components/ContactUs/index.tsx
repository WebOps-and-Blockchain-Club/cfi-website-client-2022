import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { ContactUsData } from "../../Assets/Data/ContactUs";

import LandingImage from "../../Assets/Images/ContactUs/Landing.jpg";
import { IContact } from "../../Types";
import ContactSection from "./ContactSection";

import CustomBox, { CustomGridSection } from "../Shared/CustomBox";
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
            }}
            pt={{ xs: 8, sm: 12, md: 14, lg: 16 }}
            pb={"5vh"}
            textAlign="center"
          >
            <Grid item>
              <Heading white="CFI" red=" TEAM" />
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
                13 years of staying true to our motto, 'Walk in with an idea,
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
            13 years of staying true to our motto, <br /> "Walk in with an
            idea, Walk out with a product",
            <br /> CFI is now more than just a student lab, it is a feeling
            which holds an entire community together.
          </Typography>
        )}

        {/* CONTACTS */}
        {ContactUsData().map((_data: IContact) => (
          <CustomGridSection>
            <Heading
              white={_data.title.split("##")[0]}
              red={_data.title.split("##")[1]}
            />
            <ContactSection
              title=""
              email={_data.email}
              members={_data.members}
            />
          </CustomGridSection>
        ))}
      </Grid>
    </CustomBox>
  );
};

export default ContactUs;
