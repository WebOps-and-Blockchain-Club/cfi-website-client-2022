import Logout from "../../Components/Shared/Logout";
import { UserRole } from "../../generated/graphql";
import { RoleAccess } from "../../Utils/config";
import { ClubList, CompetitionTeamList } from "./Home";

export const NavbarItems = [
  {
    name: "HOME",
    link: "/",
  },
  {
    name: "COMMUNITY",
    subItems: [
      {
        name: "CLUBS",
        subItems: ClubList,
      },
      {
        name: "COMPETITION TEAMS",
        subItems: CompetitionTeamList,
      },
      {
        name: "MANAGERIAL TEAM",
        link: "/managerial-team",
      },
    ],
  },
  {
    name: "ACHIEVEMENTS",
    link: "/achievements",
  },
  {
    name: "MEDIA",
    link: "/media",
  },
  {
    name: "ALUMNI",
    link: "/alumni",
  },
  {
    name: "ABOUT US",
    link: "/about-us",
  },
  {
    name: "CONTACT US",
    link: "/contact-us",
  },
];

export const NavbarMobileView = () => {
  const list: any[] = [];

  // eslint-disable-next-line array-callback-return
  NavbarItems.map((_item) => {
    if (_item.subItems) {
      _item.subItems.map((_subItem) => list.push(_subItem));
    } else list.push(_item);
  });

  return list;
};

export const NavbarAdminList = (role: UserRole) => {
  const navList = [
    {
      name: "ADD BLOG",
      link: "/admin/blog/new",
      role: RoleAccess.BlogAccess,
    },
    {
      name: "BLOG",
      link: "/admin/blog",
      role: RoleAccess.BlogAccess,
    },
    {
      name: "LOGOUT",
      component: Logout,
      role: RoleAccess.BlogAccess,
    },
  ];
  return navList.filter((nav) => nav.role.includes(role));
};
