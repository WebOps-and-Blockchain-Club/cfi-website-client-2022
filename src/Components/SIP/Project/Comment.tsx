import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useContext } from "react";
import { UserRole } from "../../../generated/graphql";
import AuthContext from "../../../Utils/context";
import CommentForm from "../../Form/CommentForm";
import SIPLogin from "../Auth/SIPLogin";

interface Probs {
  comments: {
    id: string;
    description: string;
    createdAt: any;
  }[];
}

const Comment = (probs: Probs) => {
  const { state } = useContext(AuthContext)!;
  const theme = useTheme();
  const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  console.log(probs.comments);
  if (state?.user?.role === UserRole.User)
    return (
      <Grid item container gap={5} my={5}>
        {probs.comments && probs.comments.length !== 0 && (
          <>
            <Grid
              item
              container
              textAlign="center"
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
                COMM
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
                ENT
              </Typography>
            </Grid>
          </>
        )}
        <CommentForm />
      </Grid>
    );
  return <SIPLogin btnMessage="Login To Comment" />;
};

export default Comment;
