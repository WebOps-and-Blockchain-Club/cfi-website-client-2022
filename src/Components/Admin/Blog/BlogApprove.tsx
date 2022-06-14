import React, { Fragment, useContext } from "react";
import { Button, Grid } from "@mui/material";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import AuthContext from "../../../Utils/context";
import {
  BlogStatus,
  refetchGetBlogQuery,
  refetchGetBlogsQuery,
  UserRole,
  useUpdateBlogStatusMutation,
} from "../../../generated/graphql";
import Loading from "../../Shared/Dialog/Loading";
import ErrorDialog from "../../Shared/Dialog/ErrorDialog";
import SuccessDialog from "../../Shared/Dialog/SuccessDialog";

interface Probs {
  blog: {
    id: string;
    club: {
      email: string;
    };
    status: BlogStatus;
  };
}

const BlogApprove = (probs: Probs) => {
  const { state } = useContext(AuthContext)!;

  const [errorMessage, setErrorMessage] = React.useState<string | undefined>();

  const [updateBlogStatusMutation, { data, loading, error }] =
    useUpdateBlogStatusMutation({
      refetchQueries: [
        refetchGetBlogsQuery(),
        refetchGetBlogQuery({ blogId: probs.blog.id }),
      ],
    });

  const handleApproveReject = async (status: BlogStatus) => {
    try {
      await updateBlogStatusMutation({
        variables: {
          blogStatus: status,
          updateBlogStatusBlogId: probs.blog.id,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    if (error) setErrorMessage("Some Error Occurred");
  }, [error]);

  return (
    <Grid item container gap={2}>
      <Loading loading={!!loading} />
      {errorMessage && (
        <ErrorDialog
          message={errorMessage}
          handleClose={() => setErrorMessage(undefined)}
        />
      )}
      {data?.updateBlogStatus && <SuccessDialog message={"Status Updated"} />}
      {((state.user.role === UserRole.Member &&
        probs.blog.club?.email === state.user?.email &&
        probs.blog.status === BlogStatus.Pending) ||
        (state.user?.role === UserRole.Admin &&
          probs.blog.status === BlogStatus.ApprovedByClub)) && (
        <Fragment>
          <Button
            component="span"
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
            startIcon={<ThumbUpIcon />}
            onClick={() => {
              if (state.user?.role === UserRole.Admin) {
                handleApproveReject(BlogStatus.Approved);
              } else if (state.user?.role === UserRole.Member) {
                handleApproveReject(BlogStatus.ApprovedByClub);
              }
            }}
          >
            Approve
          </Button>
          <Button
            component="span"
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
            startIcon={<ThumbDownIcon />}
            onClick={() => {
              if (state.user?.role === UserRole.Admin) {
                handleApproveReject(BlogStatus.Rejected);
              } else if (state.user?.role === UserRole.Member) {
                handleApproveReject(BlogStatus.RejectedByClub);
              }
            }}
          >
            Reject
          </Button>
        </Fragment>
      )}
    </Grid>
  );
};

export default BlogApprove;
