import React, { useContext } from "react";
import GoogleLogin from "react-google-login";
import { IconButton, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useLoginMutation } from "../../../generated/graphql";
import AuthContext from "../../../Utils/context";
import { RoleAccess } from "../../../Utils/config";

interface Probs {
  btnMessage?: string;
}

const SIPLogin = (probs: Probs) => {
  const [snackbarMessage, setSnackbarMessage] = React.useState<
    string | undefined
  >();

  const { signIn } = useContext(AuthContext)!;

  const [loginMutation, { data, loading, error }] = useLoginMutation();

  React.useEffect(() => {
    if (loading) setSnackbarMessage("Loading...");
    else if (
      error?.message.includes("Invalid user") ||
      (data?.login &&
        !RoleAccess.SIPAddProjectAccess.includes(data?.login.role!))
    ) {
      setSnackbarMessage("Invalid User");
    } else if (error) {
      setSnackbarMessage(error.message);
    } else if (data?.login) {
      setSnackbarMessage("Succesfully Logged In");
      signIn(data.login);
    }
  }, [data, loading, error, signIn]);

  const handleLogin = async (googleData: any) => {
    try {
      await loginMutation({
        variables: {
          loginInputs: {
            token: googleData.tokenId,
          },
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  const handleFailure = (googleData: any) => {
    console.log(googleData);
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
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID!}
        buttonText={probs.btnMessage ? probs.btnMessage : "Log in with Google"}
        onSuccess={handleLogin}
        onFailure={handleFailure}
        cookiePolicy={"single_host_origin"}
        hostedDomain={"smail.iitm.ac.in"}
      />
    </>
  );
};

export default SIPLogin;
