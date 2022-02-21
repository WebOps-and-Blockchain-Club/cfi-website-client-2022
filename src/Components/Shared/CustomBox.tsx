import { Grid } from "@mui/material";
import * as React from "react";
import bg from "../../Assets/Images/Particles.svg";
import Footer from "./Footer";
import Header from "./Navbar";

interface Props {
  children:
    | React.ReactChild[]
    | React.ReactChildren[]
    | React.ReactChild
    | React.ReactNode;
}

const CustomBox = (props: Props) => {
  return (
    <Grid
      style={{
        backgroundColor: "#030303",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        width: "100vw",
        maxWidth: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      minHeight="100vh"
    >
      <Header />
      {props.children}
      <Footer />
    </Grid>
  );
};

const CustomGridPage = (props: Props) => {
  return (
    <Grid
      container
      px={{ xs: 4, sm: 7, md: 10, lg: 14, xl: 18 }}
      pt={{ xs: 10, sm: 12, md: 14, lg: 16 }}
      pb={{ xs: 2, sm: 6, md: 10, lg: 14 }}
      direction="column"
      justifyItems="center"
      alignItems="center"
    >
      {props.children}
    </Grid>
  );
};

const CustomGridSection = (props: Props) => {
  return (
    <Grid
      item
      container
      direction="column"
      alignItems="center"
      sx={{ width: "100%" }}
      px={{ xs: 4, sm: 7, md: 10, lg: 14, xl: 18 }}
      py={{ xs: 8, sm: 10, md: 12, lg: 12 }}
    >
      {props.children}
    </Grid>
  );
};

export default CustomBox;
export { CustomGridPage, CustomGridSection };
