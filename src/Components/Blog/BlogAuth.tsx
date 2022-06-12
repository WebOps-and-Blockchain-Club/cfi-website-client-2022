import React from "react";
import { LoginType, UserRole } from "../../generated/graphql";
import Auth from "../Auth";

interface Probs {}

const BlogAuth = (probs: Probs) => {
  return (
    <Auth
      roles={[UserRole.User]}
      isSmailOnly={true}
      loginType={LoginType.Blog}
    />
  );
};

export default BlogAuth;
