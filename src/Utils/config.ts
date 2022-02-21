import { UserRole } from "../generated/graphql";

export const RoleAccess = {
  Global: [UserRole.Admin, UserRole.Dev, UserRole.Member, UserRole.User],
  BlogAccess: [UserRole.Admin, UserRole.Dev, UserRole.Member],
};
