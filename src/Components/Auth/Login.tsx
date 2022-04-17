import React, { useContext } from "react";
import GoogleLogin from "react-google-login";
import { useLoginMutation, UserRole } from "../../generated/graphql";
import AuthContext from "../../Utils/context";
import Loading from "../Shared/Dialog/Loading";
import ErrorDialog from "../Shared/Dialog/ErrorDialog";
import SuccessDialog from "../Shared/Dialog/SuccessDialog";

interface Probs {
  btnMessage?: string;
  roles?: UserRole[];
  isSmailOnly?: boolean;
}

const Login = (probs: Probs) => {
  const { signIn } = useContext(AuthContext)!;

  const [errorMessage, setErrorMessage] = React.useState<string>();

  const [loginMutation, { data, loading, error }] = useLoginMutation();

  React.useEffect(() => {
    if (
      error?.message.includes("Invalid user") ||
      (data?.login && probs.roles && !probs.roles?.includes(data?.login.role!))
    ) {
      setErrorMessage("Invalid User");
    } else if (error) {
      setErrorMessage(error.message);
    }
  }, [data, loading, error, signIn, probs.roles]);

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

  const loginCallback = () => signIn(data?.login!);

  return (
    <>
      <Loading loading={!!loading} />
      <ErrorDialog message={errorMessage} />
      {data?.login && (
        <SuccessDialog message="Login Successfully" callBack={loginCallback} />
      )}
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID!}
        buttonText={probs.btnMessage ? probs.btnMessage : "Log in with Google"}
        onSuccess={handleLogin}
        onFailure={handleFailure}
        cookiePolicy={"single_host_origin"}
        hostedDomain={probs.isSmailOnly ? "smail.iitm.ac.in" : undefined}
        prompt={"consent"}
      />
    </>
  );
};

export default Login;
