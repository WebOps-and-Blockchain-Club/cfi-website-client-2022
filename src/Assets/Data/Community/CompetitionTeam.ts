import { ITeams } from "../../../Types";

// LOGO
import RaftarLogo from "../../../Assets/Images/CompetitionTeamLogo/Raftar.png";
import AbhiyaanLogo from "../../../Assets/Images/CompetitionTeamLogo/Abhiyaan.png";
import AvishkarLogo from "../../../Assets/Images/CompetitionTeamLogo/Avishkar(withoutName).png";
import AnveshakLogo from "../../../Assets/Images/CompetitionTeamLogo/Anveshak.png";
import AnveshakLogoM from "../../../Assets/Images/CompetitionTeamLogo/Anveshak(withoutName).png";

// TEAM HEADS IMAGE
import RaftarHead1 from "../../Images/ContactUs/CompetitionTeam/Raftar_Karthik.webp";
import RaftarHead2 from "../../Images/ContactUs/CompetitionTeam/Raftar_Parth.webp";
import AbhiyaanHead1 from "../../Images/ContactUs/CompetitionTeam/Abhiyaan_Shashank.png";
import AbhiyaanHead2 from "../../Images/ContactUs/CompetitionTeam/Abhiyaan_Amit.png";
import AvishkarHead1 from "../../Images/ContactUs/CompetitionTeam/Avishkar_Bharat.png";
import AvishkarHead2 from "../../Images/ContactUs/CompetitionTeam/Avishkar_Yash.png";
import AvishkarHead3 from "../../Images/ContactUs/CompetitionTeam/Avishkar_Vibhor.png";
import AnveshakHead1 from "../../Images/ContactUs/CompetitionTeam/Anveshak_Arun.png";
import AnveshakHead2 from "../../Images/ContactUs/CompetitionTeam/Anveshak_Karthik.png";

// RAFTAR
import RaftarLanding from "../../Images/Community/CompetitionTeam/Raftar/Landing.jpg";

import RaftarAchievements1 from "../../Images/Community/CompetitionTeam/Raftar/Achievements1.jpg";
import RaftarAchievements2 from "../../Images/Community/CompetitionTeam/Raftar/Achievements2.jpg";
import RaftarAchievements3 from "../../Images/Community/CompetitionTeam/Raftar/Achievements3.jpg";
import RaftarAchievements4 from "../../Images/Community/CompetitionTeam/Raftar/Achievements4.jpg";

import RaftarGallery1 from "../../Images/Community/CompetitionTeam/Raftar/Gallery1.jpg";
import RaftarGallery2 from "../../Images/Community/CompetitionTeam/Raftar/Gallery2.jpg";
import RaftarGallery3 from "../../Images/Community/CompetitionTeam/Raftar/Gallery3.jpg";
import RaftarGallery4 from "../../Images/Community/CompetitionTeam/Raftar/Gallery4.jpg";
import RaftarGallery5 from "../../Images/Community/CompetitionTeam/Raftar/Gallery5.jpg";
import RaftarGallery6 from "../../Images/Community/CompetitionTeam/Raftar/Gallery6.jpg";

// ABHIYAAN
import AbhiyaanLanding from "../../Images/Community/CompetitionTeam/Abhiyaan/Landing.jpg";

import AbhiyaanGallery1 from "../../Images/Community/CompetitionTeam/Abhiyaan/Gallery1.jpg";
import AbhiyaanGallery2 from "../../Images/Community/CompetitionTeam/Abhiyaan/Gallery2.jpg";
import AbhiyaanGallery3 from "../../Images/Community/CompetitionTeam/Abhiyaan/Gallery3.jpg";
import AbhiyaanGallery4 from "../../Images/Community/CompetitionTeam/Abhiyaan/Gallery4.jpg";
import AbhiyaanGallery5 from "../../Images/Community/CompetitionTeam/Abhiyaan/Gallery5.jpg";
import AbhiyaanGallery6 from "../../Images/Community/CompetitionTeam/Abhiyaan/Gallery6.jpg";
import AbhiyaanGallery7 from "../../Images/Community/CompetitionTeam/Abhiyaan/Gallery7.jpg";

// ANVESHAK
import AnveshakLanding from "../../Images/Community/CompetitionTeam/Anveshak/Landing.jpg";

import AnveshakGallery1 from "../../Images/Community/CompetitionTeam/Anveshak/Gallery1.jpg";
import AnveshakGallery2 from "../../Images/Community/CompetitionTeam/Anveshak/Gallery2.jpg";
import AnveshakGallery3 from "../../Images/Community/CompetitionTeam/Anveshak/Gallery3.jpg";
import AnveshakGallery4 from "../../Images/Community/CompetitionTeam/Anveshak/Gallery4.jpg";
import AnveshakGallery5 from "../../Images/Community/CompetitionTeam/Anveshak/Gallery5.jpg";
import AnveshakGallery6 from "../../Images/Community/CompetitionTeam/Anveshak/Gallery6.jpg";

// AVISHKAR
import AvishkarLanding from "../../Images/Community/CompetitionTeam/Avishkar/Landing.jpg";

import AvishkarAchievements1a from "../../Images/Community/CompetitionTeam/Avishkar/Achievements1a.jpg";
import AvishkarAchievements1b from "../../Images/Community/CompetitionTeam/Avishkar/Achievements1b.jpg";
import AvishkarAchievements1c from "../../Images/Community/CompetitionTeam/Avishkar/Achievements1c.jpg";
import AvishkarAchievements2a from "../../Images/Community/CompetitionTeam/Avishkar/Achievements2a.png";
import AvishkarAchievements2b from "../../Images/Community/CompetitionTeam/Avishkar/Achievements2b.jpg";

import AvishkarProject1 from "../../Images/Community/CompetitionTeam/Avishkar/Project1.jpg";
import AvishkarProject2 from "../../Images/Community/CompetitionTeam/Avishkar/Project2.jpg";

import AvishkarGallery1 from "../../Images/Community/CompetitionTeam/Avishkar/Gallery1.jpg";
import AvishkarGallery2 from "../../Images/Community/CompetitionTeam/Avishkar/Gallery2.jpg";
import AvishkarGallery3 from "../../Images/Community/CompetitionTeam/Avishkar/Gallery3.jpg";
import AvishkarGallery4 from "../../Images/Community/CompetitionTeam/Avishkar/Gallery4.jpg";
import AvishkarGallery5 from "../../Images/Community/CompetitionTeam/Avishkar/Gallery5.jpg";
import AvishkarGallery6 from "../../Images/Community/CompetitionTeam/Avishkar/Gallery6.jpg";
import AvishkarGallery7 from "../../Images/Community/CompetitionTeam/Avishkar/Gallery7.jpg";
import AvishkarGallery8 from "../../Images/Community/CompetitionTeam/Avishkar/Gallery8.jpg";

export const Teams: ITeams = {
  "raftar-formula-racing": {
    name: "Raftar Formula ##Racing",
    logo: RaftarLogo,
    landing: RaftarLanding,
    description:
      "Raftar is a team of 50 students from different disciplines in IIT Madras with a shared passion for automotive engineering and motorsports. Every year, the team takes up the challenge of building a swift Formula Student race car and works to develop the most competent lot of engineers in the nation. Working at the Centre For Innovation, IIT Madras, Raftar aims to become a globally competitive team and promote the Formula Student culture in India. The Raftar formula racing team is recognized as one of the tireless, most dedicated teams at CFI.",
    achievements: [
      {
        description:
          "Formula Bharat is an Indian Formula Student-style engineering design competition in which students from colleges and universities all over the country compete with a life-size formula-style vehicle in areas of engineering design, overall cost, marketability and dynamic performance. In the Formula Bharat Virtuals – 2021 (Electric Category), Team Raftar secured 1st place in the overall championship and the Engineering design Event. They were also placed as winners of the Best Powertrain Design and Best Battery Design.",
        image: RaftarAchievements1,
      },
      {
        description:
          "The purpose of the FSEV Concept Challenge (FSEV 2021) is to provide teams with an opportunity to conceptualise and design a Formula Student Electric Vehicle Powertrain Package. In the  FSEV Challenge – 2021(Electric Category), Team Raftar was successful in securing 2nd place in the Overall Challenge simultaneously winning the 2nd place in Engineering Design and Procurement Strategy.",
        image: RaftarAchievements2,
      },
      {
        description:
          "In the Formula Bharat – 2021 (Combustion Category), Team Raftar unsurprisingly won 1st place in the Overall Championship and the Engineering Design Event. They were also the Winners of the Best CV Powertrain Award by Boschand  Ather Connected Tech Award.",
        image: RaftarAchievements3,
      },
      {
        description:
          "Team Raftar appeared in the Formula Bharat – 2020 (Combustion Category) and won 1st place in the Overall Championship and Engineering Design Event. They successfully placed 1st in the Business Plan Presentation and Fuel Efficiency. Additionally, they achieved Podium Finishes in all dynamic events and broke the record for highest points scored in static events.",
        image: RaftarAchievements4,
      },
    ],
    projects: [
      {
        title: "Shift of Powertrain Unit from ##Combustion to Electric",
        description:
          "Seeing the global transition to electric powertrains, Team Raftar designed their first electric car this year. An electric motor gives higher acceleration and eliminates further complications like a gearbox. This in turn increases the vehicle’s simplicity and efficiency. They plan to participate in national and international formula student engineering competitions with this car.",
      },
    ],
    website: "https://cfi.iitm.ac.in/raftar/",
    gallery: [
      {
        image: RaftarGallery1,
      },
      {
        image: RaftarGallery2,
      },
      {
        image: RaftarGallery3,
      },
      {
        image: RaftarGallery4,
      },
      {
        image: RaftarGallery5,
      },
      {
        image: RaftarGallery6,
      },
    ],
    email: "raftar@smail.iitm.ac.in",
    contacts: [
      {
        name: "Karthik Karumanchi",
        image: RaftarHead1,
        email: "",
        phone: "8754910510",
      },
      {
        name: "Parth Lathi",
        image: RaftarHead2,
        email: "",
        phone: "9619690259",
      },
    ],
  },
  "team-abhiyaan": {
    name: "Team ##Abhiyaan",
    logo: AbhiyaanLogo,
    landing: AbhiyaanLanding,
    description:
      "Team Abhiyaan is an enthusiastic group of multi-disciplinary students of IIT Madras, committed to building intelligent, robust, precise and safe ground navigation systems. The team comprising 45 members is based in Centre for Innovation (CFI), IIT Madras which provides a platform for creative ideas to be realized into ground-breaking product prototypes and revolutionary business models, with mentoring from the industry, faculty and alumni.",
    achievements: [
      {
        description:
          "The team took part in IGVC 2017, 2018, 2019 and returned with a lot of prizes. In 2017 the vehicle was ranked 13th overall and in 2018 it was ranked 10th. In 2019 the team got 2nd in interoperability 6th in design 5th in Autonav and 2nd overall and was awarded the Grand Lescoe Trophy. The team made fully autonomous unmanned ground robotic vehicle must navigate around an outdoor obstacle course under a prescribed time while maintaining certain speed, and remaining within the lane for IGVC Autonav. It also developed an autonomous smart driving cars compatible with current roadways and future intelligent highway systems. It’s capabilities include camera vision systems, lane following, obstacle, and pedestrian avoidance, roadway and parallel parking, road sign understanding, and other traffic functions.  In 2020 it participated in the Indy Autonomous Challenge which took place on the Indianapolis Motor Speedway. The team was one among the 5 Asian teams that qualified the first round and also got ranked the best in the social media contest in both communities and judges’ favourite categories. It also took part in KPIT Sparkle in which 30,000+ teams participated and was one of the 30 finalists.",
      },
    ],
    projects: [
      {
        title: "Project ##MACRo",
        description:
          "Project MACRo (Martian Autonomous Core-sampling Rover) in collaboration with ExTeM research group, IIT Madras. Rover with autonomous drilling unit to collect regolith and core samples from Martian surface. Collaborating with ExTeM (research group at IITM including professors, industry, and international collaborators) for the project",
      },
      {
        title: "ROS ##Software driver",
        description:
          'Developed and released an open-source ROS Software driver for the Septentrio Mosaic X5 GNSS module, bridging the gap between ROS and the state-of-the-art Mosaic technology. \n The driver is actively maintained and contributions are welcome. <br /> <center>GitHub Repository - <a href="https://github.com/Team-Abhiyaan/mosaic_gnss_driver" target="_blank" rel="noopener noreferrer">Link</a></center>',
      },
    ],
    website: "https://www.teamabhiyaan.com/",
    gallery: [
      {
        image: AbhiyaanGallery1,
      },
      {
        image: AbhiyaanGallery2,
      },
      {
        image: AbhiyaanGallery3,
      },
      {
        image: AbhiyaanGallery4,
      },
      {
        image: AbhiyaanGallery5,
      },
      {
        image: AbhiyaanGallery6,
      },
      {
        image: AbhiyaanGallery7,
      },
    ],
    email: "abhiyaan@smail.iitm.ac.in",
    contacts: [
      {
        name: "Shashank M Patil",
        image: AbhiyaanHead1,
        email: "shashankpatil0705@gmail.com",
        phone: "6362748509",
        linkedIn: "https://www.linkedin.com/in/shashank-m-patil/",
      },
      {
        name: "Amit Dodmani",
        image: AbhiyaanHead2,
        email: "amitdodmani4@gmail.com",
        phone: "8147327330",
        linkedIn: "https://www.linkedin.com/in/amit-dodmani-b1a906a4/",
      },
    ],
  },
  "team-anveshak": {
    name: "Team ##Anveshak",
    logo: AnveshakLogo,
    logoM: AnveshakLogoM,
    landing: AnveshakLanding,
    description:
      "We, Team Anveshak, are a team of over 30+ passionate students from IIT Madras who live and breathe robotics. Since our beginnings around early 2016, we have spent countless days and nights building our own remote operated all-terrain rovers, complete with a robotic manipulator and digger. Our team brings together a set of highly dedicated and skilled students working on mechanical design, system architecture and control, outreach and business relations. We also organize educational workshops for students of our institute on different aspects of robotics. The technical knowledge and practical experience the team imparts to its members is unparalleled, nurturing them into effective team players and leaders of industry and research. \n",
    achievements: [
      {
        description:
          "We bagged 1st prize and 5th prize respectively in the years 2019 and 2020 in the Indian Rover Challenge.",
      },
      {
        description:
          "In the University Rover Challenge 2019, we designed the next generation Mars rover that will one day work along with the astronauts to explore the red planet. Ended up as one of the top 12 teams in the world out of more than 84+ teams.",
      },
      {
        description:
          "In the Mars Society South Asia (MSSA) Hackathon our team got a chance to visualise mars in a different perspective, focusing on human survival and analyse the possibility of colonisation. In this competition our rover got ranked 12.",
      },
      {
        description:
          "In the Indian Rover Designing Challenge 2020 (IRDC) we designed the next generation Mars rover which shall be fully equipped and mission ready for future astronaut-assistive exploration operations on Mars.",
      },
      {
        description:
          "In the International Rover Design Challenge our team designed a rover to explore Martian lava tubes which are expected to have high possibility of existence of life analogous to lava tubes on Earth.",
      },
      {
        description:
          "We also participated in the European Rover Challenge (ERC) and our rover got ranked 12. Participating in ERC, helped us to work exclusively on the software module and test it on an actual rover virtually.",
      },
    ],
    projects: [
      {
        description:
          "Our current rover, Dora, is a marked improvement over the previous iterations. The new design is our largest yet, and is significantly more robust. We placed an emphasis on modularity and stability. The rover has a wider base area and an arm with a larger workspace. The electronics are also modularized, allowing for faster debugging and reliability. In addition, the system architecture was optimized and faster algorithms were implemented in order to improve performance.",
      },
      {
        description:
          "Our rover features a robotic arm to perform various tasks like opening cupboards, flipping switches, tightening screws, etc. The onboard science laboratory on the rover allows us to perform experiments on soil samples collected in situ, testing for the presence of past or present life. Every year, we build a new rover incorporating new changes and innovations to improve on the previous model.",
      },
    ],
    website: "http://www.anveshak.team/",
    gallery: [
      {
        image: AnveshakGallery1,
      },
      {
        image: AnveshakGallery2,
      },
      {
        image: AnveshakGallery3,
      },
      {
        image: AnveshakGallery4,
      },
      {
        image: AnveshakGallery5,
      },
      {
        image: AnveshakGallery6,
      },
    ],
    email: "teamanveshak@smail.iitm.ac.in",
    contacts: [
      {
        name: "Sai Karthik Brahma",
        image: AnveshakHead2,
        email: "me19b044@smail.iitm.ac.in",
        phone: "8985149248",
        linkedIn: "https://www.linkedin.com/in/sai-karthik-brahma-32b890218",
      },
      {
        name: "Arun D A",
        image: AnveshakHead1,
        email: "ee19b071@smail.iitm.ac.in",
        phone: "7598194627",
        linkedIn: "https://www.linkedin.com/in/arun-asokan-5607531aa/",
      },
    ],
  },
  "team-avishkar-hyperloop": {
    name: "Team Avishkar ##Hyperloop",
    logo: AvishkarLogo,
    landing: AvishkarLanding,
    description:
      "We are a group of 60+ individuals hailing from across the country and pursuing various courses at IITM in different fields of study. Our collective passion brings us together for a cleaner future through sustainable Hyperloop research. With a single-minded focus on scalability, we are working on a whole host of new tube and pod technologies needed to implement a full-scale hyperloop safely. Elon Musk appreciated the technological progress we have made towards that goal at the SpaceX Hyperloop Pod Competition 2019. We built our latest pod Avishkar 'Garv,' during the height of the pandemic through relentless effort. Avishkar 'Garv' is equipped with many novel technologies that we built in-house from scratch and won the 'Most Scalable Design Award' among many others at the European Hyperloop Week.",
    achievements: [
      {
        title: "Finalist at ##SpaceX Hyperloop Pod Competition",
        description:
          "The team finished in the top-10 among 1500+ participating teams worldwide in SpaceX Hyperloop Pod Competition, July 2019. Moreover, we were the only Asian finalists at the competition. Team Avishkar Hyperloop also met and interacted with Elon Musk, who was all praise for their stupendous work.",
        images: [
          {
            image: AvishkarAchievements1a,
            heading: "The only Asian finalists",
          },
          {
            image: AvishkarAchievements1b,
            heading: "Top 10 finish in the SpaceX Pod Competition",
          },
          {
            image: AvishkarAchievements1c,
            heading: "Our team with Elon Musk",
          },
        ],
      },
      {
        title: "Winner of the most ##scalable design award",
        description:
          "Our team participated in the European Hyperloop Week, July 2021 virtually, with our indigenously developed Hyperloop pod ‘Garv’ and won the ‘Most Scalable Design Award’. We were also nominated among the top 5 teams around the globe in mechanical, levitation, propulsion, and complete pod award categories at the EHW ’21. Team Avishkar Hyperloop was the only team competing virtually to have won an award and also the only virtually participating team with top 5 in these many categories.",
        images: [
          {
            image: AvishkarAchievements2a,
            heading: "Our achievements in the European Hyperloop Week",
          },
          {
            image: AvishkarAchievements2b,
            heading: "Winner of the Most Scalable Design Award",
          },
        ],
      },
    ],
    projects: [
      {
        title: "Avishkar’s Hyperloop Pod 2021: ##‘Garv’",
        description:
          "The team built Asia’s most technologically advanced Hyperloop Pod, equipped with contactless propulsion using Linear Induction Motor, contactless braking using Eddy Current Braking, and a compact inverter for propulsion control. Designed entirely online and manufactured near the peak of the pandemic, the Pod was completed in July 2021.",
        image: AvishkarProject1,
      },
      {
        title: "A 500m long Hyperloop ##test track",
        description:
          "The team is building a 500m long, 2m diameter vacuum tube at the IITM campus, a first of its kind in the world by a student team. The Hyperloop tube is expected to be ready by Summer 2022. The sub-pilot tube will be a breakthrough in the Hyperloop development and accelerate technology development. The world-leading facility will act as a sub-scale testing ground to the Hyperloop community and lead to breakthroughs. \n After a year-long research, the team has developed this novel and cost-effective tube design and has also filed for a provisional patent for the same. We have also set up a 3.6m long vacuum tube prototype at CFI to test the validity of the design and test the vacuum compatibility of various components of our Hyperloop pod.",
        image: AvishkarProject2,
      },
    ],
    website: "https://avishkarhyperloop.com/",
    gallery: [
      {
        image: AvishkarGallery1,
      },
      {
        image: AvishkarGallery2,
      },
      {
        image: AvishkarGallery3,
      },
      {
        image: AvishkarGallery4,
      },
      {
        image: AvishkarGallery5,
      },
      {
        image: AvishkarGallery6,
      },
      {
        image: AvishkarGallery7,
      },
      {
        image: AvishkarGallery8,
      },
    ],
    email: "avishkarhyperloop@smail.iitm.ac.in",
    contacts: [
      {
        name: "Bharat Bhavsar",
        image: AvishkarHead1,
        email: "ae18b021@smail.iitm.ac.in",
        phone: "9979090823",
        linkedIn: "https://www.linkedin.com/in/bharat-bhavsar-2a9933182/",
      },
      {
        name: "Yash Gautam",
        image: AvishkarHead2,
        email: "me20m096@smail.iitm.ac.in",
        phone: "8602952842",
        linkedIn: "https://www.linkedin.com/in/yash4590",
      },
      {
        name: "Vibhor Jain",
        image: AvishkarHead3,
        email: "ce19b100@smail.iitm.ac.in",
        phone: "9166836673",
        linkedIn: "https://www.linkedin.com/in/vibhor-jain-6495031a0/",
      },
    ],
  },
  "team-agnirath": {
    name: "Team Agnirath",
    logo: "",
    landing: "",
    description: "",
    email: "",
    achievements: [
      {
        description:
          "The Team is preparing to go to Australia in October to showcase their work",
      },
    ],
    contacts: [
      {
        name: "Bindusara",
        image: "",
        email: "",
        phone: "8296354579",
      },
      {
        name: "Rishabh",
        image: "",
        email: "",
        phone: "7710936213",
      },
      {
        name: "Aditya",
        image: "",
        email: "",
        phone: "9884913874",
      },
    ],
  },
  "team-abhyuday": {
    name: "Team Abhyuday",
    landing: "",
    logo: "",
    description: "",
    email: "",
    contacts: [
      {
        name: "",
        phone: "9983321407",
        image: "",
        email: "",
      },
    ],
  },
};
