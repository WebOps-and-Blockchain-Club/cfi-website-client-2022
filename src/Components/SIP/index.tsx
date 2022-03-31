import React from "react";
import CustomBox, { CustomGridPage } from "../Shared/CustomBox";
import Heading from "../Shared/Heading";

interface Probs {}

const SIP = (probs: Probs) => {
  return (
    <CustomBox>
      <CustomGridPage>
        <Heading white="STUDENT " red="INNOVATION PROGRAM" />
      </CustomGridPage>
    </CustomBox>
  );
};

export default SIP;
