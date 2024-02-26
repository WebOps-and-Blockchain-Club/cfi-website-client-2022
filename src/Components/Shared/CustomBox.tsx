import { Grid } from "@mui/material";
import * as React from "react";
import { useLocation } from "react-router-dom";
import bg from "../../Assets/Images/Particles.svg";
import { useLogoutMutation, UserRole } from "../../generated/graphql";
import { RoleAccess } from "../../Utils/config";
import AuthContext from "../../Utils/context";
import Footer from "./Footer";
import Header from "./Navbar";

interface Props {
  children:
  | React.ReactChild[]
  | React.ReactChildren[]
  | React.ReactChild
  | React.ReactNode;
}

const CustomBox = (props: Props) => {
  const { state } = React.useContext(AuthContext)!;
  const location = useLocation();

  const [LogoutMutation] = useLogoutMutation();

  const logOut = async () => {
    try {
      await LogoutMutation();
    } catch (e) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    if (state.user) {
      if (
        location.pathname.includes("admin") &&
        !RoleAccess.BlogAdminAccess.includes(state.user.role)
      )
        logOut();
      else if (
        ((location.pathname.includes("blog") &&
          !location.pathname.includes("admin")) ||
          location.pathname.includes("sip")) &&
        state.user.role !== UserRole.User
      )
        logOut();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, state.user]);

  return (
    <Grid
      style={{
        backgroundColor: "#030303",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        width: "100vw",
        maxWidth: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      sx={{ p: 0 }}
      minHeight="100vh"
    >
      <Header />
      <>
        {props.children}
      </>
      <Footer />
    </Grid>
  );
};

const CustomGridPage = (props: Props) => {
  return (
    <Grid
      container
      px={{ xs: 4, sm: 7, md: 10, lg: 14, xl: 18 }}
      pt={{ xs: 10, sm: 12, md: 14, lg: 16 }}
      pb={{ xs: 2, sm: 6, md: 10, lg: 14 }}
      direction="column"
      justifyItems="center"
      alignItems="center"
      sx={{ p: 0 }}
    >
      <>
        {props.children}
      </>
    </Grid>
  );
};

const CustomGridSection = (props: Props) => {
  return (
    <Grid
      item
      container
      direction="column"
      alignItems="center"
      sx={{ width: "100%" }}
      px={{ xs: 4, sm: 7, md: 10, lg: 14, xl: 18 }}
      py={{ xs: 8, sm: 10, md: 12, lg: 12 }}
    >
      <>
        {props.children}
      </>
    </Grid>
  );
};

export default CustomBox;
export { CustomGridPage, CustomGridSection };
