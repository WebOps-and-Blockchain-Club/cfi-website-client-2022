import React , {useState} from "react";

import { Grid, Typography , Box } from "@mui/material";

import CustomBox from "../Shared/CustomBox";
import Heading from "../Shared/Heading";
import { AchievementsData } from "../../Assets/Data/Achievements";
import Idea2 from "../../Assets/Images/AboutUs/idea2.png";

import '../../Styles/achievements.css'

interface Props {}

const Achievements = (props: Props) => {


  
  return (
    <CustomBox>
      <Grid
        container
        pl={{ xs: 2, sm: 4, md: 6, lg: 10 }}
        pr={{ xs: 2, sm: 4, md: 6, lg: 10 }}
        pt={{ xs: 10, sm: 12, md: 14, lg: 16 }}
        pb={{ xs: 2, sm: 6, md: 10, lg: 14 }}
        direction="column"
        justifyItems="center"
        alignItems="center"
      >
        <Heading white="ACHIEVE" red="MENTS" />
        {/* { AchievementsData.map((_achievement) => 
        (
          <section id={_achievement.id}>
            <Grid minHeight={"100vh"}>
              <Typography
                color={"white"}
                dangerouslySetInnerHTML={{ __html: _achievement.description }}
              />
            </Grid>
          </section>
        ) 
        )}  */}

   

        
        <Box className="achievements-wrapper" >
          <Box className="center-line" >
          <Box style={{ marginLeft:'-22.5px'}} className="square"></Box>
        </Box>
        
        {AchievementsData.map((achievement , i) => 
        {
          return (
        i%2==0?
        (
          <div style={{marginTop: i== 0 ? '180px' : '110px'}}  className="row row-1">
            <div className="content">
              <section id={achievement.id}>
                <div className="details">
                  <span style={{color: 'white'}} className="title">{achievement.title}</span>
                  {/* <span style={{color: 'white'}} >{achievement.date}</span> */}
                </div>
                <Typography
                color={"white"}
                dangerouslySetInnerHTML={{ __html: achievement.description }}
              />
              </section>  
              <div className="square"></div>           
              <div className="branch"></div>           
            </div>

            <div className="image">
            <img src={achievement.image} />
            </div>
          </div>
        ) : (
          <div style={{marginTop:'110px'}} className="row row-2">
              <div  className="image">
                <img src={achievement.image} />
              </div>
              <div className="content" style={{flexDirection:'row-reverse'}}>
                <section id={achievement.id}>
                  <div className="details">
                    <span style={{color: 'white'}}  className="title">{achievement.title}</span>
                    {/* <span>{achievement.date}</span> */}
                  </div>
                  <Typography
                color={"white"}
                dangerouslySetInnerHTML={{ __html: achievement.description }}
              />
      
                </section>  
              <div className="square"></div>           
              <div className="branch"></div>           
            </div>
          </div>
        )
          )
        }
        )}
          
        </Box>


      </Grid>
    </CustomBox>
  );
};

export default Achievements;