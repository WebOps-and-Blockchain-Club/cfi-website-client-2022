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
        <Grid color={"red"}>{state.user.email}</Grid>
        <Grid color={"red"}>{state.user.name}</Grid>
        <Grid color={"red"}>{state.user.role}</Grid>
      </CustomGridPage>
    </CustomBox>
  );
};

export default Admin;
