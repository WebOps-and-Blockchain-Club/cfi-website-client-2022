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
    <div style={{ backgroundColor: "#030303", width: "100%" }}>
      <Button onClick={handleClickOpen}>
        <MenuIcon sx={{ color: "primary.contrastText" }} />
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
