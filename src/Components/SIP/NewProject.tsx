import React from "react";
import CustomBox, { CustomGridPage } from "../Shared/CustomBox";
import Heading from "../Shared/Heading";

interface Probs {}

const NewProject = (probs: Probs) => {
  return (
    <CustomBox>
      <CustomGridPage>
        <Heading white="PROPOSE " red="PROJECT" />
      </CustomGridPage>
    </CustomBox>
  );
};

export default NewProject;
