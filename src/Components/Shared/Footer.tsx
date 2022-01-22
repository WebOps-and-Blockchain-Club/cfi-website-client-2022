import React from "react";
import { Grid, Typography } from "@mui/material";

import twitter from "../../Assets/Images/Social/twitter.png";
import instagram from "../../Assets/Images/Social/instagram.png";
import youtube from "../../Assets/Images/Social/youtube.png";
import linkedin from "../../Assets/Images/Social/linkedin.png";
import mail from "../../Assets/Images/Social/email.png";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import cfilogo from "../../Assets/Images/CFILogo/CFI Logo - White.png";

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
      pt={2}
      pb={2}
    >
      <Grid
        container
        lg={4}
        md={6}
        sm={12}
        xs={12}
        alignItems="center"
        mt={1}
        mb={1}
        sx={{ order: matches2 ? 2 : 0 }}
      >
        <Grid item container justifyContent="center">
          <img
            src={cfilogo}
            alt="cfi logo"
            style={{ width: "40px", height: "25px", marginTop: 2 }}
          />
          <Grid item>
            <Typography
              variant={matches ? "h6" : "h5"}
              color="primary.contrastText"
              sx={{
                display: "inline",
                textTransform: "uppercase",
                fontFamily: "Proxima Nova Bold",
              }}
            >
              &nbsp; CENTRE &nbsp;
            </Typography>
            <Typography
              variant={matches ? "h6" : "h5"}
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
        </Grid>
      </Grid>
      <Grid
        container
        lg={4}
        md={6}
        sm={12}
        xs={12}
        alignItems="center"
        mt={1}
        mb={1}
        sx={{ order: matches2 ? 3 : 0 }}
      >
        <Grid item container justifyContent="center">
          <Typography
            variant={matches ? "h6" : "h6"}
            color="primary.contrastText"
            sx={{ fontFamily: "Proxima Nova Bold" }}
            p={1}
          >
            © 2022 &nbsp; All rights reserved
          </Typography>
        </Grid>
      </Grid>
      <Grid lg={4} md={12} sm={12} xs={12} sx={{ order: matches2 ? 1 : 0 }}>
        <Grid container justifyContent="center" mt={1} mb={1}>
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
    </Grid>
  );
};

export default Footer;
