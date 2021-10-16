import React from "react";

import { Box, Grid, Typography } from "@mui/material";

import clublogo from "../Images/Home/3d.svg";
import car from "../Images/Home/car.png";
import background3 from "../Images/Home/background3.png";
import facebook from "../Images/Home/facebook.png";
import twitter from "../Images/Home/twitter.png";
import instagram from "../Images/Home/instagram.png";
import contact from "../Images/Home/contact.png";

import MediaCard from "../Widgets/Card";

interface Props {}

const Home = (props: Props) => {
  return (
    <Grid container>
      <div
        style={{
          background: `linear-gradient(rgb(56, 56, 56) 13%, white, black)`,
          width: "100%",
        }}
      >
        <img
          src={car}
          alt="carImage"
          style={{
            height: "88vh",
            width: "100%",
            opacity: 0.6,
          }}
        />
      </div>
      <Grid container sx={{ backgroundColor: "black" }}>
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          p={3}
          m={1}
          justifyContent="space-between"
        >
          <Grid item>
            <Typography
              variant="h3"
              color="primary"
              sx={{ display: "inline", textTransform: "uppercase" }}
            >
              {"In the "}
            </Typography>
            <Typography
              variant="h3"
              color="secondary"
              sx={{ display: "inline", textTransform: "uppercase" }}
            >
              hadlines
            </Typography>
          </Grid>
          <Grid item container justifyContent="space-evenly" mt={3}>
            <MediaCard />
            <MediaCard />
            <MediaCard />
          </Grid>
        </Grid>

        <Grid
          container
          spacing={3}
          direction="column"
          justifyContent="space-between"
          p={3}
          m={1}
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h3" color="primary" sx={{ display: "inline" }}>
              {"CFI "}
            </Typography>
            <Typography
              variant="h3"
              color="secondary"
              sx={{ display: "inline" }}
            >
              SHOTS
            </Typography>
          </Grid>
          <Grid
            item
            container
            direction="row"
            alignItems="center"
            flexWrap="nowrap"
            p={2}
            spacing={4}
          >
            <Grid item>
              <Typography variant="body1" color="primary">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
                architecto sequi, ad at iste quos qui perferendis quam adipisci
                molestiae nam nisi nihil suscipit illum officiis, ab laborum
                placeat temporibus.
              </Typography>
            </Grid>
            <Grid item>
              <iframe
                width="600px"
                height="400px"
                src="https://www.youtube.com/embed/MRB56CSroVs"
                title="CFI"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          p={3}
          m={1}
          justifyContent="space-between"
        >
          <Grid item>
            <Typography
              variant="h3"
              color="primary"
              sx={{ display: "inline", textTransform: "uppercase" }}
            >
              {"cfi "}
            </Typography>
            <Typography
              variant="h3"
              color="secondary"
              sx={{ display: "inline", textTransform: "uppercase" }}
            >
              clubs
            </Typography>
          </Grid>
          <Grid
            item
            container
            direction="column"
            justifyContent="space-evenly"
            mt={3}
            spacing={4}
          >
            <Grid item container justifyContent="center" spacing={4}>
              <Grid item>
                <img src={clublogo} style={{ height: "150px" }}></img>
              </Grid>
              <Grid item>
                <img src={clublogo} style={{ height: "150px" }}></img>
              </Grid>
              <Grid item>
                <img src={clublogo} style={{ height: "150px" }}></img>
              </Grid>
              <Grid item>
                <img src={clublogo} style={{ height: "150px" }}></img>
              </Grid>
              <Grid item>
                <img src={clublogo} style={{ height: "150px" }}></img>
              </Grid>
              <Grid item>
                <img src={clublogo} style={{ height: "150px" }}></img>
              </Grid>
            </Grid>
            <Grid item container justifyContent="center" spacing={4}>
              <Grid item>
                <img src={clublogo} style={{ height: "150px" }}></img>
              </Grid>
              <Grid item>
                <img src={clublogo} style={{ height: "150px" }}></img>
              </Grid>
              <Grid item>
                <img src={clublogo} style={{ height: "150px" }}></img>
              </Grid>
              <Grid item>
                <img src={clublogo} style={{ height: "150px" }}></img>
              </Grid>
            </Grid>
            <Grid item container justifyContent="center" spacing={4}>
              <Grid item>
                <img src={clublogo} style={{ height: "150px" }}></img>
              </Grid>
              <Grid item>
                <img src={clublogo} style={{ height: "150px" }}></img>
              </Grid>
              <Grid item>
                <img src={clublogo} style={{ height: "150px" }}></img>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="column"
            alignItems="center"
            p={3}
            m={4}
            justifyContent="space-between"
          >
            <Grid item>
              <Typography
                variant="h3"
                color="primary"
                sx={{ display: "inline", textTransform: "uppercase" }}
              >
                {"competition "}
              </Typography>
              <Typography
                variant="h3"
                color="secondary"
                sx={{ display: "inline", textTransform: "uppercase" }}
              >
                teams
              </Typography>
            </Grid>
            <Grid item container justifyContent="center" mt={3} spacing={7}>
              <Grid item>
                <MediaCard />
              </Grid>
              <Grid item>
                <MediaCard />
              </Grid>
              <Grid item>
                <MediaCard />
              </Grid>
              <Grid item>
                <MediaCard />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent="space-around"
            mt={5}
            sx={{
              background: `linear-gradient(to right,black, #860000, black)`,
            }}
            p={2}
          >
            <Grid item>
              <img src={facebook} style={{ height: "50px" }}></img>
            </Grid>
            <Grid item>
              <img src={instagram} style={{ height: "50px" }}></img>
            </Grid>
            <Grid item>
              <img src={twitter} style={{ height: "50px" }}></img>
            </Grid>
          </Grid>
          <Grid
            container
            mt={4}
            justifyContent="center"
            alignItems="center"
            color="primary"
          >
            <Grid item>
              <Typography variant="body1" color="primary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                voluptatibus eos, dolorem nisi porro inventore nobis delectus
                cupiditate hic repudiandae possimus labore nihil optio, ducimus
                fugit ex commodi? Natus, illo? Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Eveniet, eius quia, praesentium
                ratione debitis, voluptas est reiciendis ipsam autem ex numquam
                ea ab maiores eum ipsum nisi nam neque dicta.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={3}
            direction="column"
            justifyContent="space-between"
            alignItems="center"
            mt={5}
            ml={-8}
            sx={{
              background: `url(${background3}),linear-gradient(rgb(56, 56, 56) 13%, white, black) `,
              width: "100%",
              // opacity: "0.7",
            }}
          >
            <Grid item>
              <Typography
                variant="h3"
                color="primary"
                sx={{
                  display: "inline",
                  textTransform: "uppercase",
                }}
              >
                {"contact "}
              </Typography>
              <Typography
                variant="h3"
                color="secondary"
                sx={{
                  display: "inline",
                  textTransform: "uppercase",
                }}
              >
                us
              </Typography>
            </Grid>
            <Grid
              item
              container
              direction="row"
              alignItems="center"
              flexWrap="nowrap"
              p={2}
              spacing={4}
            >
              <Grid
                item
                container
                justifyContent="space-around"
                direction="column"
                spacing={3}
                alignItems="center"
              >
                <Grid item>
                  <Typography
                    variant="h4"
                    color="primary"
                    sx={{
                      display: "inline",
                      textTransform: "uppercase",
                    }}
                  >
                    {"cfi "}
                  </Typography>
                  <Typography
                    variant="h4"
                    color="secondary"
                    sx={{
                      display: "inline",
                      textTransform: "uppercase",
                    }}
                  >
                    team
                  </Typography>
                </Grid>

                <Grid item>
                  <img src={contact} alt="dummy Image" />
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="body1" color="primary">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Facere architecto sequi, ad at iste quos qui perferendis quam
                  adipisci molestiae nam nisi nihil suscipit illum officiis, ab
                  laborum placeat temporibus. Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Facere architecto sequi, ad at
                  iste quos qui perferendis quam adipisci molestiae nam nisi
                  nihil suscipit illum officiis, ab laborum placeat temporibus.
                </Typography>
                <Typography variant="h5" color="primary" mt={2}>
                  Contact Heads: 12XXX789YY/ 12XXX789YY
                </Typography>
                <Typography variant="h5" color="primary" mt={0.5} ml={9}>
                  blah@gmail.com
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
