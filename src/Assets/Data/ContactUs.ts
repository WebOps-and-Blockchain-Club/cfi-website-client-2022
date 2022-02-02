import { ClubsName, IContact, TeamsName } from "../../Types";
import { Clubs } from "./Community/Clubs";
import { Teams } from "./Community/CompetitionTeam";
import { ManagerialTeams } from "./Community/ManagerialTeam";

// PHOTO
import FACAD1 from "../Images/ContactUs/CFIOffice/FACAD_Prabhu.jpg";
import FACAD2 from "../Images/ContactUs/CFIOffice/FACAD_Satyanarayanan.jpg";
import COCAS from "../Images/ContactUs/CFIOffice/CACOCAS_Nitish.jpeg";
import CFIHead from "../Images/ContactUs/CFIOffice/CFIHead_Dhanveer.jpg";

export const ContactUsData = () => {
  let result: IContact[] = [
    {
      title: "##Advisor",
      members: [
        {
          name: "Prof Prabhu Rajagopal",
          image: FACAD1,
          email: "prajagopal@iitm.ac.in",
          department: "Department of Mechanical Engineering",
          phone: "",
          linkedIn: "https://www.linkedin.com/in/prabhu-rajagopal-041ab74/",
        },
        {
          name: "Prof Satyanarayanan S",
          image: FACAD2,
          email: "satya@iitm.ac.in",
          department: "Department of Applied Mechanics",
          phone: "",
          linkedIn: "https://www.linkedin.com/in/satyaseshadri/",
        },
      ],
    },
    {
      title: "Student Executive ##Head",
      email: "cfi@smail.iitm.ac.in",
      members: [
        {
          name: "Dhanveerraj J M",
          image: CFIHead,
          email: "cfi@smail.iitm.ac.in",
          phone: "9488553190",
          linkedIn: "https://www.linkedin.com/in/dhanveerraj-j-m",
        },
      ],
    },
    {
      title: "Co-Curricular Affairs ##Secretary",
      members: [
        {
          name: "Nitish Gupta",
          image: COCAS,
          email: "sec_cocur@smail.iitm.ac.in",
          phone: "9840903852",
          linkedIn: "https://www.linkedin.com/in/nitish-gupta86",
        },
      ],
    },
  ];

  ManagerialTeams.map((_club: any) =>
    result.push({
      title: _club.name,
      email: _club.email,
      members: _club.contacts,
    })
  );

  Object.keys(Clubs).map((_club: string) =>
    result.push({
      title: Clubs[_club as ClubsName].name,
      email: Clubs[_club as ClubsName].email,
      members: Clubs[_club as ClubsName].contacts,
    })
  );

  Object.keys(Teams).map((_team: any) =>
    result.push({
      title: Teams[_team as TeamsName].name,
      email: Teams[_team as TeamsName].email,
      members: Teams[_team as TeamsName].contacts,
    })
  );

  return result;
};
