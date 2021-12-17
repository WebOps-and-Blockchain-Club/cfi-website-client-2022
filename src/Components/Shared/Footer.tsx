import { Grid, Typography } from "@mui/material";
import React from "react";
import Heading from "../../Widgets/Heading";
import Link from '@mui/material/Link';
import { makeStyles } from '@mui/styles';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import cfilogo from "../../Images/CFILogo/CFI Logo - White.png";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
interface Props {}

const useStyles = makeStyles({
  ChevronRightIcon: {
    marginBottom:-3.5,
    fontSize: 20 ,
  },
  footerList:{
    marginTop:3,
    marginBottom:3
  }
});

const Footer = (props: Props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  
  const classes = useStyles();
  return(
      <Grid
        container
        justifyContent="left"
        alignItems="center"
        color="primary"
        pt={3}
        pb={3}
     
        sx={{
          background: `linear-gradient(to right,black,#380000, black)`,
        }}
      >
          <Grid item container
          xs={12} sm={6} md={6} lg={4} mt={1} mb={1}
          // flexDirection="column"
          // justifyContent="center"
          // alignItems="center"
          >
            <img
              src={cfilogo}
              alt="cfi logo"
              style={{  width: "40px" , height: "25px" , marginTop:2}}
            />
            <Grid item>
            <Typography
            variant={matches ? "h6" : "h5"}
            color="primary.contrastText"
            sx={{
            display: "inline",
            textTransform: "uppercase",
            fontFamily: "Proxima Nova Bold",
            }}
            >
            &nbsp; CENTER &nbsp;
            </Typography>
            <Typography
            variant={matches ? "h6" : "h5"}
            color="secondary"
            sx={{
              display: "inline",
            textTransform: "uppercase",
            fontFamily: "Proxima Nova Bold",
            }}
            >
            For innovation
            </Typography>
            </Grid>
            <Typography
            variant="body2"
            color="primary.contrastText"
            sx={{
            textTransform: "uppercase",
            fontFamily: "Proxima Nova Bold",
            marginTop:1
            }}
            >
            " Walk in with an idea, walk out with a product. "

            </Typography>
            <Typography variant="h6" color="#d70000">
            <Link href="mailto:cfi@smail.iitm.ac.in" underline="none" color="#d70000" mt={3}>Email: cfi@smail.iitm.ac.in</Link>
              
            </Typography>
          </Grid>
          <Grid item container  xs={12} sm={6} md={6} lg={4}> 
          <Grid item
          xs={6} sm={6} md={6} lg={6} mt={1} mb={1}>
            <Typography
              variant="h6"
              color="#d70000"
              sx={{fontFamily: "Proxima Nova Bold"}}
              mb={-2}
              >
            Useful links</Typography>
            <ul style={{listStyle: "none" , color: "white" , padding:0 , fontSize:"1.1rem"}}>
                <li className={classes.footerList}><Link href="/" underline="none" color="primary.contrastText"><ChevronRightIcon className={classes.ChevronRightIcon}/>About Us</Link></li>
                <li className={classes.footerList}><Link href="/" underline="none" color="primary.contrastText"><ChevronRightIcon className={classes.ChevronRightIcon}/>Media</Link></li>
                <li className={classes.footerList}><Link href="/" underline="none" color="primary.contrastText"><ChevronRightIcon className={classes.ChevronRightIcon}/>Alumni</Link></li>
                <li className={classes.footerList}><Link href="/" underline="none" color="primary.contrastText"><ChevronRightIcon className={classes.ChevronRightIcon}/>Achievements</Link></li>
                <li className={classes.footerList}><Link href="/" underline="none" color="primary.contrastText"><ChevronRightIcon className={classes.ChevronRightIcon}/>Contact Us</Link></li>
            </ul>
          </Grid>
          <Grid item
          xs={12} sm={6} md={6} lg={6} mt={1} mb={1}>
            <Typography 
               variant="h6"
              color="#d70000"
              sx={{fontFamily: "Proxima Nova Bold" }}
              mb={-2}
              >
            Competition Teams</Typography>
            <ul style={{listStyle: "none" , color: "white" , padding:0 , fontSize:"1.1rem"}}>
                <li className={classes.footerList}><Link href="/" underline="none" color="primary.contrastText"><ChevronRightIcon className={classes.ChevronRightIcon}/>Raftar</Link></li>
                <li className={classes.footerList}><Link href="/" underline="none" color="primary.contrastText"><ChevronRightIcon className={classes.ChevronRightIcon}/>Abhiyan</Link></li>
                <li className={classes.footerList}><Link href="/" underline="none" color="primary.contrastText"><ChevronRightIcon className={classes.ChevronRightIcon}/>Avishkar</Link></li>
                <li className={classes.footerList}><Link href="/" underline="none" color="primary.contrastText"><ChevronRightIcon className={classes.ChevronRightIcon}/>Achievements</Link></li>
                <li className={classes.footerList}><Link href="/" underline="none" color="primary.contrastText"><ChevronRightIcon className={classes.ChevronRightIcon}/>Avishkar</Link></li>
            </ul>
          </Grid>
          </Grid>
          <Grid item container xs={12} sm={8} md={8} lg={4}>
          <Grid item
          xs={5} sm={3} md={3} lg={3} mt={1} mb={1}>
            <Typography
               variant="h6"
              color="#d70000"
              sx={{fontFamily: "Proxima Nova Bold" }}
              mb={-2}
              >Clubs
            </Typography>
            <ul style={{listStyle: "none" , color: "white" , padding:0 , fontSize:"1.1rem"}}>
                <li className={classes.footerList}><Link href="/" underline="none" color="primary.contrastText"><ChevronRightIcon className={classes.ChevronRightIcon}/>Aero</Link></li>
                <li className={classes.footerList}><Link href="/" underline="none" color="primary.contrastText"><ChevronRightIcon className={classes.ChevronRightIcon}/>Ibot</Link></li>
                <li className={classes.footerList}><Link href="/" underline="none" color="primary.contrastText"><ChevronRightIcon className={classes.ChevronRightIcon}/>Igem</Link></li>
                <li className={classes.footerList}><Link href="/" underline="none" color="primary.contrastText"><ChevronRightIcon className={classes.ChevronRightIcon}/>Sahaay</Link></li>
                <li className={classes.footerList}><Link href="/" underline="none" color="primary.contrastText"><ChevronRightIcon className={classes.ChevronRightIcon}/>Analytics</Link></li>
            </ul>
          </Grid>
          <Grid item
          xs={7} sm={4} md={4} lg={4} mt={1} mb={1}>
            <Typography
            className="underline"
              variant="h6"
              color="primary.contrastText"
              sx={{fontFamily: "Proxima Nova Bold"}}
              mb={-2}
              >
               &nbsp;
            </Typography>
            <ul style={{listStyle: "none" , color: "white" , padding:0 , fontSize:"1.1rem"}}>
                <li className={classes.footerList}><Link href="/" underline="none" color="primary.contrastText"><ChevronRightIcon className={classes.ChevronRightIcon}/>Envisage</Link></li>
                <li className={classes.footerList}><Link href="/" underline="none" color="primary.contrastText"><ChevronRightIcon className={classes.ChevronRightIcon}/>Electronics</Link></li>
                <li className={classes.footerList}><Link href="/" underline="none" color="primary.contrastText"><ChevronRightIcon className={classes.ChevronRightIcon}/>Programming</Link></li>
                <li className={classes.footerList}><Link href="/" underline="none" color="primary.contrastText"><ChevronRightIcon className={classes.ChevronRightIcon}/>Webops & </Link></li>
                <li className={classes.footerList}><Link href="/" underline="none" color="primary.contrastText"><ChevronRightIcon sx={{opacity:0}} className={classes.ChevronRightIcon}/>Blockchain</Link></li>
                {/* <li><Link href="/" underline="none" color="primary.contrastText"><ChevronRightIcon />Avishkar</Link></li> */}
            </ul>
          </Grid>
          <Grid item
          xs={12} sm={5} md={5} lg={5} mt={1} mb={1}>
            <Typography
              variant="h6"
              color="primary.contrastText"
              sx={{fontFamily: "Proxima Nova Bold"}}
              mb={-2}
              >
                &nbsp;
            </Typography>
            <ul style={{listStyle: "none" , color: "white" , padding:0 , fontSize:"1.1rem"}}>
                <li className={classes.footerList}><Link href="/" underline="none" color="primary.contrastText"><ChevronRightIcon className={classes.ChevronRightIcon}/>Astronomy & Physics</Link></li>
                <li className={classes.footerList}><Link href="/" underline="none" color="primary.contrastText"><ChevronRightIcon className={classes.ChevronRightIcon}/>Product Design</Link></li>
                <li className={classes.footerList}><Link href="/" underline="none" color="primary.contrastText"><ChevronRightIcon className={classes.ChevronRightIcon}/>3D Printing</Link></li>
                <li className={classes.footerList}><Link href="/" underline="none" color="primary.contrastText"><ChevronRightIcon className={classes.ChevronRightIcon}/>Computer Vision &</Link></li>
                <li className={classes.footerList}><Link href="/" underline="none" color="primary.contrastText"><ChevronRightIcon  sx={{opacity:0}} className={classes.ChevronRightIcon}/>Intelligence</Link></li>
                {/* <li><Link href="/" underline="none" color="primary.contrastText"><ChevronRightIcon />Avishkar</Link></li> */}
            </ul>
          </Grid>
          </Grid>
      </Grid>   
  );
};

export default Footer;
