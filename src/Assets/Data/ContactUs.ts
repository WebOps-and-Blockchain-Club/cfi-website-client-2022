import { ClubsName, IContact, TeamsName } from "../../Types";
// import { Clubs } from "./Community/Clubs";
// import { Teams } from "./Community/CompetitionTeam";
// import { ManagerialTeams } from "./Community/ManagerialTeam";

// PHOTO
import FACAD1 from "../Images/ContactUs/CFIOffice/FACAD_Prabhu.png";
// import FACAD2 from "../Images/ContactUs/CFIOffice/FACAD_Satyanarayanan.png";
// import COCAS from "../Images/ContactUs/CFIOffice/COCAS_Nithin.png";
import CFIHead from "../Images/ContactUs/CFIOffice/CFIHead_Madhavnambi.jpg";
import CFIHEAD2 from "../Images/ContactUs/CFIOffice/Suparn_Gupta_CFIHEAD.png"
import CFIHEAD3 from "../Images/ContactUs/CFIOffice/Ashmitha_CFIHEAD.jpg"

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
          name: "Madhavnambi R V",
          image: CFIHead,
          email: "cfi@smail.iitm.ac.in",
          phone: "8903172547",
          linkedIn: "https://www.linkedin.com/in/madhavnambi-r-v-13443921a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=",
        },
      ],
    },
    {
      title: "Student Associate ##Head",
      members: [
        {
          name: "Suparn Gupta",
          image: CFIHEAD2,
          email: "ce21b124@smail.iitm.ac.in",
          phone: "8899888557",
          linkedIn: "https://www.linkedin.com/in/suparn-gupta-2b4b06285?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BCHzniUxKSL6ObT0RIpYiCw%3D%3D"
        },
        {
          name: "Ashmitha",
          image: CFIHEAD3,
          email: "ce21b024@smail.iitm.ac.in",
          phone: "9840494963",
          linkedIn: "https://www.linkedin.com/in/ashmitha-jaysi-sivakumar-4637aa240?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        }
      ],
    },
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
