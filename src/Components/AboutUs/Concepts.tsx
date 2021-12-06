import React from 'react'

import { Grid, Typography } from "@mui/material";

import Idea1 from "../../Images/AboutUs/idea1.png";
import Idea2 from "../../Images/AboutUs/idea2.png";
import Idea3 from "../../Images/AboutUs/idea3.png";
import { VisionConceptData } from "../../Assets/Data/AboutUsData"

function Concepts() {
    return (
        <Grid
      container
      rowSpacing={3}
      direction="column"
      justifyContent="center"
      mt={3}
      alignItems="center"
    >
      <Typography variant="h4" color="primary.contrastText" p={6}>
      The CFI vision is being achieved by espousing three major concepts.
      </Typography>

      {/* concepr1 */}
        <Grid
          item
          container
          direction = "row"
          mt={6}
          mb={6}
        >
            
          <Grid item container
          direction="column"
          justifyContent="center"
          lg={6}
          md={6}
          sm={12}
          xs={12}
          p={4}
          >
              <Typography variant="h4" color="primary.contrastText" sx={{fontFamily: "Proxima Nova Bold" , marginBottom:"10px"}}>
              Walk in with an idea, walk out with a product
              </Typography>
              <Typography variant="body1" color="primary.contrastText">
              Among the general demographic, students are more likely to come up with new, creative and outrageous ideas. Add to this the fact that students at IIT Madras are competent in engineering studies, we get a potent mix of creative and skilled set of people who are ready to innovate. To realize these strengths of the student community, the CFI will provide the right environment and resources. CFI will try to be a place where a student can ‘walk in with an idea and walk out with a product’. The innovation itself is sometimes only a small part of the story as it encourages students to think freely. Free thinking leaders are an asset to and future leaders of any society.
                </Typography>
          </Grid>
          <Grid
            container
            item
            sx={{ background: "linear-gradient(138.5deg, #0000006b, #420101)", borderRadius: "40px" }}
            alignItems="center"
            justifyContent="center"
            p={3}
            lg={6}
            md={6}
            sm={12}
            xs={12}
          >
              <img
                src={Idea1}
                alt="Idea"
                style={{  width: "85%" , marginTop: "5%" , marginBottom: "5%" }}
              />
          </Grid>
        </Grid>

        {/* concept2 */}
        <Grid
          item
          container
          direction = "row-reverse"
          mt={6}
          mb={6}
        >
            
          <Grid item container
          direction="column"
          justifyContent="center"
          lg={6}
          md={6}
          sm={12}
          xs={12}
          p={4}
          >
            <Typography variant="h4" color="primary.contrastText" sx={{fontFamily: "Proxima Nova Bold" , marginBottom:"10px"}}>
              A futuristic lab environment
              </Typography>
              <Typography variant="body1" color="primary.contrastText">
              The interiors of CFI are being developed in collaboration with a celebrated green architect. The interiors are being designed to stimulate creative thinking, to be non-linear and adaptive, to be informal and ice-cream shop relaxing. The most important part of the innovation process is free thinking and the interiors of CFI aims at giving that freedom to its users. CFI will have large empty spaces. Large empty spaces serve as areas which clear up mental clutter, especially when users are in a creative block. They also serve as space for future expansion. CFI will also have a gallery that will showcase successful projects.
                </Typography>
          </Grid>
          <Grid
            container
            item
            alignItems="center"
            justifyContent="center"
            p={3}
            lg={6}
            md={6}
            sm={12}
            xs={12}
          >
              <img
                src={Idea2}
                alt="Idea"
                style={{  width: "85%" , marginTop: "5%" , marginBottom: "5%" }}
              />
          </Grid>
        </Grid>

        {/* concept3 */}
        <Grid
          item
          container
          direction = "row"
          mt={6}
          mb={6}
        >
            
          <Grid item container
          direction="column"
          justifyContent="center"
          lg={6}
          md={6}
          sm={12}
          xs={12}
          p={4}
          >
             <Typography variant="h4" color="primary.contrastText" sx={{fontFamily: "Proxima Nova Bold" , marginBottom:"10px"}}>
              Support large student team projects
              </Typography>
              <Typography variant="body1" color="primary.contrastText">
              CFI will support large student projects. These projects maybe for international contests such as Formula-SAE, University Rover Challenge, Intelligent Ground Vehicle Challenge or the famous Hyperloop Competition. They may also be for showcasing Shaastra series of Spirit of Engineering (SoE) projects. Such projects encourage teamwork and build character and confidence in the students and serve as inspiration to other students.
                </Typography>
              <Typography variant="body1" color="primary.contrastText">
              India is increasingly aware that for uniform progress, we have to look for solutions to problems in the villages and other sub-urban societies. These solutions are unlikely to come from outside India as the problems themselves are very India specific. CFI intends to encourage students to look at socially relevant projects. Additionally, the CFI will also encourage projects that look at environment friendly solutions.
                </Typography>
          </Grid>
          <Grid
            container
            item
            sx={{ background: "linear-gradient(138.5deg, #0000006b, #420101)", borderRadius: "40px" }}
            alignItems="center"
            justifyContent="center"
            p={3}
            lg={6}
            md={6}
            sm={12}
            xs={12}
          >
              <img
                src={Idea3}
                alt="Idea"
                style={{  width: "85%" , marginTop: "5%" , marginBottom: "5%" }}
              />
          </Grid>
        </Grid>
      
    </Grid>
    )
}

export default Concepts
