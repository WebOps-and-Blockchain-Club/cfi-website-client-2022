import React from "react";
import { UserRole } from "../../generated/graphql";
import Auth from "../Auth";

interface Probs {}

const SIPAuth = (probs: Probs) => {
  return <Auth roles={[UserRole.User]} isSmailOnly={true} />;
};

export default SIPAuth;
