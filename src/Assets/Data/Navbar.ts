import CreateBlogButton from "../../Components/Blog/CreateBlog/CreateBlogButton";
import SIPAuth from "../../Components/SIP/SIPAuth";
import ProposeProjectButton from "../../Components/SIP/ProposeProjectButton";
import { UserRole } from "../../generated/graphql";
import { RoleAccess } from "../../Utils/config";
import { ClubList, CompetitionTeamList } from "./Home";
import BlogAuth from "../../Components/Blog/BlogAuth";
import AdminAuth from "../../Components/Admin/AdminAuth";
import RegisterButton from "../../Components/SummerSchool/Register/RegisterButton";
import SummerSchoolAuth from "../../Components/SummerSchool/SummerSchoolAuth";
import ProfileButton from "../../Components/SummerSchool/ProfileButton";

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
  // {
  //   name: "SIP'23",
  //   link: "/sip",
  //   newTab: true,
  // },
  {
    name: "Summer School '23",
    link: "/summer-school",
    newTab: true,
  },
  {
    name: "BLOGS",
    link: "/blog",
    newTab: true,
    // highlight: true,
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

export const NavbarBlogList = (role: UserRole) => {
  if (role && RoleAccess.CreateBlogAccess.includes(role))
    return [
      {
        name: "BLOG",
        link: "/blog",
      },
      {
        component: CreateBlogButton,
      },
      {
        name: "MY BLOG",
        link: "/blog/my",
      },
      {
        component: BlogAuth,
      },
    ];
  else
    return [
      {
        name: "BLOG",
        link: "/blog",
      },
      {
        component: CreateBlogButton,
      },
      {
        component: BlogAuth,
      },
    ];
};

export const NavbarADMINList = () => {
  return [
    {
      name: "HOME",
      link: "/admin",
    },
    {
      name: "SUMMER SCHOOL",
      link: "/admin/summer-school",
    },
    {
      name: "BLOG",
      link: "/admin/blog",
    },
    {
      name: "CLUBS",
      link: "/admin/addclub",
    },
    {
      component: AdminAuth,
    },
  ];
};

export const NavbarSIPList = () => {
  return [
    {
      name: "HOME",
      link: "/sip",
    },
    // {
    //   component: ProposeProjectButton,
    // },
    {
      name: "PROJECTS",
      link: "/sip/projects",
    },
    {
      name: "FAQS",
      link: "/sip/faqs",
    },
    {
      component: SIPAuth,
    },
  ];
};

export const NavbarSummerSchoolList = () => {
  return [
    {
      name: "HOME",
      link: "/summer-school",
    },
    // {
    //   component: RegisterButton,
    // },
    {
      component: ProfileButton,
    },
    {
      component: SummerSchoolAuth,
    },
  ];
};
