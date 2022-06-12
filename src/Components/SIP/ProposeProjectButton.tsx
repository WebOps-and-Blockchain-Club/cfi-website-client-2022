import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserRole } from "../../generated/graphql";
import AuthContext from "../../Utils/context";
import ErrorDialog from "../Shared/Dialog/ErrorDialog";
import { NavbarButton } from "../Shared/Navbar";

interface Probs {}

const ProposeProjectButton = (probs: Probs) => {
  const { state } = useContext(AuthContext)!;
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = React.useState<string | undefined>();

  const handleClick = () => {
    if (state?.user?.role === UserRole.User) navigate("/sip/projects/add");
    else setErrorMessage("Login to Continue");
  };

  return (
    <>
      {errorMessage && (
        <ErrorDialog
          message={errorMessage}
          handleClose={() => setErrorMessage(undefined)}
        />
      )}
      <NavbarButton name="PROPOSE PROJECT" handleClick={handleClick} />
    </>
  );
};

export default ProposeProjectButton;
