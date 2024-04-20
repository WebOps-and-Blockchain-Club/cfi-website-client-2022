import {
  CardMedia,
  Typography,
  useMediaQuery,
  useTheme,
  Drawer,
  Button,
  useScrollTrigger,
  Fade,
  Box,
  Fab,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import React, { useContext } from "react";
import { SIPData } from "../../Assets/Data/SIP";
import { UserRole } from "../../generated/graphql";
import AuthContext from "../../Utils/context";
import CustomBox, { CustomGridPage } from "../Shared/CustomBox";
import Heading from "../Shared/Heading";
import SIPUser from "./User";
import MediaCard from "../Community/MediaCardColumn";
import Logo from "../../Assets/Images/SIP/Logo.png";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

interface Probs { }
interface Props {
  window?: () => Window;
  children: React.ReactElement;
}


function ScrollTop(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );
    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
        behavior: 'smooth',
      });
    }
    console.log("anchor 1");
  };
  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 20, right: 20 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

const SIP = (probs: Probs, props: Props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const matches2 = useMediaQuery(theme.breakpoints.down("md"));
  const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));

  const { state } = useContext(AuthContext)!;
  const [contents, setContents] = React.useState<boolean>(false);

  function disableScroll() {
    // Get the current page scroll position
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    // if any scroll is attempted,
    // set this to the previous value
    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    };
  }

  function enableScroll() {
    window.onscroll = function () { };
  }

  function toggleDrawer
    (open: boolean) {
    setContents(open);
  };

  const handleRef = (event: React.MouseEvent<HTMLDivElement>, id: string) => {
    const anchor2 = ((event.target as HTMLDivElement).ownerDocument || document).querySelector(
      `#${id}`,
    );
    if (anchor2) {
      anchor2.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
    }
  }

  return (
    <CustomBox>
      <CustomGridPage>
        <ScrollTop {...props}>
          <Fab size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
        <Heading white="STUDENT " red="INNOVATION PROGRAM" />
        <Button onClick={() => toggleDrawer(true)}>
          <div id="back-to-top-anchor" style={{ color: "white" }}>Click to See Contents</div>
        </Button>
        <Grid
          item
          container
          direction={matches ? "column" : "row"}
          justifyContent="center"
          alignItems="center"
          py={{ xs: 8, sm: 10, md: 12, lg: 12 }}
          gap={10}
        >
          {/* <Grid item>
            <CardMedia
              component="img"
              image={Logo}
              alt={"data.name"}
              sx={{
                verticalAlign: "middle",
                objectFit: "contain",
                height: matchesLG ? "100%" : "400px",
                maxWidth: matches ? "80vw" : "40vw",
              }}
            />
          </Grid> */}
          <Grid item container
            // maxWidth={matches ? "80vw" : "40vw"} 
            gap={4}>
            <Grid
              container
              item
              direction="row"
              alignItems="center"
              justifyContent={matches ? "center" : "start"}
              gap={2}
            >
              <Grid item>
                <Typography
                  variant={matches2 ? (matches ? "subtitle1" : "h6") : "h5"}
                  style={{
                    color: "#d6d6d6",
                    fontFamily: "Proxima Nova",
                  }}
                  textAlign={matches ? "center" : "start"}
                >
                  <i>Walk in with an Idea, Walk out with a Product</i> <br /><br />
                </Typography>
                <Typography
                  variant={matches2 ? (matches ? "subtitle1" : "h6") : "h5"}
                  dangerouslySetInnerHTML={{
                    __html: SIPData.content,
                  }}
                  style={{
                    color: "#d6d6d6",
                    fontFamily: "Proxima Nova",
                  }}

                  textAlign={matches ? "center" : "start"}
                >

                </Typography>

              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          rowGap={{ xs: 3, sm: 4, md: 5, lg: 6 }}
          columnGap={{ xs: 3, sm: 4, md: 5, lg: 6 }}
          mt={"25px"}
          justifyContent={"center"}
        >
          {SIPData.quotes.map((n) => {
            const { id } = { ...n };
            let data = { title: n.title, description: n.description, image: n.image };
            return (
              <MediaCard data={data} id={id} />
            )
          }
          )}
        </Grid>
        {state?.user?.role === UserRole.User && (
          <Grid
            item
            container
            py={{ xs: 4, sm: 5, md: 6, lg: 6 }}
            mt={"25px"}
            justifyContent={"center"}
          >
            <SIPUser />
          </Grid>
        )}
        <Drawer
          anchor={"left"}
          variant={"persistent"}
          open={contents}
          onClose={() => {
            disableScroll();
            toggleDrawer(false);
            enableScroll();
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
              minWidth={"30vw"}
            >
              <Typography
                variant={matches ? "h6" : "h5"}
                color="red"
                sx={{
                  display: "inline",
                  fontFamily: "Proxima Nova",
                  textAlign: "center",
                  marginRight: "10px"
                }}
              >
                Contents
              </Typography>
              <Button
                onClick={() => {
                  disableScroll();
                  toggleDrawer(false);
                  enableScroll();
                }}
                sx={{
                  color: "primary.contrastText",
                  minWidth: "unset",
                  padding: "unset",
                }}
              >
                <CloseIcon />
              </Button>
            </Grid>
            <Grid>
              <List>
                {
                  SIPData.quotes.map((n, index) => {
                    return (
                      <ListItem disablePadding>
                        <div style={{ width: "100%" }} onClick={e => {
                          handleRef(e, n.id);
                        }}>
                          <ListItemButton>
                            <ListItemText primary={(index + 1) + '.  ' + n.title} />
                          </ListItemButton>
                        </div>
                      </ListItem>
                    )
                  })
                }
                {
                  state?.user?.role === UserRole.User && (
                    <ListItem disablePadding>

                      <div style={{ width: "100%" }} onClick={e => {
                        handleRef(e, 'your-projects');
                      }}>
                        <ListItemButton>
                          <ListItemText primary={'7.  Your Projects'} />
                        </ListItemButton>
                      </div>
                    </ListItem>
                  )
                }
              </List>
            </Grid>
          </Grid>
        </Drawer>
      </CustomGridPage>
    </CustomBox>
  );
};

export default SIP;
