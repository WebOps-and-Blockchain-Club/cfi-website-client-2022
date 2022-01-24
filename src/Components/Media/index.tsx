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
        pt={{ xs: 10, sm: 12, md: 14, lg: 16 }}
        pb={{ xs: 2, sm: 6, md: 10, lg: 14 }}
      >
        <Heading white="" red="MEDIA" />
        <CardContainer data={data}></CardContainer>
      </Grid>
    </CustomBox>
  );
};

export default Media;
