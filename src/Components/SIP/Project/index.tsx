import React from "react";
import { useParams } from "react-router-dom";
import CustomBox, { CustomGridPage } from "../../Shared/CustomBox";
import Heading from "../../Shared/Heading";

interface Probs {}

const Project = (probs: Probs) => {
  const { id } = useParams<{ id: string }>();
  console.log(id);
  return (
    <CustomBox>
      <CustomGridPage>
        <Heading white="" red="PROJECT" />
      </CustomGridPage>
    </CustomBox>
  );
};

export default Project;
