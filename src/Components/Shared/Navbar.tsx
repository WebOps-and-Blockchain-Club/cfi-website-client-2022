import { Grid, AppBar, Tab, Tabs } from "@mui/material";
import React from "react";
import MyStyledTabs from "../../Widgets/StyledTab";

interface Props {}

const Navbar = (props: Props) => {
  return (
    <Grid container>
      <AppBar position="static">
        <MyStyledTabs />
      </AppBar>
    </Grid>
  );
};

export default Navbar;
