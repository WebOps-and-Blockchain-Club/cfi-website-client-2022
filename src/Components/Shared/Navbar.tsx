import React, { useContext } from "react";
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
import { Link, useLocation, useNavigate } from "react-router-dom";
import CFILogo from "../../Assets/Images/CFILogo/CFI Logo - White.png";
import IITMLogo from "../../Assets/Images/IITMadrasLogo.png";
import {
  NavbarAdminList,
  NavbarItems,
  NavbarMobileView,
  NavbarSIPList,
} from "../../Assets/Data/Navbar";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import CloseIcon from "@mui/icons-material/Close";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import Heading from "./Heading";

import "../../Styles/navbar.css";
import AuthContext from "../../Utils/context";

export default function Header() {
  // Navbar Items List
  const location = useLocation();
  const { state } = useContext(AuthContext)!;
  const navMobList =
    state.user?.role && location.pathname.includes("admin")
      ? NavbarAdminList(state.user?.role!)
      : location.pathname.includes("sip")
      ? NavbarSIPList()
      : NavbarMobileView();

  const navWebList =
    state.user?.role && location.pathname.includes("admin")
      ? NavbarAdminList(state.user?.role!)
      : location.pathname.includes("sip")
      ? NavbarSIPList()
      : NavbarItems;

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
  const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));

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
        {navMobList.map((item, index) => (
          <ListItem button key={index}>
            {item.link && (
              <NavbarButton
                name={item.name}
                handleClick={() => {
                  navigate(item.link);
                  setOpenNavbar(false);
                }}
              />
            )}
            {item.subItems && (
              <SubItemMobileView
                id={index}
                name={item.name}
                items={item.subItems}
                toggleDrawer={() => setOpenNavbar(false)}
                checked={checked}
                setChecked={setChecked}
              />
            )}
            {item.component && <item.component />}
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
              alignItems: "center",
              minHeight: "unset",
              justifyContent: "space-between",
              paddingRight: "20px",
              paddingLeft: "20px",
            }}
          >
            <Grid
              container
              width={"unset"}
              alignItems={"center"}
              gap={"12px"}
              mr={"24px"}
            >
              <Link
                to={"/"}
                style={{
                  textDecoration: "none",
                  display: "flex",
                }}
              >
                <img
                  src={CFILogo}
                  alt="CFILogo"
                  height={!matches && isTop && !matchesLG ? 50 : 30}
                />
              </Link>
              <FiberManualRecordIcon
                sx={{ fontSize: !matches && !matchesLG ? 12 : 10 }}
              />
              <a
                href={"https://www.iitm.ac.in"}
                style={{
                  textDecoration: "none",
                  display: "flex",
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={IITMLogo}
                  alt="CFILogo"
                  height={!matches && isTop && !matchesLG ? 50 : 30}
                />
              </a>
            </Grid>
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
                  anchor={"right"}
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
                  <Grid pt={"20px"}>
                    <Grid
                      container
                      pl={"20px"}
                      pr={"20px"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                    >
                      <Heading white="" red="MENU" />
                      <Button
                        onClick={toggleDrawer(false)}
                        sx={{
                          color: "primary.contrastText",
                          minWidth: "unset",
                          padding: "unset",
                        }}
                      >
                        <CloseIcon />
                      </Button>
                    </Grid>
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
                gap={matchesLG ? 0.4 : 2}
              >
                {navWebList.map((item: any, i) => (
                  <>
                    {item.link && (
                      <Grid>
                        <NavbarButton
                          name={item.name}
                          handleClick={() => navigate(item.link)}
                        />
                      </Grid>
                    )}
                    {item.component && <item.component />}
                    {item.subItems && <SubItemWebView item={item} />}
                    {i !== navWebList.length - 1 && (
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
        <Box style={{ height: "10px" }} />
        <Box
          sx={{
            backgroundColor: "primary.contrastText",
            color: "primary.main",
            paddingBottom: "6px",
            paddingTop: "6px",
            borderRadius: "4px",
          }}
        >
          {item.subItems.map((_subItem: any) => {
            if (_subItem.subItems)
              return (
                <Box className="sub-dropdown">
                  <NavbarButton
                    name={_subItem.name}
                    className="sub-dropbtn dropdown-list dropdown-list-width "
                    icon={<ChevronRightOutlinedIcon />}
                    handleClick={() => {}}
                  />
                  <div className="sub-dropdown-content">
                    <Box
                      sx={{
                        backgroundColor: "primary.contrastText",
                        color: "primary.main",
                        paddingTop: "6px",
                        paddingBottom: "6px",
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
                  className="dropdown-list dropdown-list-width "
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

export function NavbarButton({
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
