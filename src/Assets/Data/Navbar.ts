import { ClubList, CompetitionTeamList } from "./Home";

export const NavbarItems = [
  {
    name: "HOME",
    link: "/",
  },
  {
    name: "COMMUNITY",
    subItems: [...ClubList, ...CompetitionTeamList],
  },
  {
    name: "ACHIVEMENTS",
    link: "/achivements",
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
