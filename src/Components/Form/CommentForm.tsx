import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import MarkDownEditor from "./Editor";
import {
  refetchGetProjectQuery,
  useCreateCommentMutation,
} from "../../generated/graphql";
import Loading from "../Shared/Dialog/Loading";
import ErrorDialog from "../Shared/Dialog/ErrorDialog";
import SuccessDialog from "../Shared/Dialog/SuccessDialog";

interface Probs {
  projectId: string;
}

const CommentForm = (probs: Probs) => {
  const [commentInput, setCommentInput] = React.useState<string>();

  const handleChange = (id: string, value: string) => {
    setCommentInput(value);
  };

  const [createCommentMutation, { data, loading, error }] =
    useCreateCommentMutation({
      refetchQueries: [refetchGetProjectQuery({ projectId: probs.projectId })],
    });

  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      if (!commentInput) alert("Comment is empty");
      else
        await createCommentMutation({
          variables: {
            createCommentInput: {
              projectId: probs.projectId,
              description: commentInput,
            },
          },
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form style={{ width: "100%" }} onSubmit={onSubmit}>
      <Grid
        container
        bgcolor={"primary.light"}
        borderRadius={"20px"}
        p={4}
        gap={4}
        justifyContent="center"
        boxShadow="5px 5px 5px #000000, -3px -3px 5px rgba(255, 255, 255, 0.1);"
      >
        <Loading loading={!!loading} />
        <ErrorDialog message={!!error ? "Some Error Occurred" : null} />
        {data?.createComment.id && <SuccessDialog message="Comment Added" />}
        <Grid item container gap={4} direction="column">
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
          >
            Post your comment here,
          </Typography>
          <MarkDownEditor
            id="comment"
            value={commentInput!}
            onChange={handleChange}
          />
        </Grid>

        <Grid item container justifyContent={"space-evenly"}>
          <Button
            sx={{
              padding: "5px 20px",
              color: "primary.contrastText",
              backgroundColor: "secondary.dark",
              fontWeight: "bold",
              fontSize: "16px",
              ":hover": {
                backgroundColor: "secondary.main",
                color: "primary.contrastText",
              },
            }}
            type="submit"
          >
            SUBMIT
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default CommentForm;
