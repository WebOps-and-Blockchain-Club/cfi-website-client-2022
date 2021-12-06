import { Box, Grid, TextField, Typography } from "@mui/material";

import Heading from "../../Widgets/Heading";

import cfilogo from "../../Images/CFILogo/CFI Logo (with text) - White - Copy.png";

export default function ContactUs() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        width: "100%",
        margin: "auto",
      }}
    >
      <Grid item mb={3}>
        <Heading white="contact " red="us" />
      </Grid>
      <Grid item container alignItems="stretch" justifyContent="space-evenly">
        <Grid
          item
          container
          justifyContent="space-around"
          direction="column"
          sx={{ backgroundColor: "#420101", borderRadius: "40px" }}
          p={3}
          m={2}
          xl={5}
          lg={7}
          xs={12}
        >
          <input
            type="text"
            name="name"
            style={{
              backgroundColor: "#080808",
              borderRadius: "40px",
              marginBottom: "7px",
              color: "primary.contrastText",
              padding: "2px 20px",
              fontSize: "20px",
              height: "43px",
              border: 0,
            }}
            className="input"
            placeholder="Name"
          />
          <input
            type="text"
            name="name"
            style={{
              backgroundColor: "#080808",
              borderRadius: "40px",
              marginBottom: "7px",
              color: "primary.contrastText",
              padding: "2px 20px",
              fontSize: "20px",
              height: "43px",
              border: 0,
            }}
            className="input"
            placeholder="Email"
          />
          <input
            type="text"
            name="name"
            style={{
              backgroundColor: "#080808",
              borderRadius: "40px",
              marginBottom: "7px",
              color: "primary.contrastText",
              padding: "2px 20px",
              fontSize: "20px",
              height: "43px",
              border: 0,
            }}
            className="input"
            placeholder="Subject"
          />
          <textarea
            rows={5}
            style={{
              backgroundColor: "#080808",
              borderRadius: "30px",
              marginBottom: "7px",
              color: "primary.contrastText",
              padding: "2px 20px",
              fontSize: "20px",
              border: 0,
            }}
            className="input"
            placeholder="message"
          />
        </Grid>
        <Grid
          container
          item
          sx={{
            backgroundImage: "linear-gradient(135deg, red, black)",
            borderRadius: "40px",
          }}
          xl
          lg={3}
          xs={12}
          alignItems="center"
          justifyContent="center"
          p={3}
          m={2}
        >
          <Grid
            item
            sx={{
              width: "fit-content",
              height: "fit-content",
            }}
          >
            <img
              src={cfilogo}
              alt="cfi logo"
              style={{ height: "200px", width: "200px" }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
