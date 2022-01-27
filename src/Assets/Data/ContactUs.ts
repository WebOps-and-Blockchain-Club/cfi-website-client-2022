import { ClubsName, IContact, TeamsName } from "../../Types";
import { Clubs } from "./Community/Clubs";
import { Teams } from "./Community/CompetitionTeam";
import { ManagerialTeams } from "./Community/ManagerialTeam";

// PHOTO
import COCAS from "../Images/ContactUs/CFIOffice/CACOCAS_Nitish.jpeg"

export const ContactUsData = () => {
  let result: IContact[] = [
    {
      title: "##Advisor",
      members: [
        {
          name: "Prof Prabhu Rajagopal",
          image: "",
          email: "prajagopal@iitm.ac.in",
          phone: "",
          linkedIn: "",
        },
        {
          name: "Prof Satyanarayanan S",
          image: "",
          email: "satya@iitm.ac.in",
          phone: "",
          linkedIn: "",
        },
      ],
    },
    {
      title: "Student Executive ##Head",
      members: [
        {
          name: "Dhanveerraj J M",
          image: "",
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

  Object.keys(Clubs).map((_club: string) =>
    result.push({
      title: Clubs[_club as ClubsName].name,
      members: Clubs[_club as ClubsName].contacts,
    })
  );

  Object.keys(Teams).map((_team: any) =>
    result.push({
      title: Teams[_team as TeamsName].name,
      members: Teams[_team as TeamsName].contacts,
    })
  );

  ManagerialTeams.map((_club: any) =>
    result.push({
      title: _club.name,
      members: _club.contacts,
    })
  );

  return result;
};
