import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import React, { useContext } from "react";
import { SIPDate } from "../../Assets/Data/SIP";
import { UserRole } from "../../generated/graphql";
import AuthContext from "../../Utils/context";
import CustomBox, { CustomGridPage } from "../Shared/CustomBox";
import Heading from "../Shared/Heading";
import SIPUser from "./User";

interface Probs {}

const SIP = (probs: Probs) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const matches2 = useMediaQuery(theme.breakpoints.down("md"));

  const { state } = useContext(AuthContext)!;

  return (
    <CustomBox>
      <CustomGridPage>
        <Heading white="STUDENT " red="INNOVATION PROGRAM" />
        <Grid
          container
          direction="column"
          justifyContent="center"
          py={{ xs: 8, sm: 10, md: 12, lg: 12 }}
          alignItems="center"
        >
          <Typography
            variant={matches2 ? (matches ? "subtitle1" : "h6") : "h5"}
            color="primary.contrastText"
            sx={{
              textAlign: "justify",
              textAlignLast: "center",
            }}
          >
            {SIPDate.content}
          </Typography>
        </Grid>
        <Grid
          item
          container
          rowGap={{ xs: 3, sm: 4, md: 5, lg: 6 }}
          columnGap={{ xs: 3, sm: 4, md: 5, lg: 6 }}
          mt={"25px"}
          justifyContent={"center"}
        >
          {SIPDate.quotes.map((n) => (
            <Card
              sx={{
                m: "0 10px",
                width: matches ? "68vw" : "350px",
                borderRadius: "20px",
                backgroundColor: "primary.light",
                boxShadow:
                  "5px 5px 5px #000000, -3px -3px 5px rgba(255, 255, 255, 0.1);",
              }}
            >
              <CardMedia
                component="img"
                image={n.image}
                alt="newsimg"
                sx={{
                  borderRadius: "20px 20px 0 0",
                  verticalAlign: "middle",
                  objectFit: "cover",
                  height: matches ? "50vw" : "220px",
                }}
              />
              <CardContent
                sx={{
                  px: "10px",
                  py: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                }}
                style={{
                  paddingBottom: "20px",
                }}
              >
                <Typography
                  component="div"
                  color="primary.contrastText"
                  sx={{
                    textAlign: "center",
                    fontSize: matches ? "16px" : "18px",
                    fontWeight: "bold",
                    letterSpacing: "1px",
                  }}
                >
                  {n.content}
                </Typography>
              </CardContent>
            </Card>
          ))}
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
      </CustomGridPage>
    </CustomBox>
  );
};

export default SIP;
