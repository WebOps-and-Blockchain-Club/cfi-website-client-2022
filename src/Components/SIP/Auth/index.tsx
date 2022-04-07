import React, { useContext } from "react";
import { UserRole } from "../../../generated/graphql";
import AuthContext from "../../../Utils/context";
import Logout from "../../Shared/Logout";
import SIPLogin from "./SIPLogin";

interface Probs {}

const SIPAuth = (probs: Probs) => {
  const { state } = useContext(AuthContext)!;
  if (state?.user?.role === UserRole.User) return <Logout />;
  return <SIPLogin />;
};

export default SIPAuth;
