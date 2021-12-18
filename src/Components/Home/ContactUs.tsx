import { Grid, Button, Typography } from "@mui/material";

import Heading from "../../Widgets/Heading";

import cfilogo from "../../Images/CFILogo/CFI Logo (with text) - White - Copy.png";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function ContactUs() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid
      item
      container
      direction="column"
      alignItems="center"
      justifyContent="space-between"
      // pt={10}
      p={{xs:1 , sm:2 , md:4}}
      sx={{
        width: "100%",
        margin: "auto",
      }}
    >
      <Grid item mt={4} mb={4}>
        <Heading white="contact " red="us" />
      </Grid>
      <Grid item container alignItems="stretch" justifyContent="space-evenly">
        <Grid
          item
          container
          justifyContent="space-around"
          direction="column"
          sx={{ backgroundColor: "#420101", borderRadius: "40px" }}
          p={matches ? 3 : 2}
          m={2}
          xl={5}
          lg={5}
          xs={12}
        >
          <input
            type="text"
            name="name"
            style={{
              backgroundColor: "#080808",
              borderRadius: "40px",
              marginBottom: "7px",
              // color: "primary.contrastText",
              color: "#D6D6D6",
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
              // color: "primary.contrastText",
              color: "#D6D6D6",
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
              // color: "primary.contrastText",
              color: "#D6D6D6",
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
              // not working here
              // color: "primary.contrastText",
              color: "#D6D6D6",
              padding: "10px 20px",
              fontSize: "20px",
              fontFamily: "Proxima Nova",
              border: 0,
            }}
            className="input"
            placeholder="Message"
          />
          <Button
            variant="contained"
            color="secondary"
            sx={{ borderRadius: "40px", marginTop: "2px"}}
          >
            Submit
          </Button>
        </Grid>
        <Grid
          container
          item
          sx={{
            backgroundImage: "linear-gradient(135deg, #420101, #030303)",
            borderRadius: "40px",
          }}
          xl
          lg={5}
          xs={12}
          alignItems="center"
          justifyContent="space-around"
          p={3}
          m={2}
        >
          <Grid
            item
            sx={{
              width: "fit-content",
              height: "fit-content",
            }}
            m={2}
          >
            <img
              src={cfilogo}
              alt="cfi logo"
              style={{  width: matches? "200px" : "225px" }}
            />
          </Grid>
          {matchesSm ? (
            <>
              <Typography variant="h5" color="primary.contrastText">
                IIT Madras
              </Typography>
              <Typography variant="h5" color="primary.contrastText">
                Contact no. 00909134
              </Typography>
            </>
          ) : (
            <Typography variant="h4" color="primary.contrastText">
              IIT Madras, Contact no. 00909134
            </Typography>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}
