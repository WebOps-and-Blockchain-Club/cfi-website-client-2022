import React from "react";
import {
  Button,
  Grid,
  AppBar,
  Toolbar,
  useScrollTrigger,
  Slide,
  Divider,
  MenuItem,
  Menu,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import cfilogo from "../../Assets/Images/CFILogo/CFI Logo - White.png";
// import cfilogo from "../../Images/CFILogo/CFI_White_WithText.png";
import { NavbarItems } from "../../Assets/Data/Navbar";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const trigger = useScrollTrigger();
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar
          position="fixed"
          style={{
            backgroundColor: "unset",
            boxShadow: "unset",
            paddingTop: "10px",
          }}
        >
          <Toolbar style={{ height: "64px", alignItems: "center" }}>
            <Link
              to={"/"}
              style={{ textDecoration: "none", paddingRight: "24px" }}
            >
              <img src={cfilogo} alt="CFILogo" height={"50px"} />
            </Link>
            <Grid
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                width: "100%",
                height: "30px",
              }}
            >
              {NavbarItems.map((item, i) => (
                <>
                  {!!item.subItems && (
                    <>
                      <Button
                        onClick={handleClick}
                        sx={{
                          textDecoration: "none",
                          color: "primary.contrastText",
                          fontSize: "18px",
                          letterSpacing: "1px",
                          fontFamily: "Proxima Nova",
                          fontWeight: "900",
                          padding: "7px 10px",
                          lineHeight: "unset",
                          ":hover": {
                            backgroundColor: "primary.contrastText",
                            color: "primary.main",
                          },
                        }}
                        onMouseOver={handleClick}
                        onMouseOut={handleClose}
                      >
                        {item.name}
                      </Button>
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                      >
                        {item.subItems.map((subItem) => (
                          <MenuItem onClick={handleClose}>
                            {subItem.name}
                          </MenuItem>
                        ))}
                      </Menu>
                    </>
                  )}

                  {!item.subItems && (
                    <>
                      <Button
                        onClick={() => navigate(item.link)}
                        sx={{
                          textDecoration: "none",
                          color: "primary.contrastText",
                          fontSize: "18px",
                          letterSpacing: "1px",
                          fontFamily: "Proxima Nova",
                          fontWeight: "900",
                          padding: "7px 10px",
                          lineHeight: "unset",
                          ":hover": {
                            backgroundColor: "primary.contrastText",
                            color: "primary.main",
                          },
                        }}
                      >
                        {item.name}
                      </Button>
                    </>
                  )}
                  {i !== NavbarItems.length - 1 && (
                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{
                        borderRightWidth: 3,
                        borderColor: "secondary.main",
                      }}
                    />
                  )}
                </>
              ))}
            </Grid>
          </Toolbar>
        </AppBar>
      </Slide>
    </React.Fragment>
  );
}
