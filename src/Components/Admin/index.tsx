import React, { useContext } from "react";
import CustomBox, { CustomGridPage } from "../Shared/CustomBox";
import { Grid } from "@mui/material";
import AuthContext from "../../Utils/context";

interface Probs {}

const Admin = (probs: Probs) => {
  const { state } = useContext(AuthContext)!;
  return (
    <CustomBox>
      <CustomGridPage>
        <Grid color={"red"}>{state.email}</Grid>
        <Grid color={"red"}>{state.name}</Grid>
        <Grid color={"red"}>{state.role}</Grid>
      </CustomGridPage>
    </CustomBox>
  );
};

export default Admin;
