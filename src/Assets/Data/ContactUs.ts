import { ClubsName, IContact, TeamsName } from "../../Types";
// import { Clubs } from "./Community/Clubs";
// import { Teams } from "./Community/CompetitionTeam";
// import { ManagerialTeams } from "./Community/ManagerialTeam";

// PHOTO
import FACAD1 from "../Images/ContactUs/CFIOffice/FACAD_Prabhu.png";
// import FACAD2 from "../Images/ContactUs/CFIOffice/FACAD_Satyanarayanan.png";
// import COCAS from "../Images/ContactUs/CFIOffice/COCAS_Nithin.png";
import CFIHead from "../Images/ContactUs/CFIOffice/CFIHead_Madhavnambi.jpg";

export const ContactUsData = () => {
  let result: IContact[] = [
    {
      title: "##Advisor",
      members: [
        {
          name: "Prof Prabhu Rajagopal",
          image: FACAD1,
          email: "prajagopal@iitm.ac.in",
          department: "Advisor (Innovation & Entrepreneurship)",
          phone: "",
          linkedIn: "https://www.linkedin.com/in/prabhu-rajagopal-041ab74/",
        },
      ],
    },
    {
      title: "Student Executive ##Head",
      email: "cfi@smail.iitm.ac.in",
      members: [
        {
          name: "Sarthak Saurav",
          image: CFIHead,
          email: "ep20b035@smail.iitm.ac.in",
          phone: "8328950772",
          linkedIn: "https://www.linkedin.com/in/sarthak-saurav/",
        },
      ],
    },
    // {
    //   title: "Co-Curricular Affairs ##Secretary",
    //   members: [
    //     {
    //       name: "Nithin S",
    //       image: COCAS,
    //       email: "sec_cocur@smail.iitm.ac.in",
    //       phone: "9361334004",
    //     },
    //   ],
    // },
  ];

  // ManagerialTeams.map((_club: any) =>
  //   result.push({
  //     title: _club.name,
  //     email: _club.email,
  //     members: _club.contacts,
  //   })
  // );

  // Object.keys(Clubs).map((_club: string) =>
  //   result.push({
  //     title: Clubs[_club as ClubsName].name,
  //     email: Clubs[_club as ClubsName].email,
  //     members: Clubs[_club as ClubsName].contacts,
  //   })
  // );

  // Object.keys(Teams).map((_team: any) =>
  //   result.push({
  //     title: Teams[_team as TeamsName].name,
  //     email: Teams[_team as TeamsName].email,
  //     members: Teams[_team as TeamsName].contacts,
  //   })
  // );

  return result;
};
