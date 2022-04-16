import { UserRole } from "../generated/graphql";

export const RoleAccess = {
  Global: [UserRole.Admin, UserRole.Dev, UserRole.Member, UserRole.User],
  Admin: [UserRole.Admin, UserRole.Dev],
  CreateBlogAccess: [UserRole.User],
  SIPAddProjectAccess: [UserRole.User],
};
