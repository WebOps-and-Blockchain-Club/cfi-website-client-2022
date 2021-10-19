import React from "react";
import { Grid, Typography } from "@mui/material";

import Heading from "../../Widgets/Heading";

import background3 from "../../Images/Home/background3.png";
import contact from "../../Images/Home/contact.png";

export default function ContactUs() {
  return (
    <Grid
      container
      spacing={3}
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      m={3.5}
      sx={{
        background: `url(${background3}),linear-gradient(rgb(56, 56, 56) 13%, white, black) `,
        width: "100%",
        // opacity: "0.7",
      }}
    >
      <Heading white="contact " red="us" />
      <Grid
        item
        container
        direction="row"
        alignItems="center"
        flexWrap="nowrap"
        p={2}
        spacing={4}
      >
        <Grid
          item
          container
          justifyContent="space-around"
          direction="column"
          spacing={3}
          alignItems="center"
        >
          <Heading white="cfi " red="team" />
          <Grid item>
            <img src={contact} alt="dummy Image" />
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="body1" color="primary">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
            architecto sequi, ad at iste quos qui perferendis quam adipisci
            molestiae nam nisi nihil suscipit illum officiis, ab laborum placeat
            temporibus. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Facere architecto sequi, ad at iste quos qui perferendis quam
            adipisci molestiae nam nisi nihil suscipit illum officiis, ab
            laborum placeat temporibus.
          </Typography>
          <Typography variant="h5" color="primary" mt={2}>
            Contact Heads: 12XXX789YY/ 12XXX789YY
          </Typography>
          <Typography variant="h5" color="primary" mt={0.5} ml={9}>
            blah@gmail.com
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
