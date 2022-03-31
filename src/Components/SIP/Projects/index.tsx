import React from "react";
import CustomBox, { CustomGridPage } from "../../Shared/CustomBox";
import Heading from "../../Shared/Heading";

interface Probs {}

const ProjectsList = (probs: Probs) => {
  return (
    <CustomBox>
      <CustomGridPage>
        <Heading white="PROPOSED " red="PROJECTS" />
      </CustomGridPage>
    </CustomBox>
  );
};

export default ProjectsList;
