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
import { ResponsiveStyleValue } from "@mui/system";

interface Probs {
  data: IContent;
  textAlign?: ResponsiveStyleValue<AlignSetting>;
  id?: string;
}


export default function MediaCard({ data, id, textAlign }: Probs) {

  const theme = useTheme();
  const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid id={id ? id : 'undefined'}>
      <Card
        sx={{
          borderRadius: "20px",
          backgroundColor: "primary.light",
          display: "flex",
          flexDirection: matchesLG ? "column" : "row",
          alignItems: "center",
          // justifyContent: "center",
          p: matchesSM ? "15px" : "30px",
          boxShadow:
            "5px 5px 5px #000000, -3px -3px 5px rgba(255, 255, 255, 0.1);",
        }}
      >
        {data.image && (
          <CardMedia
            component="img"
            src={data.image}
            sx={{
              borderRadius: "20px",
              verticalAlign: "middle",
              objectFit: "cover",
              width: matchesLG ? "100%" : "400px",
              marginRight: matchesLG ? "0" : "30px",
              marginBottom: matchesLG ? "15px" : "unset",
              backgroundColor:
                "linear-gradient(138.5deg, #000000 42%, rgba(255, 0, 0, 0) 109.29%)",
            }}
          />
        )}

        <CardContent
          style={{
            padding: "unset",
          }}
        >
          {data.title && (
            <Grid
              item
              textAlign={textAlign ?? "center"}
              pb={"15px"}
              pt={matchesLG ? "15px" : "unset"}
            >
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
              xs: "16px",
              sm: "18px",
            }}
            m={0}
            textAlign={"justify"}
            sx={{
              textAlignLast: textAlign ?? "center",
            }}
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
          {
            data.colImages && (
              <Grid
                item
                container
                rowGap={{ xs: 3, sm: 4, md: 5, lg: 6 }}
                columnGap={{ xs: 3, sm: 4, md: 5, lg: 6 }}
                mt={"25px"}
                justifyContent={"center"}
              >
                {data.colImages.map((img: string) => (
                  <CardMedia
                    component="img"
                    image={img}
                    sx={{
                      borderRadius: "20px",
                      verticalAlign: "middle",
                      objectFit: "cover",
                      width: matchesLG ? "100%" : "75%",
                      marginRight: matchesLG ? "0" : "30px",
                      marginBottom: matchesLG ? "15px" : "unset",
                      backgroundColor:
                        "linear-gradient(138.5deg, #000000 42%, rgba(255, 0, 0, 0) 109.29%)",
                    }}
                  />
                ))}
              </Grid>
            )
          }
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
