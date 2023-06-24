import { UserRole } from "../generated/graphql";

export const RoleAccess = {
  Global: [UserRole.Admin, UserRole.Dev, UserRole.Member, UserRole.User],
  Admin: [UserRole.Admin, UserRole.Dev],
  CreateBlogAccess: [UserRole.User],
  BlogAdminAccess: [UserRole.Admin, UserRole.Dev, UserRole.Member],
  SIPAddProjectAccess: [UserRole.User],
  SummerSchoolAccess: [UserRole.User],
};
