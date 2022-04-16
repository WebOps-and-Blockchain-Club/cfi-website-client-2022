import React, { useContext } from "react";
import GoogleLogin from "react-google-login";
import CustomBox, { CustomGridPage } from "../../Shared/CustomBox";
import { useLoginMutation } from "../../../generated/graphql";
import AuthContext from "../../../Utils/context";
import { RoleAccess } from "../../../Utils/config";
import Loading from "../../Shared/Dialog/Loading";
import ErrorDialog from "../../Shared/Dialog/ErrorDialog";
import SuccessDialog from "../../Shared/Dialog/SuccessDialog";

interface Probs {}

const AdminLogin = (probs: Probs) => {
  const [errorMessage, setErrorMessage] = React.useState<string | undefined>();

  const { signIn } = useContext(AuthContext)!;

  const [loginMutation, { data, loading, error }] = useLoginMutation();

  React.useEffect(() => {
    if (
      error?.message.includes("Invalid user") ||
      (data?.login && !RoleAccess.Admin.includes(data?.login.role!))
    ) {
      setErrorMessage("Invalid User");
    } else if (error) {
      setErrorMessage(error.message);
    }
  }, [data?.login, error]);

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
    <CustomBox>
      <CustomGridPage>
        <Loading loading={!!loading} />
        <ErrorDialog message={errorMessage} />
        {data?.login && !errorMessage && (
          <SuccessDialog
            message="Login Successfully"
            callBack={loginCallback}
          />
        )}
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID!}
          buttonText="Log in with Google"
          onSuccess={handleLogin}
          onFailure={handleFailure}
          cookiePolicy={"single_host_origin"}
          prompt={"consent"}
        />
      </CustomGridPage>
    </CustomBox>
  );
};

export default AdminLogin;
