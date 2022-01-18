import React from "react";
import CardContainer from "./CardContainer";
import data from "../../Assets/Data/Media";

interface Props {}

const Media = (props: Props) => {
  return (
    <>
      <h1 style={{ textAlign: "center", margin: 80, fontSize: 40 }}>MEDIA</h1>
      <CardContainer data={data}></CardContainer>
    </>
  );
};

export default Media;
