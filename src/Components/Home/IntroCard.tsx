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

export default function IntroCard() {
  const theme = useTheme();
  const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Card
      sx={{
        borderRadius: "20px",
        backgroundColor: "primary.light",
        display: "flex",
        flexDirection: matchesLG ? "column" : "row",
        alignItems: "center",
        justifyContent: "center",
        p: matchesSM ? "15px" : "30px",
        boxShadow:
          "5px 5px 5px #000000, -3px -3px 5px rgba(255, 255, 255, 0.1);",
      }}
    >
      <Grid container justifyContent={"center"}>
        <iframe
          src="https://www.youtube.com/embed/WaxfRS13RGU"
          title="CFI"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          frameBorder={"0"}
          style={{ borderRadius: "20px" }}
        />
      </Grid>
      <CardContent
        style={{
          padding: "unset",
          paddingLeft: matchesLG ? "unset" : "30px",
          paddingTop: matchesLG ? "30px" : "unset",
        }}
      >
        <Typography
          gutterBottom
          component="div"
          color="primary.contrastText"
          fontSize={{
            xs: "14px",
            sm: "18px",
          }}
          textAlign={"center"}
        >
          {AboutCFI}
        </Typography>
      </CardContent>
    </Card>
  );
}
