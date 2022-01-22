import React from "react";
import CardContainer from "./CardContainer";
import data from "../../Assets/Data/Media";
import CustomBox from "../Shared/CustomBox";
import Heading from "../Shared/Heading";
import { Grid } from "@mui/material";

interface Props {}

const Media = (props: Props) => {
  return (
    <CustomBox>
      <Grid
        pt={{ xs: 4, sm: 6, md: 10, lg: 14 }}
        pb={{ xs: 6, sm: 8, md: 10, lg: 12 }}
      >
        <Heading white="" red="MEDIA" />
        <CardContainer data={data}></CardContainer>
      </Grid>
    </CustomBox>
  );
};

export default Media;
