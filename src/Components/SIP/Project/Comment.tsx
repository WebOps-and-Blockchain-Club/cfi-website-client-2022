import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import Heading from "../../Shared/Heading";

interface Probs {
  comments: {
    id: string;
    description: string;
    createdBy: {
      name: string;
    };
  }[];
}

const Comment = (probs: Probs) => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid item container justifyContent="center">
      {probs.comments && probs.comments.length !== 0 && (
        <>
          <Heading white="COMM" red="ENTS" />
          {probs.comments.map((_comment) => (
            <Grid
              item
              container
              flexDirection="column"
              p={matchesSM ? "15px" : "30px"}
              mt={5}
              sx={{
                borderRadius: "20px",
                backgroundColor: "primary.light",
                boxShadow:
                  "5px 5px 5px #000000, -3px -3px 5px rgba(255, 255, 255, 0.1);",
              }}
            >
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
                dangerouslySetInnerHTML={{
                  __html: _comment.description,
                }}
                className="editor"
              />
              <Typography
                gutterBottom
                component="div"
                color="primary.contrastText"
                fontSize={{
                  xs: "16px",
                  sm: "18px",
                }}
                m={0}
              >
                By {_comment.createdBy.name}
              </Typography>
            </Grid>
          ))}
        </>
      )}
    </Grid>
  );
};

export default Comment;
