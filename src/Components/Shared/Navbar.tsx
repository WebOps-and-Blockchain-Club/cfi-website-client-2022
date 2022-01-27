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
  useTheme,
  useMediaQuery,
  List,
  Box,
  ListItem,
  Drawer,
  Collapse,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import cfilogo from "../../Assets/Images/CFILogo/CFI Logo - White.png";
// import cfilogo from "../../Images/CFILogo/CFI_White_WithText.png";
import { NavbarItems, NavbarMobileView } from "../../Assets/Data/Navbar";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";

import Heading from "./Heading";

import "../../Styles/navbar.css";

export default function Header() {
  //Is Top
  const [isTop, setIsTop] = React.useState(true);

  React.useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset === 0) {
        setIsTop(true);
      } else if (window.pageYOffset !== 0 || isTop) {
        setIsTop(false);
      }
    };
  }, [isTop]);

  // Scroll Animation
  const trigger = useScrollTrigger();

  // Navigation
  const navigate = useNavigate();

  // Theme
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  // Mobile Navbar
  const [openNavbar, setOpenNavbar] = React.useState(false);
  const [checked, setChecked] = React.useState<number | null>();

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setOpenNavbar(open);
    };

  const list = () => (
    <Box
      sx={{ width: 300 }}
      role="presentation"
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {NavbarMobileView().map((_item, index) => (
          <ListItem button key={index}>
            {_item.link && (
              <NavbarButton
                name={_item.name}
                handleClick={() => {
                  navigate(_item.link);
                  setOpenNavbar(false);
                }}
              />
            )}
            {_item.subItems && (
              <SubItemMobileView
                id={index}
                name={_item.name}
                items={_item.subItems}
                toggleDrawer={() => setOpenNavbar(false)}
                checked={checked}
                setChecked={setChecked}
              />
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar
          position="fixed"
          style={{
            backgroundColor: isTop ? "unset" : "#080808",
            // backgroundImage:
            //   "linear-gradient(180deg, #080808 100%, rgba(8, 7, 8, 0) 50%)",
            boxShadow: "unset",
            paddingTop: matches ? "20px" : "15px",
            paddingBottom: matches ? "20px" : "15px",
            // backdropFilter: isTop ? "none" : "blur(20px)",
          }}
        >
          <Toolbar
            style={{
              // height: matches ? 25 : 64,
              alignItems: "center",
              minHeight: "unset",
              justifyContent: "space-between",
            }}
          >
            <Link
              to={"/"}
              style={{
                textDecoration: "none",
                marginRight: "24px",
                display: "flex",
              }}
            >
              <img
                src={cfilogo}
                alt="CFILogo"
                height={!matches && isTop ? 50 : 30}
              />
            </Link>
            {matches ? (
              <>
                <Button
                  onClick={() => setOpenNavbar(!openNavbar)}
                  style={{
                    minWidth: "unset",
                    padding: "unset",
                  }}
                >
                  <MenuIcon sx={{ color: "primary.contrastText" }} />
                </Button>
                <Drawer
                  anchor={"left"}
                  open={openNavbar}
                  onClose={toggleDrawer(false)}
                  ModalProps={{
                    disableEscapeKeyDown: true,
                  }}
                  PaperProps={{
                    sx: {
                      backgroundColor: "primary.light",
                      color: "primary.contrastText",
                    },
                  }}
                >
                  <Grid mt={4}>
                    <Heading white="CFI " red="MENU" />
                    <Grid>{list()}</Grid>
                  </Grid>
                </Drawer>
              </>
            ) : (
              <Grid
                style={{
                  display: "flex",
                  alignItems: "center",
                  // justifyContent: "space-evenly",
                  // width: "100%",
                  height: "20px",
                }}
                gap={2}
              >
                {NavbarItems.map((item, i) => (
                  <>
                    {item.link && (
                      <Grid>
                        <NavbarButton
                          name={item.name}
                          handleClick={() => navigate(item.link)}
                        />
                      </Grid>
                    )}
                    {item.subItems && <SubItemWebView item={item} />}
                    {i !== NavbarItems.length - 1 && (
                      <Divider
                        orientation="vertical"
                        flexItem
                        sx={{
                          borderRightWidth: 2.5,
                          borderColor: "secondary.main",
                        }}
                      />
                    )}
                  </>
                ))}
              </Grid>
            )}
          </Toolbar>
        </AppBar>
      </Slide>
    </React.Fragment>
  );
}

function SubItemWebView({ item }: { item: any }) {
  const navigate = useNavigate();

  return (
    <Box className="dropdown">
      <NavbarButton
        name={item.name}
        className="dropbtn"
        icon={<ExpandMore />}
        handleClick={() => {}}
      />
      <div className="dropdown-content">
        <Box
          sx={{
            backgroundColor: "primary.contrastText",
            color: "primary.main",
            paddingBottom: "10px",
            borderRadius: "4px",
          }}
        >
          {item.subItems.map((_subItem: any) => {
            if (_subItem.subItems)
              return (
                <Box className="sub-dropdown">
                  <NavbarButton
                    name={_subItem.name}
                    className="sub-dropbtn dropdown-list"
                    icon={<ChevronRightOutlinedIcon />}
                    handleClick={() => {}}
                  />
                  <div className="sub-dropdown-content">
                    <Box
                      sx={{
                        backgroundColor: "primary.contrastText",
                        color: "primary.main",
                        paddingBottom: "10px",
                        borderRadius: "4px",
                      }}
                    >
                      {_subItem.subItems.map((_subSubItem: any) => (
                        <MenuItem
                          onClick={() => navigate(_subSubItem.link)}
                          className="dropdown-list"
                        >
                          {_subSubItem.name}
                        </MenuItem>
                      ))}
                    </Box>
                  </div>
                </Box>
              );
            else
              return (
                <MenuItem
                  onClick={() => navigate(_subItem.link)}
                  sx={{
                    fontSize: "16px",
                  }}
                  className="dropdown-list"
                >
                  {_subItem.name}
                </MenuItem>
              );
          })}
        </Box>
      </div>
    </Box>
  );
}

function SubItemMobileView({
  id,
  name,
  items,
  toggleDrawer,
  checked,
  setChecked,
}: {
  id: number;
  name: string;
  items: any[];
  toggleDrawer: Function;
  checked: number | null | undefined;
  setChecked: any;
}) {
  const navigate = useNavigate();

  return (
    <Grid>
      <NavbarButton
        name={name}
        handleClick={() => {
          if (checked === id) setChecked(null);
          else setChecked(id);
        }}
        icon={<ExpandMore />}
      />
      <Collapse in={checked === id}>
        <Grid container direction={"column"} pt={"10px"} pb={"10px"}>
          {items.map((_item) => (
            <NavbarButton
              name={_item.name}
              handleClick={() => {
                toggleDrawer();
                navigate(_item.link);
              }}
              isSub={true}
            />
          ))}
        </Grid>
      </Collapse>
    </Grid>
  );
}

function NavbarButton({
  name,
  handleClick,
  mouseOverClick,
  className,
  icon,
  isSub,
}: {
  name: string;
  handleClick: Function;
  mouseOverClick?: Function | undefined;
  className?: string | undefined;
  icon?: any | undefined;
  isSub?: boolean | undefined;
}) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Button
      onClick={() => handleClick()}
      sx={{
        textDecoration: "none",
        color: "primary.contrastText",
        fontSize: "14px",
        letterSpacing: "1px",
        fontFamily: "Proxima Nova",
        fontWeight: matches ? "400" : "900",
        padding: "7px 10px",
        paddingLeft: isSub ? "40px" : "7px",
        lineHeight: "unset",
        justifyContent: "unset",
        textAlign: matches ? "start" : "center",
        borderRadius: "4px",
        height: matches ? "unset" : "30px",
        ":hover": {
          backgroundColor: matches ? "unset" : "primary.contrastText",
          color: matches ? "unset" : "primary.main",
        },
      }}
      endIcon={icon ? icon : null}
      className={className}
      onMouseOver={() => {
        if (!!mouseOverClick) mouseOverClick();
      }}
    >
      {name}
    </Button>
  );
}
