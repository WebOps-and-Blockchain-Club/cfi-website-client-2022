import React from "react";
import { Grid, Typography } from "@mui/material";

import facebook from "../../Images/Social/facebook.png";
import twitter from "../../Images/Social/twitter.png";
import instagram from "../../Images/Social/instagram.png";
import youtube from "../../Images/Social/youtube.png";
import linkedin from "../../Images/Social/linkedin.png";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

interface Props {}

const Social = (props: Props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const matches2 = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid container 
    sx={{
      background: `linear-gradient(to right,black, #860000, black)`,
    }}
    flexDirection={{ xs:"column-reverse" , sm:"column-reverse", md:"row"}}>
      <Grid container
        lg={6}
        md={6}
        sm={12}
        xs={12}
        alignItems="center"
        mt={{xs: 1,sm:1 , md: 2 , lg:2}}
        mb={2}>
          <Grid item container
          justifyContent="center">
            <Typography variant={matches ? "h6" : "h5"} color="primary.contrastText" sx={{fontFamily: "Proxima Nova Bold" }} p={1}>
            © 2010 — 2021 &nbsp; All rights reserved 
            </Typography>
            </Grid>
      </Grid>
      <Grid
        lg={6}
        md={6}
        sm={12}
        xs={12}>
        <Grid
          container
          justifyContent="center"
          mt={2}
        mb={{xs: 1, sm:1 , md: 2 , lg:2}}
        >
          <Grid item mr={{ xs: 1, sm:3, md: 3 , lg:4}}>
            <img src={instagram} style={{ height: matches ? matches2 ? "35px" : "40px" : "45px" }}></img>
          </Grid>
          <Grid item mr={{ xs: 1, sm:3, md: 3 , lg:4}}>
            <img src={facebook} style={{ height: matches ? "35px": "45px" }}></img>
          </Grid>
          <Grid item mr={{ xs: 1, sm:3, md: 3 , lg:4}}>
            <img src={youtube} style={{ height: matches ? "35px": "45px" }}></img>
          </Grid>
          <Grid item mr={{ xs: 1, sm:3, md: 3 , lg:4}}>
            <img src={twitter} style={{ height: matches ? "35px": "45px" }}></img>
          </Grid>
          <Grid item mr={{ xs: 1, sm:3, md: 3 , lg:4}}>
            <img src={linkedin} style={{ height: matches ? "35px": "45px"}}></img>
          </Grid>
        </Grid>
      </Grid>
      {/* <Grid
        container
        mt={4}
        justifyContent="center"
        alignItems="center"
        color="primary"
      ></Grid> */}
    </Grid>
  )
};

export default Social;
