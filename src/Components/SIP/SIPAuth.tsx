import React from "react";
import { LoginType, UserRole } from "../../generated/graphql";
import Auth from "../Auth";

interface Probs { }

const SIPAuth = (probs: Probs) => {
  return (
    <Auth
      roles={[UserRole.User]}
      isSmailOnly={true}
      loginType={LoginType.Sip}
    />
  );
};

export default SIPAuth;
