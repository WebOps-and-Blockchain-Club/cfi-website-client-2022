import PDC from "../Images/SummerSchool/PDC.jpg";
import Sahaay from "../Images/SummerSchool/Sahaay.png";
import _3DP from "../Images/SummerSchool/3DP.png";
import Aero from "../Images/SummerSchool/Aero.png";
import AI from "../Images/SummerSchool/AI.png";
import Electronics from "../Images/SummerSchool/Electronics.png";
import Envisage from "../Images/SummerSchool/Envisage.png";
import Horizon from "../Images/SummerSchool/Horizon.png";
import IBot from "../Images/SummerSchool/IBot.jpg";
import Maths from "../Images/SummerSchool/Maths.png";
import Programming2 from "../Images/SummerSchool/Programming1.png";
import Programming1 from "../Images/SummerSchool/Programming2.png";
import CySec from "../Images/SummerSchool/CySec.png";
import Biotech from "../Images/SummerSchool/Biotech.png";
import W_B from "../Images/SummerSchool/W&B.png";
import { link } from "./utils";

const data = {
  description:
    "CFI presents the summer school 2024 in this summer break conducted by all the 14 clubs covering  different areas of Technology, Science, and Engineering!It offers the Freshie Youth, who have a lot to EXPLORE, the chance to learn and experience completely new things in the Open-to-All CFI .For students who aspire to represent IIT Madras at the upcoming Inter IIT Tech Meet, the summer schools will also serve as training ground. Participation shall serve as one of the selection criteria for the contingent.<br />These sessions will be conducted by the club heads and coordinators.An E-certificate will be provided to all the participants who have attended above 80% of the live sessions and have completed all the quizzes and tasks in the registered sessions.<br />Its open for all the students and offered for free of cost.",
  time: "JUNE 17TH to JULY 7TH",
  sessions: [
    //Aero
    {
      club: "Aero Club",
      title1: "From Theory to ##Takeoff",
      title: "From Theory to Takeoff",
      email: "aeroclub.cfi@gmail.com",
      description:
        `
This intensive six-day only journey offers an immersive dive into aeronautical engineering principles, aircraft design methodologies, and pioneering aviation technologies. 
Participants will gain comprehensive knowledge of aerodynamics, robotics applications, and advanced flight simulations.
Ignite your passion for aviation and elevate your expertise through this unparalleled educational experience.`,
      id: "aero-club",
      slot: "B",
      poster: Aero,
      links: [
        {
          name: "Whatsapp",
          link: "https://chat.whatsapp.com/KpC0eCXsE1oJsa97XtvMm5",
        },
      ],
      time: "10:30 AM- 1 PM (Tue, Thu, Sat)",
      fulldesc: `
      <b>Introduction:</b> <br>
Soar to new heights with the Aero Club's Summer School. 
<br>
<p>
This intensive six-day only journey offers an immersive dive into aeronautical engineering principles, aircraft design methodologies, and pioneering aviation technologies. 
Participants will gain comprehensive knowledge of aerodynamics, robotics applications, and advanced flight simulations.</p>
Ignite your passion for aviation and elevate your expertise through this unparalleled educational experience.<br>

<b>Course Description:</b><br>
<p>The Aero Club Summer School is a comprehensive program that covers the fundamentals of aerodynamics, aircraft modeling, flight simulations, and robotics applications in aviation. <br>
</p>
Over the course of six days, participants will embark on an exhilarating journey through the following modules.
<p><b>Softwares requirement:</b>    
<ol>
    <li>XFLR5</li>
    <li>Fusion360</li>
    <li>VM/Dual boot Ubuntu 22.04</li>
    <li>Gazebo, and Pymavlink</li>
    <li>ROS2 Humble - Turtlesim</li>
    <li>Ardupilot Mission Planner</li>
</ol></p>

        `
      ,
      sessionwise: [
        {
          title: "Basics of Aerodynamics",
          description: `
          <b>Lesson</b>- Delve into the fundamental principles that govern flight, including lift, drag, and how aircraft defy gravity.
          `,
        },
        {
          title: "Modeling a RC Plane",
          description: `
          <b>Lesson</b>- Transform ideas into 3D models: Design a RC aircraft with Fusion360.
        
          `,
        },
        {
          title: "Analysis of an airfoil",
          description: `
          <b>Lesson</b>- Explore the intricacies of airfoil design, visualize airflow patterns and performance using XFLR5.
          `,
        },
        {
          title: "ROS2 and MAVROS",
          description: `
          <b>Lesson</b>- Step into the world of robotics with an introduction to ROS2 and MAVROS, a communication node for UAV.
          `,
        },
        {
          title: "Gazebo Simulation",
          description: `
          <b>Lesson</b>- Immerse yourself in realistic flight simulations using Gazebo. Create virtual environments, test flight scenarios, and gain hands-on experience in simulation-based aircraft development from your computer.
          `,
        },
        {
          title: "Ground Control Stations, Drone Simulation and Computer Vision",
          description: `
          
          <b>Lesson</b>- Simulate a drone on a real map with Ardupilot. Progress to 3D simulation, navigate a virtual warehouse with only a drone control terminal. Ultimately, leverage ROS in conjunction with Computer Vision to script an autonomous search mission.


          `,
        },
        {
          title: "Hover Huddle",
          description: `
          
          <b>Lesson</b>- To cover content if left out in earlier sessions along with clearing doubts related to assignments.
          

          `,
        },

      ],
    },
    //W&B
    {
      club: "WebOps and Blockchain Club",
      title1: "WebDev ##Enigma",
      title: "WebDev Enigma",
      email: "cfiwebops@smail.iitm.ac.in",
      poster: W_B,
      links: [
        {
          name: "Whatsapp",
          link: "https://chat.whatsapp.com/JqxT2wVFHcI75bYdRVBa0G",
        },
        {
          name: "Microsoft Teams",
          link: "https://teams.microsoft.com/l/team/19%3aD0QLMsqOOnzClg2NRE_-pLvuicUuRI2wKDqpnd-wGuw1%40thread.tacv2/conversations?groupId=d6891cef-0832-486f-bdd8-822bc1bf9023&tenantId=187ca15f-54e0-4673-86f6-b6d7f4c75eef",
        },
      ],
      description:
        "We will be offering an exciting, hands-on learning adventure spread across eight dynamic sessions. Participants will dive deep into web development, mastering UI/UX design, version control, JavaScript, backend development, React, and cutting-edge blockchain technology.",
      fulldesc:
        `
    <h2>Introduction</h2>

We will be offering an exciting, hands-on learning adventure spread across eight dynamic sessions. Participants will dive deep into web development, mastering UI/UX design, version control, JavaScript, backend development, React, and cutting-edge blockchain technology.

<h2>Requirements</h2>
<ul>
<li>
Laptop or Computer
</li>
<li>
A Compatible Code Editor (preferably Visual Studio Code) Installed on Your System
</li>
<li>
Stable internet connection
</li>
</ul>

    `,
      sessionwise: [
        {
          title: "Starting with HTML, CSS Basics to Get Hands-On Coding a Website",
          description: `
      <ul>
      <li>Introduction to the foundations of web development with HTML and CSS</li>
      <li>Understanding the structure of web pages and styling techniques</li>
      <li>Hands-on practice to create a basic web page</li>
  </ul>
        `,
        },
        {
          title: "Learn to Use Git and GitHub and Insights in UI/UX Designing",
          description: `
      <ul>
      <li>Essentials of version control using Git and GitHub</li>
      <li>Learning to track changes, collaborate on projects, and manage code repositories</li>
      <li>Insights into UI/UX design principles</li>
      <li>Emphasis on user-centric design and creating intuitive interfaces</li>
  </ul>   
     
        `,
        },
        {
          title: "Diving into JavaScript and Its Concepts",
          description: `
      <ul>
<li>Introduction to JavaScript and its syntax</li>
<li>Learning about variables, functions, and events</li>
<li>Adding interactivity and dynamic content to websites</li>
<li>Laying the groundwork for more advanced web development topics</li>
</ul>

        `,
        }, {
          title: " Mastering Backend Development with Express and Databases",
          description: `
      <ul>
      <li>Introduction to backend development using Express.js</li>
      <li>Interacting with databases</li>
      <li>Overview of how backend systems work</li>
  </ul>
  
        `,
        }, {
          title: "Conquering Frontend Development with React",
          description: `
      <ul>
<li>Delving into React and its components</li>
<li>Learning about state management and the React lifecycle</li>
<li>Creating dynamic and responsive web applications</li>
<li>Enhancing skills in frontend development</li>
</ul>

        `,
        }, {
          title: " Diving into Blockchain Technology",
          description: `
      <ul>
      <li>Introduction to blockchain technology and its fundamental concepts</li>
      <li>Explanation of wallets and smart contracts</li>
      <li>Basics of coding in Solidity</li>
      <li>Understanding the potential and applications of blockchain</li>
  </ul>
  
        `,
        }, {
          title: "Exploring More on Solidity and Integrating Blockchain with Ethers.JS",
          description: `
      <ul>
      <li>Deepening knowledge of Solidity and complex smart contracts</li>
      <li>Learning to use the Ethers.js library</li>
      <li>Gaining proficiency in connecting blockchain functionalities with frontend applications</li>
  </ul>
  
        `,
        }, {
          title: "Final Integration",
          description: `<ul>
      <li>Bringing together all the skills and knowledge acquired throughout the course</li>
      <li>Working on integrating the frontend, backend, and blockchain components into a cohesive project</li>
      <li>Emphasizing the importance of full-stack development</li>
  </ul>
  `
        }],

      slot: "D",
      time: "2:00 PM - 4:30 PM (Tue, Thu, Sat)",
      id: "webops-and blockchain club",
    },
    //maths
    {
      club: "Mathematics Club",
      title1: "MathLab and ##Computational Tools",
      title: "MathLab and Computational Tools",
      slot: "A",
      email: "mathematicsclubiitm@gmail.com",
      links: [
        {
          name: "Whatsapp",
          link: "https://chat.whatsapp.com/FQ5cyBwgmqo3aDNrd2h34q",
        },
      ],
      poster: Maths,
      time: "10:30 AM - 1 PM (Mon, Wed, Fri)",
      id: "mathematics-club",
      description:
        "Topics like Linear Algebra, Probability and Differential equations form the fundamentals of various topics in different domains. Attending this summer school will give an head start to all the students in their academic journey of IITM.",
      fulldesc: `
      <b>Mathematical Content :</b><br>
      <ol>
      <li>
      Differential Equations
      </li>     
      
      <li>
      Root-finding using Newton Raphson, Bracketing
      </li>
      <li>
      Euler's method, Prediction-Correction improvement
      </li>
      <li>
      Finite Difference method 
      </li>
      <li>
      Fourier Series and introductory Fourier transform
      </li>
      <li>
      Denoising data using FT
      </li>
      <li>A lot of real-world examples and GNU octave
      </li>
      </ol>
      <b>Roadmap</b> :  3 sessions overall (1 week)
        `,
      sessionTitle: ["First session", "Second session", "Third session", "Post session"],
      sessionwise: [{
        title: "First session",
        description: `<ul>
        <li>Root finding methods - open and bracketing</li>
        <li>Motivation for the study of Differential Equations</li>
        <li>Differential equations, their classification, methods of solving them</li>
        <li>ODEs and PDEs</li>
        <li>Motivation for numerical methods</li>
    </ul>
    `},
      {
        title: "Second session",
        description: `<ul>
    <li>Teaching Euler's method, error analysis on Euler's method, and a brief explanation of predictor-corrector methods (like Heun and Runge-Kutta)</li>
    <li> Install and start off with GNU Octave</li>
    <li>Basics of Octave and programming</li>
    <li>Deriving and solving ODEs in octave (Code along)</li>
    <li>Brief explanation of finite difference method and solving a PDE in Octave</li>
  </ul>
  `,
      },
      {
        title: "Third session",
        description: `<ul>
        <li>Motivation for fourier series</li>
        <li>Fourier series theory ending with a brief intro to Fourier Transform</li>
        <li>Numerical root finding in octave (Code along)</li>
        <li>Numerical root finding in octave (Code along)</li>
        <li>Denoising noisy signals in octave (using Fourier transform) and then using numerical methods to find roots (Code along)</li>
        <li>Closing remarks, summarizing everything</li>
        </ul>
        `,

      },
        // {
        //   title: "Post session",
        //   description: `<ul>
        //   <li>First session - Assignment on DE theory</li>
        //   <li>Second session - Assignment on numerical methods theory + fill in templated code</li>
        //   <li>Third session - Assignment on Fourier series theory + fill in templated code</li>
        //   <li>Discussion of past assignment post-session for interested candidates</li>
        //   </ul>
        //   `,


        // },
      ],


    },
    //PDC
    {
      clubs: ["Product Design Club"],
      title1: "Innovate. Design. ##Inspire",
      title: "Innovate Design Inspire",
      emails: ["thepdc.cfi@gmail.com"],
      slot: "C",
      time: "2:00 PM - 4:30 PM (Mon, Wed, Fri)",
      ids: ["product-design club"],
      id: "product-design-club",
      links: [
        {
          name: "Whatsapp",
          link: "https://chat.whatsapp.com/Iif2WtUCby0Gt8hdkAwdWY",
        },
      ],
      poster: PDC,
      description:
        "Provide an overview of product design and management, introducing key concepts and setting the stage for subsequent sessions.",
      fulldesc: ``,
      sessionwise: [
        {
          title: "Introduction to Product Design and Management",
          description:
            `<b>Objective</b>: Provide an overview of product design and management, introducing key concepts and setting the stage for subsequent sessions.<br>
           <ol>
    <li>Welcome and Introduction
        <ul>
            <li>Overview of the summer school program</li>
            <li>Importance of product design and management</li>
        </ul>
    </li>
    <li>Fundamentals of Product Design
        <ul>
            <li>Definition and scope</li>
            <li>Key stages in product design: Ideation, Design, Development, and Launch</li>
        </ul>
    </li>
    <li>Introduction to Product Management
        <ul>
            <li>Role and responsibilities of a product manager</li>
            <li>Product life cycle management</li>
        </ul>
    </li>
    <li>Case Study: Successful Products
        <ul>
            <li>Analysis of successful products and their design process</li>
            <li>Group discussion on takeaways</li>
        </ul>
    </li>
    <li>Q&A and Wrap-up</li>
</ol>

           `,
        },
        {
          title: "Design Thinking and Ideation Techniques",
          description: `
          <b>Objective</b>: Introduce design thinking methodology and various ideation techniques to foster creativity.
          <ol>
    <li>Introduction to Design Thinking
        <ul>
            <li>Principles and stages of design thinking: Empathize, Define, Ideate, Prototype, Test</li>
        </ul>
    </li>
    <li>Empathy and User Research
        <ul>
            <li>Techniques for understanding user needs: Interviews, Surveys, Observation</li>
        </ul>
    </li>
    <li>Ideation Techniques
        <ul>
            <li>Brainstorming, Mind Mapping, SCAMPER, and other ideation methods</li>
            <li>Hands-on activity: Group brainstorming session</li>
        </ul>
    </li>
    <li>Q&A and Wrap-up</li>
</ol>


          `,
        },
        {
          title: "Introduction to Fusion 360",
          description: `
          <b>Objective</b>: Teach the basics of Fusion 360 for 3D design and prototyping.
          <ol>
    <li>Overview of Fusion 360
        <ul>
            <li>Introduction to CAD and its importance in product design</li>
        </ul>
    </li>
    <li>Getting Started with Fusion 360
        <ul>
            <li>Interface navigation</li>
            <li>Basic tools and features</li>
            <li>Creating a simple 3D model</li>
        </ul>
    </li>
    <li>Hands-on Activity
        <ul>
            <li>Guided exercise: Design a basic product component</li>
            <li>Tips and tricks for efficient modeling</li>
        </ul>
    </li>
    <li>Q&A and Wrap-up</li>
</ol>
          `,
        },
        {
          title: "Prototyping and Testing",
          description: `
          <b>Objective</b>: Explore various prototyping methods and the importance of testing in the product design process.
          <ol>
    <li>Introduction to Prototyping
        <ul>
            <li>Different types of prototypes: Low-fidelity, High-fidelity, Digital, Physical</li>
        </ul>
    </li>
    <li>Tools and Materials for Prototyping
        <ul>
            <li>Software tools for digital prototyping</li>
            <li>Materials for physical prototyping</li>
        </ul>
    </li>
    <li>Testing and Iteration
        <ul>
            <li>Importance of user testing</li>
            <li>Methods for collecting feedback and iterating designs</li>
        </ul>
    </li>
    <li>Hands-on Activity
        <ul>
            <li>Quick prototyping exercise using available materials</li>
        </ul>
    </li>
    <li>Q&A and Wrap-up</li>
</ol>

          `,
        },
        {
          title:
            "Introduction to Figma",
          description: `
          <b>Objective</b>: Teach the basics of Figma for UI/UX design and prototyping.
          <ol>
    <li>Overview of Figma
        <ul>
            <li>Introduction to UI/UX design and its relevance in product design</li>
        </ul>
    </li>
    <li>Getting Started with Figma
        <ul>
            <li>Interface navigation</li>
            <li>Basic tools and features</li>
            <li>Creating a simple wireframe</li>
        </ul>
    </li>
    <li>Hands-on Activity
        <ul>
            <li>Guided exercise: Design a basic app interface</li>
            <li>Collaboration features in Figma</li>
        </ul>
    </li>
    <li>Q&A and Wrap-up</li>
</ol>

          `,
        },
        {
          title: "Product Development and Roadmapping",
          description: `
          <b>Objective</b>: Understand the process of product development and how to create a product roadmap.
          <ol>
    <li>Stages of Product Development
        <ul>
            <li>Concept development</li>
            <li>Design</li>
            <li>Development</li>
            <li>Testing</li>
            <li>Launch</li>
        </ul>
    </li>
    <li>Creating a Product Roadmap
        <ul>
            <li>Importance of roadmapping</li>
            <li>Tools and techniques for roadmapping</li>
            <li>Example roadmap creation</li>
        </ul>
    </li>
    <li>MVP making</li>
    <li>Q&A and Wrap-up</li>
</ol>

          `,
        },
        {
          title: "Marketing and Launch Strategies",
          description: `
          <b>Objective<b>: Learn about product marketing and strategies for a successful product launch.
          <ol>
          <li>Introduction to Product Marketing
              <ul>
                  <li>Role of marketing in product success</li>
                  <li>Market research and positioning</li>
              </ul>
          </li>
          <li>Launch Strategies
              <ul>
                  <li>Planning a product launch</li>
                  <li>Go-to-market strategies</li>
                  <li>Measuring launch success</li>
              </ul>
          </li>
          <li>Case Study: Successful Product Launches
              <ul>
                  <li>Analysis of real-world examples</li>
                  <li>Group discussion on key learnings</li>
              </ul>
          </li>
          <li>Q&A and Wrap-up</li>
      </ol>
      
          `,
        },
        {
          title: "Product Pitch",
          description: `Competition for students.
          `
        },
      ],
    },


    //cysec
    {
      club: "CyberSecurity Club",
      title1: "The Art of ##Exploitation",
      title: "The Art of Exploitation",
      email: "cs22b010@smail.iitm.ac.in",
      description:
        `Your hacking journey begins here!

        With this 9 session course on binary exploitation learn everything needed to jumpstart your hacking journey covering everything from the basics of C to advanced topics including ret2libc , ASLR etc.
        
        Get equipped to overcome any challenge involving binary exploitation with this one of a kind educational experience.
        `,
      id: "cysec-club",
      slot: "D",
      poster: CySec,
      links: [
        {
          name: "Whatsapp",
          link: "",
        },
      ],
      time: "2:00 PM - 4:30 PM (Tue, Thu, Sat)",
      fulldesc: `<h1>Introduction : </h2>
      Your hacking journey begins here!
      
      With this 9 session course on binary exploitation learn everything needed to jumpstart your hacking journey covering everything from the basics of C to advanced topics including ret2libc , ASLR etc.
      
      Get equipped to overcome any challenge involving binary exploitation with this one of a kind educational experience.
      
      <h2>Course Description :</h2>
      
      The course will be covering everything needed to get immediately started with solving challenges in 9 comprehensive modules as follows 
      

        `
      ,
      sessionwise: [
        {
          title: "",
          description: `
          <ul>
          <li>
          Basic C language
          </li>
          <li>
          Basic Linux Commands
          </li>
          </ul>
          
       
          `,
        },
        {
          title: "",
          description: `
          <ul>
          <li>
          Introduction to compilation 
          </li>
          <li>
          Introduction to assembly language
          </li>
          </ul>
       
          `,
        },
        {
          title: "",
          description: `
          <ul>
          <li>
          Using GDB 
          
          </li>
          <li>
          Overwriting a variable with basic buffer overflow
          </li>
          </ul>
          `,
        }, {
          title: "",
          description: `
          <ul>
          <li>
          Understanding how stack frames work
          
          </li>
          <li>
          Types of buffer overflow
          </li>
          <li>
          ret2function
          </li>
          <li>
          ret2shellcode
          </li>
          </ul>
          `,
        }, {
          title: "",
          description: `
          <ul>
          <li>
          Stack canaries as a mitigation to buffer overflow
          </li>
          <li>
          Leaking the canary with format string
          </li>
          </ul>
          `,
        }, {
          title: "",
          description: `
          <ul>
          <li>W^X, preventing shellcode execution
          </li>
          <li>
          ret2libc to overcome shellcode execution           
          </li>
          </ul>
          `,
        }, {
          title: "",
          description: `
          <ul>
          <li>Understanding ASLR; the what, the how, and the why
          </li>
          </ul>
          `,
        }, {
          title: "",
          description: `
          <ul>
          <li>
          Position Independent Code
          </li>
          <li>
          Procedure Linkage Table
          </li>
          <li>
          Global Offset Table
          </li>
          <li>
          Relocations Read Only - and how it is a necessary evil
          </li>
          </ul>
          `,
        }, {
          description: `
          <ul>
          <li>
          Overcoming ASLR with ret2plt
          </li>
          <li>
          GOT overwrite with format string
          </li>
          </ul>
          `,
        },

      ],
    },



    //Horizon
    {
      club: "Horizon",
      title1: "The Space Route: ##Navigating through Cosmos",
      title: "The Space Route: Navigating through Cosmos",
      email: "horizon.iitm@gmail.com",
      description:
        `
        This Summer School, Horizon presents the opportunity for you to learn in 7 days of informative sessions ,about observation of the night sky and astrophotography, physics inspired computation with simulations of astronomical events like the big bang, multiple fascinating astrophysics concepts, Cosmology with aspects of the universe explained like the expanding universe along with the Cosmological Principle,finishing with some machine learning in astronomy.
        `,
      id: "horizon",
      slot: "B",
      links: [
        {
          name: "Whatsapp",
          link: "https://chat.whatsapp.com/LVJa450ymIvKpcim1U5GJf",
        },
      ],
      poster: Horizon,
      time: "10:30 AM- 1 PM (Tue, Thu, Sat)",
      fulldesc: `
      <h2>Introduction: </h2>

This Summer School, Horizon presents the opportunity for you to learn in 7 days of informative sessions ,about observation of the night sky and astrophotography, physics inspired computation with simulations of astronomical events like the big bang, multiple fascinating astrophysics concepts, Cosmology with aspects of the universe explained like the expanding universe along with the Cosmological Principle,finishing with some machine learning in astronomy.
        `,
      sessionwise: [
        {
          title: "Introduction to Observational Astronomy and Astrophotography",
          description:
            `
            <b><Topics<b>
            <ol>
            <li>
            What we can observe in the nightsky unaided; a small guide to observing these objects.
            </li>
            <li>
            Inspecting the telescope - How does it work, length of telescope, aperture and f ratio. 
            </li>
            <li>
            Coordinate systems - Alt Az and RA Dec. 
            </li>
            <li>
            Intro to mounts - why we need mounts - why do we need to track objects - difference between altaz and eq mounts. 
            </li>
            <li>
            Capturing the nightsky - Astrophotography vs Normal photography.
            </li>
            <li>
            More about AP - stacking - how to increase SNR, seeing, dark frames, bias frames, flat frames.
            </li>
            <li>
            Sensors - CMOS vs CCD - the fundamental working principles behind the two.
            </li>
            </ol>

            `,
        },
        {
          title: "Physics Inspired Computation",
          description:
            "What is Optimisation?, Optimization techniques - Gravitational search ",
          session_nums: "2.1"
        },
        {
          title: "Optimization, Central Force Optimization, ., Physics Inspired Neural Networks.",
          description:
            `Colliding Bodies Optimization, Harmony Search Algorithm, Big Bang - Big Crunch, Simulated Annealing, Quantum Annealing, The Ising model.
            <h3>Learning Outcomes :</h3> An understanding of optimization problems and how it can be approached in different ways. `,
          session_nums: "2.2"
        },

        {
          title: "Astrophysics Concepts",
          description: `
          <ul>
         
          `,
          session_nums: "3"
        },
        {
          title: "Cosmology: Exploring the Unfolding of the Universe",
          description: `
          Introduction, The Cosmological Principle - Homogeneity and Isotropy, The fabric of Spacetime, FLRW Metric, Basics of Einstein’s Field Equations
          `,
          session_nums: "4.1"
        },
        {
          title: "Cosmology: Exploring the Unfolding of the Universe",
          description:
            `The Expanding Universe, Cosmological Redshift, Hubble Parameter, Friedmann’s Equations, The agent of expansion - The Dark Energy (if time permits)
            <h3>Assignments :</h3> Post-session problem solving tutorials, programming assignments (if we cover)
            <h3>Pre Requisites :</h3> Differential equation, Classical mechanics, Basics of Programming (not necessary, but a good add-on)
            <h3>Learning Outcomes :</h3> It’s cosmology! The ultimate answer to all the existential questions! What else do you need !?
            `,

          session_nums: "4.2"
        },
        {
          title: "ML in Astronomy",
          description: `
            <ul>
            <li>Intro to ML,</li>
            <li>Need of ML in Astronomy</li>
            <li>Applications of ML in Astronomy</li>
            <li>Hands-on demonstration</li>
            </ul>
          `,
          session_nums: "5"
        },
      ],
    },
    // Sahaay

    {
      clubs: ["Team Sahaay"],
      title1: "Innovate##X",
      title: "InnovateX",
      emails: ["teamsahaayiitm@gmail.com"],
      slot: "C",
      time: "2:00 PM - 4:30 PM (Mon, Wed, Fri)",
      ids: ["team-sahaay"],
      links: [
        {
          name: "Whatsapp",
          link: "https://chat.whatsapp.com/Iif2WtUCby0Gt8hdkAwdWY",
        },
      ],
      poster: Sahaay,
      description:
        "Ever wanted to learn software, electronics, and mechanics all at once while applying these skills in real-world scenarios? Join InnovateX 2024 to dive into facial recognition, embedded programming, Fusion 360, and more. ",
      fulldesc: `
      <h2>Intro: </h2>  Ever wanted to learn software, electronics, and mechanics all at once while applying these skills in real-world scenarios? Join InnovateX 2024 to dive into facial recognition, embedded programming, Fusion 360, and more. 

      <h2>Course Description:</h2>Through interactive modules on Python, Arduino, OpenCV, and Fusion 360, you'll gain hands-on experience in software development, IoT, embedded systems, computer vision, and mechanical design. By the end of 8 sessions, you will be able to apply these skills to solve a real-world problem in the final project.
      <h3>Project:</h3> Apply all the skills you’ve learned to solve a socially relevant problem under the guidance of a mentor from our team.
<h4>Requirements:</h4>
Laptop, Internet
Fusion 360, Google Collab, TinkerCad (Fret not, we’ll provide step-by-step details on how to use these software :)

        `,
      sessionwise: [
        {
          title: "Introduction to Design Thinking and Python Programming",
          description: `
          <ul>
          <li>Explore the principles of design thinking to foster innovation
          </li>
          <li>
          Understand how python works right from the basics, including identifiers, data types, conditional statements and loops          
          </li>
          </ul>
          `,
        },
        {
          title: "Diving into Functions and Numpy",
          description: `
          <ul>
          <li>  Define and use functions
          
          </li>
          <li>         
          Use Numpy for numerical computing and performing matrix operations.
          </li>
          </ul>
          `,
        },
        {
          title: "Introduction to Development boards and Embedded Programming,",
          description: `
          <ul>
          <li>    Get familiar with various development boards like Arduino UNO, ESP32, and Raspberry Pi.
          </li>
          <li>         
          Detailed look into Arduino UNO, power options, digital and analog signals, pins, electronic components, and using Arduino IDE and TinkerCad.
          </li>
          </ul>
          `,
        }, {
          title: "Advanced IoT and Communication Protocols:",
          description: `
          <ul>
          <li>    Deep dive into SPI and I2C protocols, and their simulation in TinkerCad.     
          </li>
          </ul>
          `,
        }, {
          title: "Exploring OpenCV",
          description: `
          <ul>
          <li>     Image Processing with OpenCV: Learn to read, resize, and transform images and videos.    
          </li>
          </ul>
          `,
        }, {
          title: "Advanced Image Techniques and facial recognition:",
          description: `
          <ul>
          <li>       Explore color spaces, filters, contour detection, edge detection, and face recognition.  
          </li>
          </ul>
          `,
        }, {
          title: "Mechanical Design with Fusion 360:",
          description: `
          <ul>
          <li>   Introduction to sketching and part modeling in Fusion 360, including projections, splines, and basic 3D modeling.
          
          </li>
          <li>         
          Constraints and Joints: Learn about applying constraints and creating joints in your models.
          </li>
          </ul>
          `,
        }, {
          title: "Advanced Fusion 360 Techniques",
          description: `
          <ul>
          <li>Continue exploring advanced features, forms, and basic simulations in Fusion 360.         
          </li>
          </ul>
          `,
        },

      ],
    },

    // Envisage
    {
      club: "Team Envisage",
      title1: "Gamecraft: Unleash Your ##Inner Game Dev!",
      title: "Gamecraft: Unleash Your Inner Game Dev!",
      email: "envisageiitmadras@gmail.com",
      slot: "E",
      links: [
        {
          name: "Whatsapp",
          link: "https://chat.whatsapp.com/I491vu75opALURBiRPhfwt",
        },
      ],
      time: "5:00 PM - 7:30 PM (Mon, Wed, Fri)",
      poster: Envisage,
      description:
        `This course is your gateway to the exciting world of game development! Over the next 7 sessions, you'll embark on a hands-on journey where you'll learn the fundamental concepts and tools needed to bring your game ideas to life.
        Whether you're a complete beginner or have some prior experience, this course caters to all skill levels. We will guide you through everything you need to know, from core game design principles to programming and 3D modeling.
        `,
      id: "team-envisage",
      fulldesc: `
      <h2>Course Description:</h2>
      This course is your gateway to the exciting world of game development! Over the next 7 sessions, you'll embark on a hands-on journey where you'll learn the fundamental concepts and tools needed to bring your game ideas to life.
      Whether you're a complete beginner or have some prior experience, this course caters to all skill levels. We will guide you through everything you need to know, from core game design principles to programming and 3D modeling.
      <h2>What will you do:</h2>
      Explore core game development concepts like design, programming, and art.
      Learn to use industry-standard tools: Unity for game creation and Blender for 3D modeling.
      Create your own 3D models and implement basic game mechanics.
      Gain a foundational understanding of 2D game development with a brief introduction to Pygame.
      <h3>This course is perfect for:</h3>
      Beginners with no prior game development experience.
      Aspiring game developers who want to learn the basics quickly.
      Anyone who wants to explore the creative world of game design.
      <h3>By the end of this course, you'll be able to:</h3>
      Design and build a playable 3D game using Unity and Blender.
      Understand the fundamental principles of game development.
      Gain the confidence to continue learning and creating your own games.
      
      <h3>Software Requirements:</h3>
      Download and install Unity3D, Pygame, a Code Editor, and Blender before the course begins.
      
        `,
      sessionwise: [
        {
          title: " Introduction & Setting Up",
          description: `
          <ul>
          <li>Welcome and Introductions: The instructor will introduce themself and the course outline.
          </li>
          <li>Game Development Fundamentals: We'll discuss core concepts like game design, programming, and art in the context of game creation.</li>
          <li>
          Software Installation: We'll walk you through downloading and installing the necessary software: Unity3D, Pygame, and Blender.
          </li>
          <li>
          Unity Interface Overview: Get familiar with the Unity interface, including the Hierarchy, Inspector, Scene view, and Game view. This hands-on session will guide you through navigating the workspace.
          </li>
          
          
          <ul>
          <h3>Assignment:</h3>
          <ul>
          <li>Briefly research and write a paragraph about different genres of video games (e.g., Role-Playing Games, Strategy Games, Puzzle Games).
          
          </li>
          <li>
          Explore the Unity interface on your own and try creating a new project.
          </li>
          </ul>
          `
        },
        {
          title: "Introduction to Game Development & Pygame",
          description: `
          <ul>
          <li>Game Design Fundamentals: Explore core concepts of game design like mechanics, dynamics, and aesthetics.
          
          </li>
          <li>Introduction to Pygame: Learn the basics of Pygame, a popular library for creating 2D games in Python.</li>
          <li>Building a Simple 2D Game: Participants will create a basic 2D game in Pygame (e.g., a moving object controlled by the keyboard).</li>
          </ul>
          <h3>Assignment:</h3>
          <ul>
          <li>Explore online resources to learn more about Pygame and experiment with creating different variations of the basic 2D game.
          </li>
          <li>
          Create a simple game with your chosen theme in Pygame.</li>
          </ul>
          `
        }, {
          title: "Blender Introduction & 3D Modelling",
          description: `
          <ul>
          <li>Blender Interface Overview: Learn the basic layout of Blender for navigation and object manipulation.
          
          
          </li>
          <li>Creating Simple 3D Models: Focus on creating basic geometric shapes like cubes, spheres, and cylinders for your Unity game.</li>
          <li>Object Transformation & Editing: Learn how to move, rotate, scale, and edit the created models. This session will involve hands-on practice manipulating objects in Blender.</li>
          <li>Introduction to Blender Animation (Optional): Briefly introduce the concept of animation in Blender, explaining keyframes and the timeline.</li>
          </ul>
          <h3>Hands-On Practice:<h3>
          <ul>
          <li>In Blender, practice creating different variations of the basic shapes covered in class (cube, sphere, cylinder).
          
          </li>
          <li>Try experimenting with combining these shapes to form slightly more complex models that could be used in your game (e.g., a simple house, a tree).</li>
          </ul>
          `
        }, {
          title: " Blender Texturing & Animation",
          description: `
          <ul>
          <li>Simple Texturing in Blender: Explore basic techniques for applying textures to the created models (using free textures is recommended).
          
          
          </li>
          <li>Blender Animation: This session dives deeper into animation concepts:
          <ul>
          <li>Keyframes and the Timeline in detail.</li>
          <li>Advanced animation techniques like creating walking cycles and jumping animations.</li>
          </ul></li>
          <li>Creating Animations: Participants will create more complex animations for their models in Blender (e.g., a character walking, rotating object with multiple parts).</li>
          <li>Preparing Models for Unity: Learn about optimization techniques for models before exporting to Unity (e.g., reducing polygon count, assigning materials).</li>
          </ul>
          <h3>Hands-On Practice:</h3>
          <ul>
          <li>Following an online tutorial (optional), create a more intricate model in Blender with detailed animation and textures suitable for your game concept.</li>
          <li>Ensure your models are optimized for export to Unity using the techniques covered in class.</li>
          </ul>          
          `
        }, {
          title: "Building the 3D Game in Unity (Part 1) & Importing Models",
          description: `
          <ul>
          <li>Unity Components: We'll introduce essential components like GameObjects, Transforms, Colliders, and Rigidbody that are fundamental for building your game in Unity.
          </li>
          <li> Importing Models from Blender: Learn the process of importing the prepared models with animations from Blender into a new Unity project.</li>
          <li>Creating the Game Environment: Start building the level for your 3D game using the imported models with animation and basic shapes. Explore adding simple lights and background elements.</li>
          <li>Scripting Fundamentals (C#): Begin with a basic introduction to C# scripting in Unity, focusing on essential concepts like variables and functions.</li>
          </ul>`
        }, {
          title: " Building the 3D Game in Unity (Part 2)",
          description: `
          <ul>
          <li>Unity Components: We'll introduce essential components like GameObjects, Transforms, Colliders, and Rigidbody that are fundamental for building your game in Unity.
          
          </li>
          <li>Creating the Game Environment: Start building the level for your 3D game using basic shapes or importing simple assets (free assets recommended). This session will provide hands-on experience constructing the game world.</li>
          <li>Scripting Fundamentals (C#): Begin with a basic introduction to C# scripting in Unity, focusing on essential concepts like variables and functions that will allow you to control elements within your game.</li>
          </ul>
          <h3>Hands-On Practice:</h3>

          <ul>
          <li>Based on your chosen 3D game idea that incorporates animation, sketch a more detailed level layout or storyboard showcasing how the animations will be used within the game (e.g., platforms that move with animations, enemies with attack animations).</li>
          <li>In Unity, experiment with positioning, rotating, and triggering the animations of your imported models to create a basic interactive game environment.</li>
          <li>In Unity, try creating a few basic scripts that modify object properties (e.g., change color, position). This will give you a taste of how scripting can affect your game.</li>
          </ul>`
        },
        {
          title: "",
          description: `
          <ul>
          <li>Implementing Player Movement: Use C# scripts to control player movement within the game environment using keyboard or mouse input. We'll guide you through the process of scripting player movement.
          </li>
          <li>Adding Game Mechanics: Introduce basic game mechanics relevant to your chosen 3D game (e.g., simple enemy movement, basic scoring system). We'll discuss various mechanics you can implement to make your game more engaging.</li>
          <li>User Interface (UI) Elements: Briefly introduce creating simple UI elements like text displays or buttons in Unity. Learn how to display information and interact with the game through UI elements.</li>
          <li>Course Wrap-up & Next Steps: Discuss resources for further learning in both Unity3D and Blender, answer any questions you may have, and provide guidance for continuing your game development exploration.</li>
          </ul>

          <h3>Final Assignment:</h3>

          <ul>
          <li>Develop a simple, playable 2D game in Pygame.
         
          
          
          </li>
          <li> Model, Texture, Rig and Animate the 3D Model covered in the sessions.</li>
          <li>Develop a playable 3D game in Unity using the concepts learned throughout the course.</li>
          
          
          <li>
          The game should incorporate the following:
          <ul>
          <li>Models you created in Blender during the course.</li>
          <li>Basic player movement mechanics (e.g., using keyboard or mouse input).</li>
          <li>A simple game environment or level.</li>
          <li>(Optional) A basic scoring system or objective to make the game more engaging.</li>
          <li>Extra Points for adding something new to the game.</li>
          </ul>
          </li>
          </ul>
          `
        },

      ],
    },


    //elec
    {
      club: "Electronics Club",
      title1: "Summer##tronics",
      title: "Summertronics",
      slot: "A",
      email: "elecclub.cfi@gmail.com",
      links: [
        {
          name: "Whatsapp",
          link: "https://chat.whatsapp.com/IZ3rpkTVIwqF6N99JfDUgF",
        },
      ],
      time: "10:30 AM - 1 PM (Mon, Wed, Fri)",
      id: "electronics-club",
      poster: Electronics,
      description:
        "Unleash the opportunity to get proficiency in microcontroller programming using C++ and Micropython, Hands on projects in TinkerCad and Wokwi, learn to make a circuit diagram and compact it in a PCB using EasyEDA and fundamentals of digital electronics making your electronic devices work in a simulation software.",
      fulldesc: `<h1>Arena 1: Micontroller`,
      sessionwise: [
        {
          title: "Introduction to Microcontrollers",
          description: `
          <ul>
          <li>What is a Microcontroller, how is it different from a SBC etc..
          </li>
          <li> Introduction to various sensors and other peripherals(not many because of time constraint)</li>
          <li>Hands on simulation with Tinkercad and Wokwi</li>
          <li>Working with arduino and esp32 in simulation softwares</li>
          </ul>
        `,
          session_nums: "1"
        },
        {
          title: "Communication protocols",
          description: `
          <ul>
          <li>Explaining communication protocols and demonstrating them. 
          </li>
          <li>SPI, I2C explanation with simulation</li>
          </ul>
        `,
          session_nums: "2"
        },
        {
          title: "Integrating of peripherals/Demonstration of Wifi and bluetooth capabilities and oled display",
          description: `
          <ul>
          <li>Using esp32 demonstration of a game or a real life working model
          </li>
          <li>OR Demonstration of Wifi and bluetooth capabilities and oled display with simulation</li>
          </ul>
          <h1>Arena 2 - Digital Systems </h1>
        `,
          session_nums: "3"
        },
        {
          title: "",
          description: `
          <ul>
          <li>Introduction to Binary numbers and their arithmetic operations
          </li>
          <li>Introduction to Logic Gates.</li>
          <li>Simulation in Logisim</li>
          <li>Introduction to K-Maps, Min terms, Max terms.</li>
          </ul>
          
        `,
          session_nums: "1"
        },
        {
          title: "",
          description: `
          <ul>
          <li>Explaining them a simple half adder
          
          
          
          </li>
          <li>Designing a half adder.</li>
          <li>Telling them on how to upgrade this to full adder (1-bit)</li>
          <li>Upgrading 1-bit to multiple bits</li>
          </ul>
          <h1>Arena 3 - Signal Processing</h1>
          `,
          session_nums: "2"
        },
        {
          title: "",
          description: `
          <ul>
          <li>What is a Signal?
          </li>
          <li>Introduction to Matlab, plotting signals and syncing it with a time vector.</li>
          <li>Basic outline of general Signal Processing systems</li>
          <li>What is Convolution?</li>
          <li>Convolution of two signals in Matlab.
          
          </li>
          <li>Introduction to Fourier Series.</li>
          </ul>
        `,
          session_nums: "1"
        },
        {
          title: "",
          description: `
          <ul>
          <li>Recap of Fourier series.
          </li>
          <li>Demonstration of Fourier series in Matlab.</li>
          <li>Introduction to Fourier Transforms.</li>
          <li>How does Fourier transform occur in Matlab?</li>
          <li>Demonstration.</li>
          </ul>
        `,
          session_nums: "2"
        },
        {
          title: "",
          description: `
          <ul>
          <li>What is a Filter?
          </li>
          <li>General types of Filter.</li>
          <li>What is White Noise Filter?</li>
          <li>Demonstration.</li>
          </ul>
        `,
          session_nums: "3"
        },
      ]


    },

    //AI
    {
      club: "AI Club ",
      title1: "Intro to ##AI",
      title: "Intro to AI",
      email: "aiclubcfi@smail.iitm.ac.in",
      links: [
        {
          name: "Whatsapp",
          link: "https://chat.whatsapp.com/Gkf9IUwYwjF5GDy3NB4fKA",
        },
        {
          name: "linktree",
          link: "https://linktr.ee/AIClubIITM",
        },
      ],
      poster: AI,
      description:
        "We will be offering an exciting, hands-on learning adventure spread across nine dynamic sessions. Participants will dive deep into the fascinating world of artificial intelligence, mastering Python programming, data preprocessing, machine learning algorithms, deep learning, and natural language processing. The course is designed to be accessible for complete beginners while still covering complex and advanced topics.",
      fulldesc:
        `<h3>Introduction</h3>
      We will be offering an exciting, hands-on learning adventure spread across nine dynamic sessions. Participants will dive deep into the fascinating world of artificial intelligence, mastering Python programming, data preprocessing, machine learning algorithms, deep learning, and natural language processing. The course is designed to be accessible for complete beginners while still covering complex and advanced topics.
            <h3>Requirements </h3>
            Laptop or Computer

            `,
      id: "analytics-club",
      slot: "E",
      time: "5:00 PM - 7:30 PM (Mon, Wed, Fri)",
      sessionwise: [
        {
          title: "Introduction to Python and OOP Concepts",
          description: `
          <ul>
          <li>Introduction to the basics of Python programming.
          
          
          </li>
          <li>Understanding object-oriented programming (OOP) principles.</li>
          <li>practice with classes, objects, inheritance, and polymorphism.</li>
          </ul>
        `,
        },
        {
          title: "Data Analysis with Numpy, Pandas, and Data Visualization with Matplotlib",
          description: `
          <ul>
          <li>Essentials of data manipulation using Numpy and Pandas.</li>
          <li>Techniques for data preprocessing and cleaning.</li>
          <li>Introduction to data visualization using Matplotlib.</li>
          <li>Practical exercises to manipulate and visualize datasets.</li>
          </ul>
        `,
        },
        {
          title: "Understanding Linear, Logistic, and Polynomial Regression",
          description: `
          <ul>
          <li>Introduction to regression and its importance.
         
          </li>
          <li> Understanding the concepts of linear, logistic, and polynomial regression.</li>
          </ul>
        `,
        },
        {
          title: "Exploring KNN, SVM, and Naive Bayes",
          description: `
          <ul>
          <li>Deep dive into K-nearest neighbors (KNN), support vector machines (SVM), and Naive Bayes classifiers.
          
          
          
          </li>
          <li>Understanding the mathematical foundations and applications of these algorithms.</li>
          <li>Practical implementation of KNN, SVM, and Naive Bayes using Python.</li>
          <li>Analyzing the performance of different classifiers.</li>
          </ul>
        `,
        },
        {
          title: "Decision Trees, Ensemble Methods, and Random Forest",
          description: `
          <ul>
          <li>Introduction to decision trees and their working principles.</li>
          <li>Exploring ensemble methods like bagging and boosting.</li>
          <li>Detailed study of the Random Forest algorithm.</li>
          <li>Build and evaluate decision trees and random forests to compare performance.</li>
          </ul>
        `,
        },
        {
          title: "Introduction to Deep Learning, Neural Networks, and Pytorch Basics",
          description: `
          <ul>
          <li>Overview of deep learning and its significance.
          </li>
          <li>Understanding neural networks and their architectures.</li>
          <li>Introduction to Pytorch and its fundamental concepts.</li>
          <li>Building simple neural networks using Pytorch.</li>
          </ul>
        `,
        },
        {
          title: "Optimizers, Regularization, Normalization, and Batch Gradient Descent",
          description: `
          <ul>
          <li>Exploring various optimization techniques for neural networks.
          </li>
          <li>Understanding regularization and normalization methods.</li>
          <li>Implementing batch gradient descent.</li>
          <li>Data preprocessing techniques for deep learning models.</li>
          </ul>
        `,
        },
        {
          title: "Convolutional Neural Networks (CNN)",
          description: `
          <ul>
          <li>Introduction to Convolutional Neural Networks (CNN) and their applications.
          
          </li>
          <li>Theory behind CNNs, including convolutional layers, pooling layers, and fully connected layers.
          </li>
          <li>Example Implementation of CNNs. </li>
          </ul>
        `,
        },
        {
          title: "Natural Language Processing (NLP)",
          description: `
          <ul>
          <li>Basics of Natural Language Processing (NLP). 
          </li>
          <li>Understanding text preprocessing techniques, such as tokenization and stemming.</li>
          <li>Introduction to RNNs and LSTMs</li>
          <li>Practical implementation of NLP models using Python libraries.</li>
          </ul>
        `,
        },

      ]
    },
    // Bio tech
    {
      club: "Biotech Club",
      id: "biotech-club",
      email: "biotechcfi@gmail.com",
      description:
        "During the courses, you'll learn about lab-grown organs that could revolutionize transplants, explore biotech innovations that fought COVID-19, and decode the molecules orchestrating the fascinating behaviors of animals. Acquire valuable skills, deepen your knowledge, and get a head start in applying what you learn to solve real-world problems.",
      title1: "Unlocking Life's Secrets: ##Ethology, Viruses, and Bio-printed Solutions",
      title: "Unlocking Life's Secrets: Ethology, Viruses, and Bio-printed Solutions",
      links: [
        {
          name: "Whatsapp",
          link: "https://chat.whatsapp.com/H96jWKLfgPE0aOlQOfuklH",
        },
      ],
      slot: "A",
      poster: Biotech,
      time: "10:30 AM - 1 PM (Mon, Wed, Fri)",

      fulldesc: `
      Ready to dive into the groundbreaking world of biotech? Join the BIOTECH CLUB's summer courses and transform your understanding of modern science. 

From learning about lab-grown organs that could revolutionise transplants, exploring the biotech innovations that fought COVID-19, or decoding the fascinating behaviours of animals, our sessions offer hands-on, real-world applications tailored to first-year college students. Gain valuable skills, deepen your knowledge, and get a head start in applying your knowledge to solve real-world problems.

<h1>3D printing Organ Systems</h1>
From Petri Dish to Patients: The Future of Medicine with Lab-Grown Organs
<h2>Course Description: </h2>
Explore the cutting-edge world of lab-grown organs and their transformative potential in modern medicine. From foundational concepts to real-world applications, this course delves into the science and ethical considerations of organ regeneration, providing a comprehensive overview of this groundbreaking field.

<h1>Our Battle with COVID</h1>
How We Used Special Techniques in Biotech to Fight a Pandemic

<h2>Course Description: </h2>
Gain insights into the crucial role of biotechnology in combating the COVID-19 pandemic. This course covers the basics of biotech, the specifics of SARS-CoV-2, testing methodologies, and the development of vaccines, providing a detailed understanding of the scientific response to a global health crisis.

<h1>Ethology and the genes that Make you YOU</h1>
 
<h2>Course Description:</h2>
Delve into the fascinating study of animal behavior (humans are just animals after all) with a focus on core ethological concepts. This course explores the causation, development, function, and evolution of behavior, offering a comprehensive introduction to the field through theory and case studies.
        `,
      sessionwise: [
        {
          title: "Foundation and Exploration",
          description: `
          Introduction:
          <ul>
          <li>Briefly discuss the organ transplant waitlist crisis and its impact on patients.</li>
          <li>Introduce the concept of lab-grown organs as a potential solution.</li>
          </ul>


          Stem Cells:
          <ul>
          <li>Explain the role of stem cells in organ development and regeneration.</li>
          <li>Discuss different types of stem cells and their potential for organ creation.</li>
          </ul>


Organoids:
          <ul>
          <li>Introduce the concept of organoids and their uses in disease modelling and drug testing.</li>
          <li>Showcase real-world examples of organoid research and its applications.</li>
          <li>Introduction to 3D bioprinting.</li>
          </ul>
        `,
          session_nums: "1.1"
        },
        {
          title: "Applications",
          description: `
          Challenges:
          <ul>
          <li>Discuss the complexities of replicating functional organs in a lab.</li>
          </ul>
          
          Success Stories:
          <ul>
          <li>Highlight successful examples of lab-grown tissues and simple organs.</li>
          <li>Ethical Considerations:</li>
          </ul>
        `,
          session_nums: "1.2"
        },
        {
          title: "Future",
          description: `
          Personalized Medicine:
          <ul>
          <li>Discuss the potential for using a patient's own cells to grow customized organs, reducing the risk of organ rejection.</li>
          <li>Explain how this could revolutionize organ transplantation and personalized medicine.</li>
          </ul>
The Impact on Healthcare:
<ul>
          <li>Discuss the potential changes in organ donation, patient wait times, and treatment options.</li>
          <li>Detailed discussion about the use of organoids in drug testing and disease modeling with real-life examples.</li>

          </ul>


Case Study:
          <ul>
          <li>To deepen the understanding and explore more into the topic, participants will be given a case study as homework.</li>
          </ul>
        `,
          session_nums: "1.3"
        },
        {
          title: "Introduction to Biotech:",
          description: `
          SARS-CoV-2 Overview:



<ul>
<li>Outline of SARS-CoV-2, highlighting its distinctive features crucial for detection and immunization.
</li>
<li>Explanation of the virus's genetic material (RNA), the significance of the spikes, and how the virus binds to human cells.</li>

</ul>
RT-PCR Testing:
          <ul>
          <li>History and elaboration of the RT-PCR technique.</li>
        
          </ul>
        `,
          session_nums: "2.1"
        },
        {
          title: "",
          description: `
          Drawbacks of PCR Testing:






          <ul>
          <li>Discussion of limitations and alternative techniques (DETECTR and SHERLOCK tools).</li>
          </ul>Case Study:
          <ul>
          <li>Detailed case study on the UC Berkeley team's efforts in fighting the pandemic.</li>
          </ul>Vaccine Mechanisms:
          <ul>
          <li>Mechanisms of vaccines, including newer types such as RNA and DNA vaccines.</li>
          </ul>
        `,
          session_nums: "2.2"
        },
        {
          title: "",
          description: `
          Vaccines:


          <ul>
          <li>Detailed discussion on Covishield and Covaxin, especially their use in India.</li>
          </ul>Bioinformatics:
          <ul>
          <li>Rudimentary bioinformatics session on Rosalind, with proper explanations and coding instructions for beginners.</li>
          </ul>
        `,
          session_nums: "2.3"
        },
        {
          title: "Introduction",
          description: `
          <ul>
          <li>Importance of studying core animal behavior.
         
          </li>
          <li> Basics of Animal Behavior: Causation and Ontogeny.</li>
          </ul>
        `,
          session_nums: "3.1"
        },
        {
          title: "Function",
          description: `
          <ul>
          <li>Introduction to behavioral functions.
          </li>
          <li>Topics include Altruism, Kin Selection, Inclusive Fitness, and the Hamiltonian equation.</li>
          <li>Case study on Sexual Dimorphism.</li>
          <li>Example linking Game Theory.</li>
          <li>Basics of evolution based on natural selection.</li>
          </ul>
        `,
          session_nums: "3.2"
        },
        {
          title: "",
          description: `
          <ul>
          <li>Behavioural Genetics
          
          </li>
          <li>Behavioural Epigenetics</li>
          </ul>
        `,
          session_nums: "3.3"
        },
      ]
    },

    //PC1
    {
      club: "Programming Club",
      title1: "ADaPT - ##Algorithms, Data structures and Problem-solving Techniques",
      title: "ADaPT - Algorithms, Data structures and Problem-solving Techniques",
      email: "programmingclubiitm@gmail.com",
      links: [
        {
          name: "Linktree",
          link: "https://linktr.ee/PC_23_24",
        },
      ],
      poster: Programming2,
      time: "5:00 PM - 6:30 PM (Tue, Thu, Sat)",
      description:
        "This camp offers an introduction to competitive programming in C++, covering essential techniques, data structures, and algorithms. Sessions are designed to build a strong foundation and enhance your skills in competitive programming. Each session will be followed by a well curated problem set on the respective topics. The camp will also include two codeforces-style contests and a session on a few advanced topics (last session). ",
      slot: "F",
      id: "programming-club",
      fulldesc: `This camp offers an introduction to competitive programming in C++, covering essential techniques, data structures, and algorithms. Sessions are designed to build a strong foundation and enhance your skills in competitive programming. Each session will be followed by a well curated problem set on the respective topics. The camp will also include two codeforces-style contests and a session on a few advanced topics (last session). 
        `,
      daywise: [
        "Intro to competitive, C++ basic syntax ",
        "Sorting, Time complexity",
        "Greedy and Brute Force",
        "Recursion, Prefix sum and Frequency array",
        "Binary Search, Two pointers",
        "STL Data Structures: ",
        "Modulo Arithmetic and Number theory",
        "Game theory, Bitmasks",
      ],
    },

    //PC2
    {
      club: "Programming Club",
      title1: "Code##Craft",
      title: "CodeCraft",
      email: "programmingclubiitm@gmail.com",
      poster: Programming1,
      links: [
        {
          name: "Linktree",
          link: "https://linktr.ee/PC_23_24",
        },
      ],
      description:
        "This camp provides an introduction to Object-Oriented Programming (OOP) in C++ and essential Git techniques. Participants will learn fundamental OOP concepts and key C++ language features. Additionally, the camp covers crucial Git skills, preparing you for modern development workflows. The program includes mini-tasks on covered topics and features two hands-on projects to apply your knowledge in both domains.",
      slot: "F",
      time: "5 PM - 7 PM (Tue, Thu, Sat)",
      id: "programming-club",
      fulldesc: `This camp provides an introduction to Object-Oriented Programming (OOP) in C++ and essential Git techniques. Participants will learn fundamental OOP concepts and key C++ language features. Additionally, the camp covers crucial Git skills, preparing you for modern development workflows. The program includes mini-tasks on covered topics and features two hands-on projects to apply your knowledge in both domains.
        `,
      daywise: [
        "Introduction to Git",
        "Pointers, structures, stack and heap",
        "Introduction to classes",
        "Overloading, abstraction, encapsulation and polymorphism",
        "Inheritance and virtual functions",
        "Templates",
        "Git advanced topics",

      ],
    },


    //iBot
    {
      club: "iBot Club",
      title1:
        "Mobile Robots: ##From basics to advanced",

      title:
        "Mobile Robots: From basics to advanced",
      email: "ibotcfi@gmail.com",
      links: [
        {
          name: "Whatsapp",
          link: "https://chat.whatsapp.com/FAiU9dXs3Tg8bBXvFelvxw",
        },
      ],
      description:
        "Welcome to an exhilarating adventure in robotics! Join us and discover the fascinating art of creating mobile robots that can explore, navigate, and identify objects. No prior experience is necessary! We will start from the basics.   Don't miss out – secure your spot in the course today and unleash your potential in the world of robotics!",
      id: "ibot-club",
      slot: "B",
      poster: IBot,
      time: "10:30 AM- 1 PM (Tue, Thu, Sat)",
      fulldesc: `
        
Welcome to an exhilarating adventure in robotics! Join us and discover the fascinating art of creating mobile robots that can explore, navigate, and identify objects. No prior experience is necessary! We will start from the basics.   Don't miss out – secure your spot in the course today and unleash your potential in the world of robotics!


<h2>Course Description:</h2>

The course consists of seven sessions and will guide you through the process of building a mobile robot. Each session will be followed by an interesting taskYou will learn to use essential software such as Fusion 360, Tinkercad, Arduino IDE, Simulink, ROS, and OpenCV. Throughout the course, you will gain the knowledge and skills needed to design, control, and code the mobile robot of your choice through assignments and interactive sessions. Students who attend regularly and submit completed tasks on time will receive participation certificates.

<h3>Software Requirements: </h3>

Fusion 360, 
Tinkercad Account, 
Simulink, 
ROS2,
 Gazebo. 

        `,
      sessionwise: [
        {
          title: "",
          description: `
            <ul>
            <li>Lecture: The World of Robotics and Explain Robot’s Anatomy (all domains, but towards more mechanical and electrical), Electronics Fundamentals, Mechanics Fundamentals.
             </li>
            <li> Assignment 1: Robotic System Analysis and Proposing a Mobile Robot For any given Scenario.</li>
            </ul>
         
            `,
        }, {
          title: "",
          description: `
            <ul>
            <li>Lecture: Mechanical Designing of Robot (Using Fusion 360)
             </li>
            <li> Assignment 2:Designing the robot proposed in Assignment 1 in Fusion 360.</li>
            </ul>
         
            `,
        }, {
          title: "",
          description: `
            <ul>
            <li> Lecture:  Tinkercad and Arduino Programming(Using Tinkercad)	
            </li>
            <li> Assignment 3:Implement Arduino programming on the sensors and actuators that are used in the proposal in Assignment 1.</li>
            </ul>
         
            `,
        }, {
          title: "",
          description: `
            <ul>
            <li>Lecture: Control Systems Introduction and Implementation of PID using Transfer Function (Using Simulink)
             </li>
            <li>Assignment 4:Control System Design and PID Tuning for the proposal in Assignment 1.</li>
            </ul>
         
            `,
        }, {
          title: "",
          description: `
            <ul>
            <li>Lecture : Introduction to ROS2  and Simulation in Gazebo(Software)
            </li>
            <li>Assignment 5: Create a basic URDF model for the proposal in Assignment 1, and try to simulate it in Gazebo.</li>
            </ul>
         
            `,
        }, {
          title: "",
          description: `
            <ul>
            <li>Lecture:  Computer Vision Basics and Real-Time Object Tracking in Robotics (Software).
            </li>
            <li>Assignment 6:Real Real-time Object Classification Challenge. (Dataset will be given).</li>
            </ul>
         
            `,
        }, {
          title: "",
          description: `
            <ul>
            <li>Lecture:  Understanding SLAM(Simultaneous localisation and mapping) Sampling Based Planning Algorithms RRT* and the Dijkstra Algorithm.
            </li>
            <li>Assignment 7:Try and implement navigation with the help of Model Predictive Control.</li>
            </ul>
         
            `,
        },
      ]
    },
    //3DP
    {
      club: "3D Printing Club",
      title1: "Sketch to Structure:##Discovering 3D Printing",
      title: "Sketch to Structure: Discovering 3D Printing",
      id: "3d-priting club",

      email: "3dpc.cfi.iitm@gmail.com",
      links: [
        {
          name: "Whatsapp",
          link: "https://chat.whatsapp.com/DVLcFD6MyP9L32HjtHgoaT",
        },
      ],
      slot: "C",
      time: "2:00 PM - 4:30 PM (Mon, Wed, Fri)",
      poster: _3DP,
      description:
        "Buckle up to step into the realm of 3D Printing and Additive manufacturing. Learn various steps involved in 3D Printing starting from 3D modeling to 3D printing and post processing. We’ll be covering all concepts from beginner level so don’t worry about having no prior knowledge. What else are you waiting for ? Join us and make yourself knowledgeable in the field that’s gonna revolutionize the future !!",
      fulldesc: `
      <b>Topics:<b>
      Buckle up to step into the realm of 3D Printing and Additive manufacturing. Learn various steps involved in 3D Printing starting from 3D modeling to 3D printing and post processing. We’ll be covering all concepts from beginner level so don’t worry about having no prior knowledge. What else are you waiting for ? Join us and make yourself knowledgeable in the field that’s gonna revolutionize the future !!


<h3>Course Description:</h3>
This course will be covering the following aspects of 3D Printing:
<ul>
          <li>3D modeling: We'll teach you the basics of Autodesk Fusion 360 and Blender covering concepts like sketching and basic 3D features and examples.</li>
          <li>Slicing: Here, we teach concepts about slicing and g-code and about how to optimize the print by choosing the right set of parameters.</li>
          <li>Choosing and setting up a 3D printer: We'll cover various types of 3D printers and what application each type is used for and how to choose the right type for a particular requirement. We'll also see more on parts of an FDM 3D printer and materials used in 3D printing.</li>
          <li>Post-processing and applications: Learn why additive manufacturing processes require post processing and different techniques used. Also, we'll be covering some fascinating applications of 3D Printing and how it's changing the future.</li>
        </ul>






What will you do:
<ul>
          <li>We'll be covering the basics of 3D Printing and walk you through the processes involved. By the end of this course, you'll be able to model a 3D part, slice it and print it in a 3D printer knowing fully about the various constraints and conditions involved.</li>
        </ul>


This course is perfect for:
<ul>
          <li>College students who want to get into the manufacturing sector can equip themselves with this very demanding skill and make themselves futureproof.</li>
          <li>School students who are curious about knowing how things are made can learn a process that is how manufacturing will be seen in a few decades.</li>
          <li>Anyone who would like to learn about this cool tech and upskill themselves in yet another field.
          </li>
        </ul>

        `,
      sessionwise: [
        {
          title: "Introduction to 3D Printing and 3D Modeling",
          description: `
      <ul>
      <li>3d printing:
      Steps involved in the entire process of creating a 3d printed model.
      
      </li>
      <li>3d modeling:
      <ul>
      <li>Introduction to fusion 360
      </li>
      <li>Basic tools, Creating and editing sketches, usage of constraints etc.</li>
      </ul>
      </li>
      </ul>
      `,
        },
        {
          title: "Advance Fusion 360",
          description: `
      <ul>
      <li>More deeper view into the tools of fusion 360 to create a 3d object.
      
      </li>
      </ul>Assignment: 
      
      <ul>
      <li>Prepare a basic 3d model using fusion 360 (corresponding views will be provided by us)</li>
      </ul>
      `,
        },
        {
          title: "Introduction to Blender Software",
          description: `
      <ul>
      <li>Basic tools, usage of modifiers and different modes available in Blender required to create a 3D model
      
      </li>
      <li>Introduction to Box modeling and demonstration of some models and animations prepared on Blender.
      </li>
      </ul>Assignment:
      
      <ul>
      <li>Recreate a 3D model developed during the session</li>
      </ul>
      `,
        },
        {
          title: "Slicing a 3D model and G-code",
          description: `
      <ul>
      <li>A comprehensive demonstration on how to slice a 3D model and the various parameters to be considered. A detailed explanation of what is g-code, format of g-code, and some of the essential g-codes which are mainly used in 3D printing.</li>
      </ul>
      Assignment<ul>
      <li>Write a report on how a change in layer height, infill density, print speed, temperature, and brim/skirt/raft affects the print time (more details about the assignment will be provided during the lecture). </li>
      </ul>
      `,
        },
        {
          title: "Types of 3D printers",
          description: `
      <ul>
      <li>Choosing the Right 3D Printer and Material: Essential Insights and Tips. Learn the principle of commonly used 3D Printing technologies and materials used for printing in different applications.
      </li>
      </ul>Assignment:
     
      <ul>
      <li> Write a report outlining the best 3D printer and supplies to use for a certain problem statement. (Participants are encouraged to explore different types of printers and problems faced in various sectors)
      </li>
      </ul>
      `,
        },
        {
          title: "Setting up a 3d printer ",
          description: `
      <ul>
      <li>Detailed explanation on various parts of an FDM 3d printer and their uses.
      </li>
      <li>Demonstration on how various parts of the printer should be set up before starting the printing process.
      </li>
      </ul>Assignment:
      
     
      <ul>
      <li> Analyze the working of a 3d printing process other than FDM and write a brief report describing its parts.
      </li>
      </ul>
      `,
        },
        {
          title: " Post-processing of the printed 3D models, applications and problems faced in 3D printing",
          description: `
      <ul>
      <li>A detailed view of post-processing of the printed 3D models in various types of 3D printing.
      
      </li>
      <li>Some of the problems faced while printing a model, and how to overcome them.
      </li>
      <li>Various real-life applications of 3D printing.
      </li>
      </ul>Assignment:
      
      <ul>
      <li>Write a report on an interesting application of 3D printing in about 200 words.
      </li>
      </ul>Final Assignment:
      
      <ul>
      <li>Giving a review on topics learnt from this course describing the different steps of 3D Printing covered in the sessions.</li>
      </ul>
      `,
        },
      ]
    },


  ],
};
export default data;
