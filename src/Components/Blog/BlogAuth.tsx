import React from "react";
import { UserRole } from "../../generated/graphql";
import Auth from "../Auth";

interface Probs {}

const BlogAuth = (probs: Probs) => {
  return <Auth roles={[UserRole.User]} isSmailOnly={true} />;
};

export default BlogAuth;
