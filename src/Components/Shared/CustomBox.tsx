import { Grid } from "@mui/material";
import * as React from "react";
import bg from "../../Assets/Images/particles.png";
import Footer from "./Footer";
import Header from "./Navbar";

interface Props {
  children: React.ReactChild[] | React.ReactChildren[] | React.ReactChild;
}

const CustomBox = (props: Props) => {
  return (
    <Grid
      style={{
        backgroundColor: "#030303",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <Header />
      {props.children}
      <Footer />
    </Grid>
  );
};

export default CustomBox;