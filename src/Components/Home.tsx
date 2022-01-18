import { Box } from "@mui/material";
import React from "react";
import "../Styles/Home.css";

interface Props {}

const Home = (props: Props) => {
  return (
    <Box sx={{ textAlign: "center", fontSize: 50, pt: "60px" }}>
      Welcome to CFI
    </Box>
  );
};

export default Home;
