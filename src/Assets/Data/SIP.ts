import Workflow from "../Images/SIP/workflow.png";
import Vision from "../Images/SIP/step.png";
import Propose from "../Images/SIP/propose.png";
export const SIPData = {
  content:
    "Student Innovation Program (SIP’24) is a platform through which you get to work on a project of your choice. We will help you all along the way, right from helping you to tailor your project to mentoring it to completion by providing you with all the necessary funding, space, and exposure. There is no restriction on proposing projects. It is open to all students of IIT Madras irrespective of department, year or level of degree.",
  quotes: [
    {
      image: Propose,
      title: "Proposing a Good Idea",
      id: "propose",
      description:
        "Think of the ideal combination of problem-solution fits, the latest technology, and feasibility, and you have an idea that would work well in the Student Innovation Program!",
    },
    {
      image: "",
      title: "The Need",
      id: "need",
      description:
        "Acknowledge a genuine problem. It can be related to an individual, a community or a population.",
    },
    {
      image: "",
      title: "Analysis",
      id: "analysis",
      description:
        "Define the scope of the problem that you wish to address, especially in terms of the <b>Scale</b>, <b>Urgency</b> and <b>True Nature</b> of the problem that you wish to solve.",
    },
    {
      image: "",
      title: "Specifications",
      id: "specifications",
      description:
        "State the Problem, the constraints on it, and what you expect to complete in the time you have. In stating the problem, all the functions required of the design together with all planned features should be specified.",
    },
    {
      image: Workflow,
      title: "Project Workflow",
      id: "project-workflow",
      description: "This will be followed post selection of projects",
    },
    {
      image: Vision,
      title: "Vision",
      id: "vision",
      description:
        "-To foster innovation and invention in understanding technology<br />-To facilitate the creative genius<br />-To promote informal learning across interdisciplinary fields<br />-To aim at technologies contributing positively to the environment and society",
    },
  ],
  questions: [
    "What is the problem that you wish to solve? *",
    "What will be your approach to solve this problem? *",
    "What kind of impact will be produced by a solution for this problem? *",
    "Mention market research/ constraints/ end goals of the project. (Optional)",
  ],
};
