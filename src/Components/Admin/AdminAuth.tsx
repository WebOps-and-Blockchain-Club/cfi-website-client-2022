import React from "react";
import { UserRole } from "../../generated/graphql";
import Auth from "../Auth";
import CustomBox, { CustomGridPage } from "../Shared/CustomBox";

interface Probs {}

const AdminAuth = (probs: Probs) => {
  return <Auth roles={[UserRole.Admin, UserRole.Dev, UserRole.Member]} />;
};

const AdminLoginPage = () => {
  return (
    <CustomBox>
      <CustomGridPage>
        <AdminAuth />
      </CustomGridPage>
    </CustomBox>
  );
};

export default AdminAuth;
export { AdminLoginPage };
