const data = {
  description:
    "CFI presents the summer school 2023 in this summer break conducted by all the 13 clubs covering  different areas of Technology, Science, and Engineering!It offers the Freshie Youth, who have a lot to EXPLORE, the chance to learn and experience completely new things in the Open-to-All CFI .For students who aspire to represent IIT Madras at the upcoming Inter IIT Tech Meet, the summer schools will also serve as training ground. Participation shall serve as one of the selection criteria for the contingent.<br />These sessions will be conducted by the club heads and coordinators.An E-certificate will be provided to all the participants who have attended above 80% of the live sessions and have completed all the quizzes and tasks in the registered sessions.<br />Its open for all the students and offered for free of cost.",
  sessions: [
    {
      club: "Biotech Club",
      description:
        "We'll embark on a journey exploring various fields in biotechnology, ranging from cognitive neuroscience to protein modelling. We want to give all participants a flavour of the ongoing ideas in biotechnology.",
      title: "Learn to Think Outside the Petri Dish!",
      slot: "A",
      time: "10:30 AM - 1 PM (Mon, Wed, Fri)",
      fulldesc: `
        Computational Protein Modelling:
        <ul>
          <li> What are proteins? Their uses in the human body and in the environment.</li>
          <li> Structure of proteins - from mRNA sequences to amino acid sequences and other higher-order structures.</li>
          <li> Understanding the thermodynamics of protein folding and visualizations of protein microstates using Monte Carlo simulations.</li>
          <li> Introduction to PyMOL and importing protein structures from PDB, showing them the interface and different visualizations of proteins. Perform structural analysis (bond angle, bond lengths, etc.) on a sample protein.</li>
          <li> Importance of protein visualizations, protein-protein interactions.</li>
          <li> Hands-on project: Modelling protein-protein interactions (SARS-CoV-2 RBD with human ACE-2).</li>
          PyMOL documentation: https://pymol.org/dokuwiki/
        </ul>
        CogNeuro - The science behind decision making:
        <ul>
          <li> The participants will play multiple games (BART, STROOP, etc.) and understand concepts like foraging and decision-making (why do we use experiments to choose, ecological validity).</li>
          <li> Mechanisms of EEG, tACS, tDCS, why do we use these, and what experiments do we use these for.</li>
          <li> Hands-on project: We will simulate electric fields in the brain using SimNIBS.</li>
          <li> We'll explore the challenges of data collection, T1 & T2 weighted images from MRIs.</li>
          SimNIBS 4.0.1 documentation: https://simnibs.github.io/simnibs/build/html/documentation/documentation.html
        </ul>
        Bioprinting:
        <ul>
          <li> What is bioprinting and its application.</li>
          <li> How we use cells in biomaterials to develop bio-ink and use it to bioprint organs.</li>
          <li> 3D and 4D bioprinting simulations and manufacturing techniques.</li>
          <li> Types of bioprinting, in-situ bioprinting, and ethical issues in bioprinting.</li>
        </ul>
        Finding hidden messages in DNA:
        <ul>
          <li> An introduction to replication mechanism in various organisms, and how this can be translated to computer science.</li>
          <li> Given the origin of replication, what is the hidden message saying that replication should start here?</li>
          <li> Using algorithms to find the sequence motifs (DNA A box) in the origin of replication.</li>
          <li> We will find where genome replication begins using straightforward algorithms to do the same.</li>
        </ul>
        `,
    },
    {
      club: "Mathematics Club",
      title: "Dwell into the Basics of Mathematics",
      slot: "A",
      time: "10:30 AM - 1 PM (Mon, Wed, Fri)",
      id: "computer-vision and intelligence club",
      description:
        "Topics like Linear Algebra, Probability and Differential equations form the fundamentals of various topics in different domains. Attending this summer school will give an head start to all the students in their academic journey of IITM.",
      fulldesc: `
        <ul>
        <li><b>Probability:</b>
          <ul>
            <li> What is a random variable? Permutations &amp; Combinations, Conditional Probability: Theorem of Total probability, Bayes' theorem, Independent events.</li>
            <li> Common distributions like Poisson, Binomial, Bernoulli, Normal, etc.</li>
            <li> Expected Value of Random variable, Variance and higher moments, Theorem E[X] = E[E[X | N]], Central Limit Theorem.</li>
            <li> Markov Chains: absorption, expected number of moves till we reach absorption state, etc.</li>
          </ul>
        </li>
        <li><b>Linear algebra:</b>
          <ul>
            <li> Matrices, Nullspace, Abstract vector space (finite dimensional), 4 vector spaces: Columnspace, Rowspace, Nullspace (kernel), and Reft Nullspace.</li>
            <li> Rank and nullity, rank-nullity theorem, Orthonormal basis and basis transformation.</li>
            <li> Diagonalization, e^{Matrix} and application in solving DEs and recursions.</li>
          </ul>
        </li>
        <li><b>Differential Equations:</b>
          <ul>
            <li> Linear Constant Coefficient Differential Equations, homogeneous and non-homogeneous DEs, solving DEs using power series.</li>
          </ul>
        </li>
        <li><b>Coding applications:</b>
          <ul>
            <li> Usage of numpy in Python for linear algebra, Use of scipy in Python for differential equations</li>
          </ul>
        </li>
      </ul>
        `,
    },
    {
      club: "Electronics Club",
      title: "Voltage Voyage",
      slot: "A",
      time: "10:30 AM - 1 PM (Mon, Wed, Fri)",
      id: "electronics-club",
      fulldesc:
        "Unleash the opportunity to get proficiency in microcontroller programming using C++ and Micropython, Hands on projects in TinkerCad and Wokwi, learn to make a circuit diagram and compact it in a PCB using EasyEDA and fundamentals of digital electronics making your electronic devices work in a simulation software.",
    },

    {
      club: "Aero Club",
      title: "Intro to Aerial Robotics and Aeromodelling",
      description:
        "This summer Aero Club, IITM will be conducting sessions on ROS and other softwares, on which much of Aerial Robotics is built as well as the Design of airplane wing using XFLR5.Register for the course right now for an exciting journey into drones and planes",
      id: "aero-club",
      slot: "B",
      time: "10:30 AM- 1 PM (Tue, Thu, Sat)",
      fulldesc: `
        <ul>
        <li><b>Aerial Robotics:</b>
          <ul>
            <li>Introduction to drones</li>
            <li>Installation and tutorials of software's like ROS, Gazebo</li>
            <li>Exploring the environment and teaching the usage of these software</li>
            <li>Integration of these various software's for simulating navigation</li>
            <li>Basics of C and Python programming</li>
            <li>Tasks based on what is taught</li>
          </ul>
        </li>
        <li><b>Aeromodelling:</b>
          <ul>
            <li>Basics about model airplanes, its types, and components</li>
            <li>Intro to the basic terms during the summer school and the concepts and ideas in aeromodelling</li>
            <li>Basic electronics and materials used</li>
            <li>Installation, Exploring the environment and teaching the usage of XFLR5</li>
            <li>Wing analysis and airfoil design</li>
            <li>Tasks based on what is taught</li>
          </ul>
        </li>
      </ul>
        `,
    },
    {
      club: "Horizon",
      title: "Into, Across and Beyond the Astroverse",
      description:
        "This Summer School explore the Quantum Realm, Special Relativity, get to know the physics behind the particles, use of Statistical Physics in ML and how ML can be used in the Astronomy.",
      id: "horizon",
      slot: "B",
      time: "10:30 AM- 1 PM (Tue, Thu, Sat)",
      fulldesc: `
        <ul>
        <li><b>Particle Physics Odyssey:</b> Introduction to particle and nuclear physics. Neutrino physics and recent experimental results/developments.</li>
        <li><b>Quantum Physics - Counterintuitively Intuitive:</b> We introduce the Counterintuitive ideas that are at the heart of Quantum mechanics and explore them through a mix of thought experiments and math.</li>
        <li><b>Quantum Compute with us:</b> We will cover the fundamentals of Quantum Computing theory covering some cool examples, a bit of linear algebra, how they can be built, and a fundamental question about quantum theory.</li>
        <li><b>Basic Python for Physics and Astronomy:</b> General Python concepts needed for physics and astronomy.</li>
        <li><b>Data Driven Astronomy:</b> Using Data Science concepts to study exoplanets.</li>
        <li><b>Statistical Physics of learning:</b> We will cover how concepts of statistical physics can be applied to learning theory and how thermodynamics is related to it. We'll cover common statistical mechanics models used in Neural Networks and Deep Learning.</li>
        <li><b>Introduction to Special Relativity:</b> We will take the first step in exploring the fascinating interplay between space and time, delving into the concept of time dilation and the relativistic effects that occur as objects approach the speed of light.</li>
        </ul><br/>
        We will have assignments of each topic.
        `,
    },
    {
      club: "iBot Club",
      title:
        "RoboMaze: Constructing and Training Robots to Tackle Challenging Mazes",
      description:
        "Embark on an Exciting Journey as iBot Club Presents an *Interactive 9-Session* Summer School, Unleashing the Secrets of Maze-Solving Robots! Learn the Art of Building Intelligent Bots that Navigate Mazes with Precision and Problem-Solving Prowess by Engaging in *Hands-On Offline Sessions* and an *Electrifying Maze Solving Tournament*.",
      id: "ibot-club",
      slot: "B",
      time: "10:30 AM- 1 PM (Tue, Thu, Sat)",
      fulldesc: `
        <b>Background:</b> The history of maze solving and robotics is intertwined, showcasing the evolution of intelligent machines and their ability to navigate complex mazes. In the mid-20th century, researchers developed basic maze-solving robots using analog circuitry. As computing technology advanced, digital computers and sophisticated sensors were integrated into maze-solving robots, improving their perception and decision-making. Path planning algorithms and machine learning techniques further enhanced their capabilities. Today, maze-solving robots continue to serve as testbeds for robotics research and education, with advancements in sensor technology and computation leading to more accurate and efficient maze navigation.<br/>

        For more context look into this video about Micromouse, the fastest maze-solving competition on Earth. Link: https://youtu.be/ZMQbHMgK2rw<br/>

        <b>Summer school details:</b><br/>

        Summer school by iBot club will consist of 9 online sessions, to teach concepts spanning 3 modules (mechanical, electronics and software) which will aid each 1 of you to create a maze solving robot. Each session will be followed by a task (taking no more than an hr. even for absolute beginners) which has to be submitted within the respective deadlines. Topics covered in the different sessions are mentioned in the syllabus.<br/>

        Students with regular attendance and on-time submission of completed tasks will be able to participate in the offline Hands-on sessions held in August 1st week. Here students will be provided with robotic kits for free where they will construct and train a general maze solving robot. Summer school ends with an electrifying Maze Solving Tournament where teams of students can compete to finish a maze the fastest.<br/>
        `,
    },

    {
      clubs: ["Product Design Club", "Team Sahaay"],
      title: "Tech.Design.Biz",
      slot: "C",
      time: "2:00 PM - 4:30 PM (Mon, Wed, Fri)",
      ids: ["product-design club", "team-sahaay"],
      description:
        "This intensive 3-week program will empower you with the skills and knowledge at the intersection of technology, design, and business, unlocking your potential to create innovative solutions. From mastering design tools to understanding market dynamics, this workshop will equip you with the tools and mindset to thrive in the digital age.",
      fulldesc: `
        In this dynamic and hands-on Summer School session, we will explore the synergies between technology, design, and business, offering a comprehensive learning experience that will enable you to craft innovative solutions. Each class will be a blend of theory, practical exercises, and real-world case studies, providing you with the practical skills and knowledge to tackle complex challenges.<br/><br/>
        <b>Topics Covered:</b><br/>
        1: Introduction to Product Design<br/>
        2: Prototyping and Iterative Design; Part 1- Fusion 360<br/>
        3: Crafting and Engaging User Experiences <br/>
        4: Prototyping and Iterative Design; Part 2- Figma<br/>
        5: Product Management: Balancing Vision, Requirements, and Stakeholder Expectations<br/>
        6: Sell me this pen! : Product to Market
        7: Intro to Python<br/>
        8: Project Pitch and Evaluation<br/><br/>

        <b>Activities</b>
        <ul>
          <li>Design Challenges and Group Projects: Immerse yourself in exciting design challenges and collaborative group projects that will put your skills to the test. Work alongside fellow participants to ideate, prototype, and iterate on innovative product solutions.</li>
        </ul>
        <li>Hands-on Prototyping Exercises: Get hands-on experience in prototyping tools like Fusion 360 and Figma. Perfect your knowledge with the after-session exercises.</li>
        <li>Interactive Discussions and Brainstorming Sessions: Engage in thought-provoking discussions and stimulating brainstorming sessions. Explore the intersection of technology, design, and business as you dive deep into relevant topics, share insights, and exchange ideas. </li>
        <li>Final Project Showcase and Evaluation: Test your newly acquired skills and knowledge with a final showcase. Present your product idea and demonstrate your understanding of the concepts covered during the workshop. The team with the most outstanding product will be awarded e prestigious "Best Project Certificate" as a testament to their exceptional work.</li>
        `,
    },

    {
      club: "3D Printing Club",
      title: "Summer School '23 3D Printing club",
      id: "3d-priting club",
      slot: "D",
      time: "2:00 PM - 4:30 PM (Tue, Thu, Sat)",
      description:
        "Get ready to build the future layer by layer. Ctrl+P is past, Ctrl+3DP is here to last.",
      fulldesc: `
        <ul>
          <li>Introduction to 3D Printing: Basics, technologies, and applications</li>
          <li>3D Modeling and Design: Learning CAD software for creating 3D models</li>
          <li>3D Printing Materials: Exploring different materials used in 3D printing</li>
          <li>Print Preparation: Understanding slicing software and optimizing print settings</li>
          <li>Post-Processing Techniques: Finishing and refining printed objects</li>
          <li>Advanced Printing Techniques: Multi-color, multi-material, and support structures</li>
          <li>Design for 3D Printing: Optimization techniques for successful prints</li>
          <li>3D Scanning and Reverse Engineering: Techniques for capturing and reproducing physical objects</li>
          <li>Industrial Applications of 3D Printing: Case studies and real-world examples</li>
          <li>Future Trends in 3D Printing: Exploring emerging technologies and applications</li>
        </ul>
        `,
    },
    {
      club: "WebOps and Blockchain Club",
      title: "DevLaunch: App Dev X Blockchain",
      slot: "D",
      time: "2:00 PM - 4:30 PM (Tue, Thu, Sat)",
      id: "webops-and blockchain club",
    },

    {
      club: "AI Club (Analytics/CVI)",
      title: "Intro to ML, DL, and Computer Vision",
      description:
        "A series of 9 sessions that span the foundation topics of Artificial Intelligence, covering everything from scratch. Discover the limitless possibilities of AI with us!",
      id: "analytics-club",
      slot: "E",
      time: "5:00 PM - 7:30 PM (Mon, Wed, Fri)",
    },
    {
      club: "envisageiitmadras@gmail.com",
      title: "Envisage - Into the Gameverse",
      slot: "E",
      time: "5:00 PM - 7:30 PM (Mon, Wed, Fri)",
      description:
        "Get ready to take a leap of faith into the world of Game Development with this course on Blender and Unity that will give you all the tools to dive into the Gameverse!",
      id: "team-envisage",
      fulldesc: `
          Alright, let's do this one more time.<br/>
          Our name is Envisage, and for the last 12 years, we've been the one and only Techno-entertainment team in IIT Madras, bringing you projects that bring you the best of both worlds.<br/>
          Today, we bring to you a dive into the multiverse of game development, with a course in Blender and Unity!<br/>
          Unity is a cross platform game development engine that is widely considered to be one of the most user friendly game engines, and was used to make several industry defining games like Ori and the Will of the Wisps, Cuphead, Genshin Impact and many more! In this course, you will use Unity to script player movement, physics, interactions, create a UI and basically make learn how to make the framework of the game that you can expand to your heart's content!<br/>
          Blender is an open source 3D modelling, animation, video editing and compositing software, truly one of the most versatile software available to anyone! But in this course, you will primarily learn how to model environments, characters and prepare both of them for use in your games in Unity.<br/>
          How will you know that you're ready?<br/>
          You won't.<br/>
          That's all it is.<br/>
          A leap of faith.<br/>
        `,
    },

    {
      club: "Programming Club",
      title: "CodeCrafts",
      description:
        "Elevate your coding prowess at our Software Dev Camp and shape the future of technology",
      slot: "F1",
      time: "5:00 PM - 7:30 PM (Tue, Thu, Sat)",
      id: "programming-club",
      fulldesc: `
        The camp comprises a total of 9 sessions, including one mini-project, a debugging contest (subject to feasibility), and a hands-on project as the culmination.<br/>

        This camp serves as an excellent stepping stone for participants, introducing them to the world of Open Source and guiding them towards making contributions. Throughout the sessions, we will cover a diverse range of topics, including Object-Oriented Programming, Git, GitHub, STL, Pointers, Streams, and File Handling. Participants will also become familiarised with and prepared to participate in various Open Source events like HacktoberFest and Google Summer of Code.<br/>

        By the end of the camp, participants will have gained a solid understanding of various concepts such as Pointers, Structs, Classes, Overloading, Constructor/Destructor, Operators, Functors, Inheritance, Virtual Functions, Templates, the workings of STL, as well as Streams and File Handling. Additionally, participants will be introduced to numerous modern C++ conventions, features, and useful tricks along their journey.<br/>
        `,
    },
    {
      club: "Programming Club",
      title: "Competitive Coding Conclave",
      time: "5:00 PM - 7:30 PM (Tue, Thu, Sat)",
      description:
        "Unleash your coding potential and conquer the world of algorithms at our extremely beginner friendly Competitive Programming Camp!",
      slot: "F2",
      id: "programming-club",
      fulldesc: `
        Join our immersive Competitive Programming Camp, spanning 9 knowledge-packed sessions, each accompanied by a problem set for practice. Elevate your skills with 3 exhilarating contests featuring original problems.<br/>

        Embark on a journey starting from the fundamentals of C++, mastering crucial concepts like I/O and arithmetic as we gradually nurture your problem-solving intuition. Uncover the power of diverse data structures offered by C++, and unleash your potential with a repertoire of algorithmic techniques, such as frequency arrays, prefix arrays, greedy algorithms, complete search, binary search, two pointers, modulo arithmetic, and the sieve.<br/>

        Immerse yourself in our dynamic sessions, equipping yourself with the necessary tools to conquer the realm of competitive programming. Through captivating contests and meticulously crafted problem sets, gain invaluable hands-on experience and refine your implementation skills with these multifaceted techniques. Prepare to excel and leave your mark in the world of competitive programming.<br/>
        `,
    },
  ],
  // [
  //   {
  //     club: "Club",
  //     title: "Title",
  //     slot: "A",
  //     id: "club",
  //   },

  //   {
  //     club: "club5",
  //     title: "Title 5",
  //     slot: "A",
  //     id: "club5",
  //   },

  //   {
  //     club: "club1",
  //     title: "Title 1_1",
  //     slot: "B1",
  //     id: "club1",
  //   },

  //   {
  //     club: "club1",
  //     title: "Title 1_2",
  //     slot: "B2",
  //     id: "club1",
  //   },

  //   {
  //     clubs: ["club3", "club4"],
  //     title: "Collab stuff",
  //     slot: "C",
  //     ids: ["club3", "club4"],
  //   },
  // ],
};
export default data;
