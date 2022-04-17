import React from "react";
import { useContext } from "react";
import { useLogoutMutation } from "../../generated/graphql";
import AuthContext from "../../Utils/context";
import { NavbarButton } from "../Shared/Navbar";
import { IconButton, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Logout = () => {
  const [snackbarMessage, setSnackbarMessage] = React.useState<
    string | undefined
  >();
  const { signOut } = useContext(AuthContext)!;
  const [logoutMutation, { data, loading, error }] = useLogoutMutation();

  React.useEffect(() => {
    if (loading) setSnackbarMessage("Loading...");
    else if (error) {
      setSnackbarMessage(error.message);
    } else if (data?.logout) {
      setSnackbarMessage("Succesfully Logged Out");
      signOut();
    }
  }, [data, loading, error, signOut]);

  const logoutHandler = async () => {
    try {
      await logoutMutation();
    } catch (e) {
      console.log(e);
    }
  };

  const handleClose = () => {
    setSnackbarMessage(undefined);
  };

  return (
    <>
      <Snackbar
        open={!!snackbarMessage}
        autoHideDuration={loading ? null : 6000}
        onClose={handleClose}
        message={snackbarMessage}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
      <NavbarButton name={"LOGOUT"} handleClick={logoutHandler} />
    </>
  );
};

export default Logout;
