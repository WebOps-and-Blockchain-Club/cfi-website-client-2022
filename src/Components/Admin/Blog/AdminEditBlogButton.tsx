import {
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
} from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BlogStatus, UserRole } from "../../../generated/graphql";
import AuthContext from "../../../Utils/context";

interface Probs {
  blog: {
    id: string;
    title: string;
    description?: string | null | undefined;
    author?: string | null | undefined;
    views: number;
    readingTime?: number | null | undefined;
    status: BlogStatus;
    image?:
      | {
          name: string;
          url: string;
        }
      | null
      | undefined;
    tags?:
      | {
          id: string;
          name: string;
        }[]
      | null
      | undefined;
    club?:
      | {
          id: string;
          name: string;
          email: string;
        }
      | null
      | undefined;
    updatedAt: any;
    createdBy: {
      id: string;
      name: string;
    };
  };
}

const AdminEditBlogButton = (probs: Probs) => {
  const { state } = useContext(AuthContext)!;

  const [open, setOpen] = React.useState(false);

  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/admin/blog/new?id=${probs.blog.id}`);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Alret</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Ownership of the blog still comes under the created user. So, it
            recommended to use Suggest edit
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEdit}>Continue</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
      {((probs.blog.club?.email === state.user?.email &&
        [
          BlogStatus.Pending,
          BlogStatus.RejectedByClub,
          BlogStatus.Rejected,
        ].includes(probs.blog.status)) ||
        [UserRole.Admin].includes(state.user?.role)) && (
        <Grid container gap={2} pt={1}>
          <Chip
            label={"Make Edit on my Own"}
            sx={{
              backgroundColor: "secondary.main",
              ":hover": {
                backgroundColor: "secondary.main",
              },
            }}
            onClick={() => setOpen(true)}
          />
        </Grid>
      )}
    </>
  );
};

export default AdminEditBlogButton;
