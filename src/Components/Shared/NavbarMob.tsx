import * as React from "react";
import {
  Button,
  Dialog,
  ListItem,
  List,
  Divider,
  IconButton,
  Slide,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import { TransitionProps } from "@mui/material/transitions";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { exit } from "process";

import cfilogo from "../../Images/CFILogo/CFI Logo - White.png"
import zIndex from "@mui/material/styles/zIndex";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children?: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide style={{ transitionDuration: "500ms" }} direction="left" ref={ref} {...props} />;
});

export default function NavbarMob() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ display:'flex' , backgroundColor: "#030303", width: "100%" , height: "55px" , alignItems:'center' , position: "fixed" , top: 0 , left: "0px" , right:"0px" , zIndex:10 }}>
      <img src={cfilogo} style={{height: "25px" , marginLeft: "25px"}} />
      <Button style={{position: "absolute" , right:"25px" , }}  onClick={handleClickOpen}>
        <MenuIcon sx={{ color: "primary.contrastText" ,fontSize: 28 }} />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        sx={{ backgroundColor: "#030303" }}
      >
        <List sx={{ backgroundColor: "#030303" }}>
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon sx={{ color: "primary.contrastText" }} />
          </IconButton>
          <ListItem button>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button
                onClick={handleClose}
                style={{
                  color: "#D6D6D6",
                  fontSize: "22px",
                  textAlign: "left",
                }}
              >
                Home
              </Button>
            </Link>
          </ListItem>
          <Divider />
          <ListItem button>
            <Link to="/clubs" style={{ textDecoration: "none" }}>
              <Button
                onClick={handleClose}
                style={{
                  color: "#D6D6D6",
                  fontSize: "22px",
                  textAlign: "left",
                }}
              >
                Clubs
              </Button>
            </Link>
          </ListItem>
          <Divider />
          <ListItem button>
            <Link to="/achievements" style={{ textDecoration: "none" }}>
              <Button
                onClick={handleClose}
                style={{
                  color: "#D6D6D6",
                  fontSize: "22px",
                  textAlign: "left",
                }}
              >
                Achievements
              </Button>
            </Link>
          </ListItem>
          <Divider />
          <ListItem button>
            <Link to="/competitionteams" style={{ textDecoration: "none" }}>
              <Button
                onClick={handleClose}
                style={{
                  color: "#D6D6D6",
                  fontSize: "22px",
                  textAlign: "left",
                }}
              >
                Competition Teams
              </Button>
            </Link>
          </ListItem>
          <Divider />
          <ListItem button>
            {" "}
            <Link to="/achievements" style={{ textDecoration: "none" }}>
              <Button
                onClick={handleClose}
                style={{
                  color: "#D6D6D6",
                  fontSize: "22px",
                  textAlign: "left",
                }}
              >
                Media
              </Button>
            </Link>
          </ListItem>
          <Divider />
          <ListItem button>
            <Link to="/achievements" style={{ textDecoration: "none" }}>
              <Button
                onClick={handleClose}
                style={{
                  color: "#D6D6D6",
                  fontSize: "22px",
                  textAlign: "left",
                }}
              >
                Alumni
              </Button>
            </Link>
          </ListItem>
          <Divider />
          <ListItem button>
            <Link to="/achievements" style={{ textDecoration: "none" }}>
              <Button
                onClick={handleClose}
                style={{
                  color: "#D6D6D6",
                  fontSize: "22px",
                  textAlign: "left",
                }}
              >
                About Us
              </Button>
            </Link>
          </ListItem>
          <Divider />
          <ListItem button>
            <Link to="/achievements" style={{ textDecoration: "none" }}>
              <Button
                onClick={handleClose}
                style={{
                  color: "#D6D6D6",
                  fontSize: "22px",
                  textAlign: "left",
                }}
              >
                Contact Us
              </Button>
            </Link>
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
}
