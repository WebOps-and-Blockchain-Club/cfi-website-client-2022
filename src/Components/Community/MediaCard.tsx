import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { IContent, ISwiper } from "../../Types";
import ImageCard from "./ImageCard";

interface Probs {
  data: IContent;
}

export default function MediaCard({ data }: Probs) {
  const theme = useTheme();
  const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid>
      <Card
        sx={{
          borderRadius: "40px",
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
        {data.image && (
          <CardMedia
            component="img"
            image={data.image}
            sx={{
              borderRadius: "40px",
              verticalAlign: "middle",
              objectFit: "cover",
              width: matchesLG ? "100%" : "400px",
              marginRight: matchesLG ? "0" : "20px",
              backgroundColor:
                "linear-gradient(138.5deg, #000000 42%, rgba(255, 0, 0, 0) 109.29%)",
            }}
          />
        )}
        <CardContent
          style={{
            padding: "unset",
            paddingTop: matchesLG ? "15px" : "unset",
          }}
        >
          {data.title && (
            <Grid item textAlign="center">
              <Typography
                variant={matchesSM ? "h6" : "h5"}
                color="primary.contrastText"
                sx={{
                  display: "inline",
                  textTransform: "uppercase",
                  fontFamily: "Proxima Nova Bold",
                  textAlign: "center",
                }}
              >
                {data.title.split("##")[0]}
              </Typography>
              <Typography
                variant={matchesSM ? "h6" : "h5"}
                color="secondary"
                sx={{
                  display: "inline",
                  textTransform: "uppercase",
                  fontFamily: "Proxima Nova Bold",
                  textAlign: "center",
                }}
              >
                {data.title.split("##")[1]}
              </Typography>
            </Grid>
          )}
          <Typography
            gutterBottom
            component="div"
            color="primary.contrastText"
            fontSize={{
              xs: "14px",
              sm: "18px",
            }}
            textAlign={"center"}
            pt={"15px"}
          >
            {data.description}
          </Typography>
        </CardContent>
      </Card>
      {data.images && (
        <Grid
          item
          container
          rowGap={{ xs: 3, sm: 4, md: 5, lg: 6 }}
          columnGap={{ xs: 3, sm: 4, md: 5, lg: 6 }}
          mt={"25px"}
          justifyContent={"center"}
        >
          {data.images.map((n: ISwiper) => (
            <ImageCard heading={n.heading} image={n.image} />
          ))}
        </Grid>
      )}
    </Grid>
  );
}
