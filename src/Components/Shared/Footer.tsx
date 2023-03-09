import React from "react";
import { Grid, Typography } from "@mui/material";

import twitter from "../../Assets/Icons/Social/twitter.png";
import instagram from "../../Assets/Icons/Social/instagram.png";
import youtube from "../../Assets/Icons/Social/youtube.png";
import linkedin from "../../Assets/Icons/Social/linkedin.png";
import mail from "../../Assets/Icons/Social/email.png";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CFILogo from "../../Assets/Images/CFILogo/CFI Logo - White.png";

interface Props {}

const Footer = (props: Props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const matches2 = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid
      container
      sx={{
        background: `linear-gradient(to right,black, #860000, black)`,
      }}
      alignItems="center"
      flexDirection={{ xs: "column", sm: "column", md: "row" }}
    >
      <Grid
        item
        container
        alignItems="center"
        justifyContent={"space-between"}
        flexDirection={{ xs: "column", sm: "column", md: "row" }}
        pt={2}
        pb={2}
        pr={5}
        pl={5}
        gap={2}
      >
        <Grid
          item
          container
          alignItems="center"
          sx={{ width: matches2 ? "100%" : "unset" }}
          justifyContent={"center"}
        >
          <img
            src={CFILogo}
            alt="cfi logo"
            style={{ height: matches ? "40px" : "60px", marginTop: 2 }}
          />
          <Grid>
            <Grid item>
              <Typography
                variant={matches ? "subtitle1" : "h5"}
                color="primary.contrastText"
                sx={{
                  display: "inline",
                  textTransform: "uppercase",
                  fontFamily: "Proxima Nova Bold",
                }}
              >
                &nbsp;&nbsp;CENTRE &nbsp;
              </Typography>
              <Typography
                variant={matches ? "subtitle1" : "h5"}
                color="secondary"
                sx={{
                  display: "inline",
                  textTransform: "uppercase",
                  fontFamily: "Proxima Nova Bold",
                }}
              >
                For innovation
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant={matches ? "subtitle1" : "h5"}
                color="primary.contrastText"
                sx={{
                  display: "inline",
                  textTransform: "uppercase",
                  fontFamily: "Proxima Nova Bold",
                }}
              >
                &nbsp;&nbsp;IIT Madras
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          sx={{ order: matches2 ? 3 : 0, width: matches2 ? "100%" : "unset" }}
          justifyContent={"center"}
        >
          <Typography
            variant={matches ? "subtitle2" : "h6"}
            color="primary.contrastText"
            sx={{ fontFamily: "Proxima Nova Bold" }}
          >
            © 2023 &nbsp; All rights reserved
          </Typography>
        </Grid>
        <Grid
          item
          container
          sx={{ order: matches2 ? 2 : 0, width: matches2 ? "100%" : "unset" }}
          justifyContent={"space-evenly"}
        >
          <Grid item mr={{ xs: 1, sm: 3, md: 3, lg: 3 }}>
            <a
              href="mailto:cfi@smail.iitm.ac.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={mail}
                style={{
                  borderRadius: "20px",
                  height: matches ? "35px" : "42px",
                }}
                alt="Mail"
              />
            </a>
          </Grid>
          <Grid item mr={{ xs: 1, sm: 3, md: 3, lg: 3 }}>
            <a
              href="https://www.instagram.com/cfi_iitm_/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instagram}
                style={{
                  height: matches ? (matches2 ? "35px" : "40px") : "42px",
                }}
                alt="Instagram"
              />
            </a>
          </Grid>
          <Grid item mr={{ xs: 1, sm: 3, md: 3, lg: 3 }}>
            <a
              href="https://www.youtube.com/c/CFIIITMadras"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={youtube}
                style={{ height: matches ? "35px" : "42px" }}
                alt="YouTube"
              />
            </a>
          </Grid>
          <Grid item mr={{ xs: 1, sm: 3, md: 3, lg: 3 }}>
            <a
              href="https://in.linkedin.com/company/centre-for-innovation-cfi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedin}
                style={{ height: matches ? "35px" : "42px" }}
                alt="LinkedIn"
              />
            </a>
          </Grid>
          <Grid item mr={{ xs: 1, sm: 3, md: 3, lg: 3 }}>
            <a
              href="https://twitter.com/cfi_iitm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={twitter}
                style={{ height: matches ? "35px" : "42px" }}
                alt="Twitter"
              />
            </a>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        flexDirection={{ xs: "column", sm: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-evenly"
        sx={{ backgroundColor: "primary.light" }}
        p={1}
      >
        <Typography color="primary.contrastText" textAlign="center">
          Developed by Students of WebOps Team and Branding & Engagement Team,
          CFI.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
