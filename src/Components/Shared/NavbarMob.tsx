import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children?: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="left" ref={ref} {...props} />;
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
    <div>
      <Button onClick={handleClickOpen}>
        <MenuIcon />
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}></AppBar>
        <List>
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <ListItem button>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button style={{ color: "black" }}>Home</Button>
            </Link>
          </ListItem>
          <Divider />
          <ListItem button>
            <Link to="/clubs" style={{ textDecoration: "none" }}>
              <Button style={{ color: "black" }}>Clubs</Button>
            </Link>
          </ListItem>
          <Divider />
          <ListItem button>
            <Link to="/achievements" style={{ textDecoration: "none" }}>
              <Button style={{ color: "black" }}>Achievements</Button>
            </Link>
          </ListItem>
          <Divider />
          <ListItem button>
            <Link to="/competitionteams" style={{ textDecoration: "none" }}>
              <Button style={{ color: "black" }}>Competition Teams</Button>
            </Link>
          </ListItem>
          <Divider />
          <ListItem button>
            {" "}
            <Link to="/achievements" style={{ textDecoration: "none" }}>
              <Button style={{ color: "black" }}>Media</Button>
            </Link>
          </ListItem>
          <Divider />
          <ListItem button>
            <Link to="/achievements" style={{ textDecoration: "none" }}>
              <Button style={{ color: "black" }}>Alumni</Button>
            </Link>
          </ListItem>
          <Divider />
          <ListItem button>
            <Link to="/achievements" style={{ textDecoration: "none" }}>
              <Button style={{ color: "black" }}>About Us</Button>
            </Link>
          </ListItem>
          <Divider />
          <ListItem button>
            <Link to="/achievements" style={{ textDecoration: "none" }}>
              <Button style={{ color: "black" }}>Contact Us</Button>
            </Link>
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
}
