import * as React from "react";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { AboutCFI } from "../../Assets/Data/Home";
import useWindowSize from "../../Utils/windowSize";

export default function IntroCard() {
  const theme = useTheme();
  const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const [width] = useWindowSize();
  return (
    <Card
      sx={{
        borderRadius: "20px",
        backgroundColor: "primary.light",
        display: width >= 1100 && width <= 1450 ? "unset" : "flex",
        flexDirection: matchesLG ? "column" : "row",
        alignItems: "center",
        justifyContent: "center",
        p: matchesSM ? "20px" : "40px",
        boxShadow:
          "5px 5px 5px #000000, -3px -3px 5px rgba(255, 255, 255, 0.1);",
      }}
    >
      <Grid>
        <iframe
          src="https://www.youtube.com/embed/WaxfRS13RGU"
          title="CFI"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          frameBorder={"0"}
          style={{
            borderRadius: "20px",
            float: "left",
            marginBottom: width > 1450 ? "0" : "5px",
            marginRight: width > 1450 ? "0" : "20px",
          }}
          allowFullScreen
        />
      </Grid>
      <CardContent
        style={{
          padding: "unset",
          paddingLeft: width > 1450 ? "30px" : "unset",
          paddingTop: width < 1100 ? "20px" : "unset",
        }}
      >
        <Typography
          color="primary.contrastText"
          fontSize={{
            xs: "14px",
            sm: "18px",
          }}
          textAlign={"justify"}
        >
          {AboutCFI}
        </Typography>
      </CardContent>
    </Card>
  );
}
