import React, { useContext } from "react";
import { UserRole } from "../../generated/graphql";
import AuthContext from "../../Utils/context";
import Logout from "./Logout";
import Login from "./Login";

interface Probs {
  btnMessage?: string;
  roles?: UserRole[];
  isSmailOnly?: boolean;
}

const Auth = (probs: Probs) => {
  const { state } = useContext(AuthContext)!;
  if (probs.roles?.includes(state?.user?.role)) return <Logout />;
  return <Login {...probs} />;
};

export default Auth;
