import HomeLanding1W from "../Images/Home/Landing1W.jpg";
import HomeLanding2 from "../Images/Home/Landing2.jpg";
import HomeLanding3W from "../Images/Home/Landing3W.jpg";
import HomeLanding4W from "../Images/Home/Landing4.jpg";

import HomeLanding1P from "../Images/Home/Landing1P.jpg";
import HomeLanding3P from "../Images/Home/Landing3P.jpg";
import HomeLanding4P from "../Images/Home/Landing4.jpg";

import Highlights1 from "../Images/Home/Highlights1.png";

import CurrentProjectsIcon from "../Icons/Stats/CurrentProjects.svg";
import PeopleIcon from "../Icons/Stats/People.svg";
import FootfallIcon from "../Icons/Stats/Footfall.svg";
import StartupsIcon from "../Icons/Stats/Startups.svg";
import AwardsIcon from "../Icons/Stats/Awards.svg";
import CollaborationIcon from "../Icons/Stats/Collab.svg";
import RecordsIcon from "../Icons/Stats/Record.svg";
import IndustryProjectsIcon from "../Icons/Stats/IndustryProjects.svg";

import PrintingLogo from "../Images/ClubLogo/3DPrintingLogo.png";
import AeroLogo from "../Images/ClubLogo/AeroLogo(withoutName).png";
import AnalyticsLogo from "../Images/ClubLogo/AnalyticsLogo(withoutName).png";
import CVILogo from "../Images/ClubLogo/CVILogo.png";
import ElectronicsLogo from "../Images/ClubLogo/ElectronicsLogo.png";
import HorizonLogo from "../Images/ClubLogo/HorizonWhiteLogo(withoutName).png";
import iBotLogo from "../Images/ClubLogo/iBOTLogo.png";
import iGEMLogo from "../Images/ClubLogo/iGEMLogo.png";
import ProductDesignLogo from "../Images/ClubLogo/ProductDesignLogo.png";
import ProgrammingLogo from "../Images/ClubLogo/ProgrammingLogo.png";
import SahaayLogo from "../Images/ClubLogo/SahaayBlackLogo.png";
import EnvisageLogo from "../Images/ClubLogo/EnvisageLogo.png";
import WebOpsAndBlockchainLogo from "../Images/ClubLogo/WebopsandBlockchainLogo(withoutName).png";

import RaftarLogo from "../../Assets/Images/CompetitionTeamLogo/Raftar.png";
import AbhiyaanLogo from "../../Assets/Images/CompetitionTeamLogo/Abhiyaan.png";
import AvishkarLogo from "../../Assets/Images/CompetitionTeamLogo/Avishkar.png";
import AnveshakLogo from "../../Assets/Images/CompetitionTeamLogo/Anveshak.png";

import GalleryImage1 from "../../Assets/Images/Home/Gallery1.jpg";
import GalleryImage2 from "../../Assets/Images/Home/Gallery2.jpg";
import GalleryImage3 from "../../Assets/Images/Home/Gallery3.jpg";
import GalleryImage4 from "../../Assets/Images/Home/Gallery4.jpg";
import GalleryImage5 from "../../Assets/Images/Home/Gallery5.jpg";
import GalleryImage6 from "../../Assets/Images/Home/Gallery6.jpg";
import GalleryImage7 from "../../Assets/Images/Home/Gallery7.jpg";
import GalleryImage8 from "../../Assets/Images/Home/Gallery8.jpg";
import { AchievementsData } from "./Achievements";

export const CarouselData = [
  {
    imageW: HomeLanding1W,
    imageP: HomeLanding1P,
    linear: "India’s largest 24x7 student-run innovation lab",
  },
  {
    imageW: HomeLanding2,
    imageP: HomeLanding2,
    linear: "A community of young innovators and thinkers",
  },
  {
    imageW: HomeLanding3W,
    imageP: HomeLanding3P,
    linear: "Fuelled by the spirit of innovation",
  },
  {
    imageW: HomeLanding4W,
    imageP: HomeLanding4P,
    linear: "Revolutionizing tech and innovation",
  },
];

export const HighlightsData = () => {
  const data: any[] = [
    {
      url: "/open-house",
      image: Highlights1,
      title: "CFI Open House, 2022 - 13th edition of flagship event",
    },
  ];
  AchievementsData.map((_data) =>
    data.push(
      {
        url: `/achievements#${_data.id}`,
        image: _data.image,
        title: _data.title,
      },
    )
  );

  return data;
};

export const CompetitionTeamList = [
  {
    name: "Raftar Formula Racing",
    logo: RaftarLogo,
    desc: "Recognised for their passion, diligence and exceptional achievements, Team Raftar is one of the most acknowledged teams in the institute. The team consists of 50 students from diverse disciplines. Starting off on a small scale, the team has now evolved into one of the most respected Formula student racing teams in the country with consecutive achievements in the prestigious Formula Bharat competition. Despite the pandemic, they placed second Overall in the Formula Student Electric Vehicle Concept challenge (FSEV-2021) being dominant in categories of Procurement strategies, Engineering Design and software integration. The development of an electric powertrain marked the team’s significant transition from the manufacturing and testing side of things to the designing and planning aspect of the car during the pandemic.",
    link: "/competition-teams/raftar-formula-racing",
  },
  {
    name: "Team Abhiyaan",
    logo: AbhiyaanLogo,
    desc: "Team Abhiyaan is a dedicated group of 45 IIT Madras multidisciplinary students devoted to developing intelligent, durable, precise, and secure ground navigation systems. The Team is attempting to build a ground vehicle that can navigate independently using GPS waypoints as part of a mission to create efficient and safe transportation alternatives.It finished 10th overall, and 5th in the design competition among 36 registered international teams in the 26th Intelligent Ground Vehicle Competition (IGVC) organized at Oakland University in June 2018.The Team claimed first place in the Social Media Contest in the Indy Autonomous Challenge 2020-21 and was the only one of the two Asia n Teams that  qualified for  the finals of the Simulation round.",
    link: "/competition-teams/team-abhiyaan",
  },
  {
    name: "Team Anveshak",
    logo: AnveshakLogo,
    desc: "Team Anveshak is a group of 30+ enthusiastic IIT Madras undergraduates from various engineering disciplines developing semi-autonomous vehicles capable of traversing extreme terrains and aiding scientific exploration. The team has developed massively to become winners of the Indian Rover Challenge(IRC) 2019 and is currently placed in the top 12 in the University Rover Challenge(URC) 2019.In the long run, the Team hopes to work with India's top research organizations, such as the Indian Space Research Organization (ISRO) and the Defense Research and Development Organization (DRDO), to develop truly world-class technologies for everyone.",
    link: "/competition-teams/team-anveshak",
  },
  {
    name: "Team Avishkar Hyperloop",
    logo: AvishkarLogo,
    desc: "It was started as a simple student project at the CFI. The team consisting of 40 highly enthusiastic students, is working on a project to develop a radically new mode of transport, The Hyperloop. Hyperloop is, described as a sealed tube or system of tubes with low air pressure through which a pod may travel substantially free of air resistance or friction.The team was among the 47 teams in the world qualified for the preliminary design round of the same.  Recently it was awarded the Most Scalable Design Award by Zeleros Hyperloop at the European Hyperloop Week (EHW)’21. They were also nominated among the top 5 teams around the globe in mechanical, levitation, propulsion and complete pod award categories at the EHW ’21.",
    link: "/competition-teams/team-avishkar-hyperloop",
  },
];

export const ClubList = [
  {
    name: "3D Printing Club",
    logo: PrintingLogo,
    link: "/clubs/3d-printing-club",
  },
  {
    name: "Aero Club",
    logo: AeroLogo,
    link: "/clubs/aero-club",
  },
  {
    name: "Analytics Club",
    logo: AnalyticsLogo,
    link: "/clubs/analytics-club",
  },
  {
    name: "Computer Vision & Intelligence Club",
    logo: CVILogo,
    link: "/clubs/cvi-club",
  },
  {
    name: "Electronics Club",
    logo: ElectronicsLogo,
    link: "/clubs/electronics-club",
  },
  {
    name: "Horizon",
    logo: HorizonLogo,
    link: "/clubs/horizon",
  },
  {
    name: "iBot Club",
    logo: iBotLogo,
    link: "/clubs/ibot-club",
  },
  {
    name: "iGEM",
    logo: iGEMLogo,
    link: "/clubs/igem",
  },
  {
    name: "Product Design Club",
    logo: ProductDesignLogo,
    link: "/clubs/product-design-club",
  },
  {
    name: "Programming Club",
    logo: ProgrammingLogo,
    link: "/clubs/programming-club",
  },
  {
    name: "Team Sahaay",
    logo: SahaayLogo,
    link: "/clubs/team-sahaay",
  },
  {
    name: "Team Envisage",
    logo: EnvisageLogo,
    link: "/clubs/team-envisage",
  },
  {
    name: "Webops and Blockchain Club",
    logo: WebOpsAndBlockchainLogo,
    link: "/clubs/webops-and-blockchain-club",
  },
];

export const AboutCFIOneLinear =
  "‘‘Walk in with an idea, walk out with a product.’’";

export const AboutCFI = `The Centre for Innovation (CFI) was established on the premise that
                         innovation emerges through community interaction and the freedom to
                         learn and experiment. Constituted in 2008, with the help of funds
                         raised by the class of 1981, this unique 24/7 student lab is located
                         at the New Academic Complex in the heart of campus. After almost a
                         decade of the team's zeal and passion, combined with a comprehensive
                         inventory, ample workspace, guidance from faculty and students, CFI is
                         a house to 13 clubs, 4 competition teams and counting. These clubs'
                         interests are spread over a wide spectrum primarily fostering
                         innovation and invention in technology, with a focus on technologies
                         aimed at contributing positively to the environment and to the
                         society. Several CFI projects have been patented and have received
                         national recognition. The team frequently represents IIT Madras in
                         national and international competitions. It also constitutes an
                         integral part of IIT Madras' entrepreneurial culture, with many CFI
                         projects turning into startups.`;

export const CFIStats = [
  {
    title: "Current Projects in CFI",
    number: "60+",
    icon: CurrentProjectsIcon,
  },
  {
    title: "People Involved in CFI",
    number: "740+",
    icon: PeopleIcon,
  },
  {
    title: "Average Footfall Per Day",
    number: "70",
    icon: FootfallIcon,
  },
  {
    title: "Startups from CFI",
    number: "15+",
    icon: StartupsIcon,
  },
  {
    title: "National & International Awards",
    number: "27",
    icon: AwardsIcon,
  },
  {
    title: "Collaborations with NGOs",
    number: "10",
    icon: CollaborationIcon,
  },
  {
    title: "World Records Set by CFI",
    number: "4",
    icon: RecordsIcon,
  },
  {
    title: "Industry Projects in CFI",
    number: "15+",
    icon: IndustryProjectsIcon,
  },
];

export const CFIClubs = `Clubs at CFI are its functioning organs. Divided based on interest, each club represents a student group highly enthusiastic in that specific field. Knowledge transfer, resulting in reducing the learning period is the strength of clubs at CFI. \n \n CFI is now home to 13 clubs`;

export const CompetitionTeams =
  "CFI’s Competition teams are groups of highly motivated individuals who work round the clock to meet challenging deadlines of various competitions. Over the years, our teams have bagged prizes both at the national and international level.";

export const HomeGalleryData = [
  {
    image: GalleryImage1,
  },
  {
    image: GalleryImage2,
  },
  {
    image: GalleryImage3,
  },
  {
    image: GalleryImage4,
  },
  {
    image: GalleryImage5,
  },
  {
    image: GalleryImage6,
  },
  {
    image: GalleryImage7,
  },
  {
    image: GalleryImage8,
  },
];
