import { Chip, Grid } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BlogStatus } from "../../generated/graphql";
import AuthContext from "../../Utils/context";

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

const EditBlogButton = (probs: Probs) => {
  const { state } = useContext(AuthContext)!;

  const navigate = useNavigate();

  const handleEdit = (value: string) => {
    navigate(`/blog/new?id=${value}`);
  };

  return (
    <>
      {[
        BlogStatus.Draft,
        BlogStatus.Pending,
        BlogStatus.RejectedByClub,
        BlogStatus.Rejected,
      ].includes(probs.blog.status) &&
        state.user?.id === probs.blog.createdBy.id && (
          <Grid container gap={2} pt={1}>
            <Chip
              label={"Edit"}
              sx={{
                backgroundColor: "secondary.main",
                ":hover": {
                  backgroundColor: "secondary.main",
                },
              }}
              onClick={() => handleEdit(probs.blog.id)}
            />
          </Grid>
        )}
      ;
    </>
  );
};

export default EditBlogButton;
