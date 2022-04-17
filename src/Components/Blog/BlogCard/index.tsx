import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import moment from "moment";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BlogStatus } from "../../../generated/graphql";
import { RoleAccess } from "../../../Utils/config";
import AuthContext from "../../../Utils/context";
import { HeadingSub } from "../../Shared/Heading";

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
  handleTagClick: Function;
  handleClubClick: Function;
}

const BlogCard = (probs: Probs) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));

  const { state } = useContext(AuthContext)!;

  const navigate = useNavigate();

  const handleEdit = (value: string) => {
    navigate(`/blog/new?id=${value}`);
  };

  return (
    <Card
      sx={{
        width: "100%",
        borderRadius: "20px",
        display: "flex",
        flexDirection: matchesLG ? "column" : "row",
        backgroundColor: "primary.light",
        boxShadow:
          "5px 5px 5px #000000, -3px -3px 5px rgba(255, 255, 255, 0.1);",
      }}
    >
      {probs.blog.image && (
        <CardMedia
          component="img"
          image={probs.blog.image?.url}
          alt={probs.blog.image?.name}
          sx={{
            borderRadius: "20px 20px 0 0",
            verticalAlign: "middle",
            objectFit: "cover",
            height: matches ? "50vw" : "250px",
            width: matches ? "62.5vw" : "312.5px",
          }}
        />
      )}
      <CardContent
        sx={{
          px: "30px",
          py: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
        style={{
          paddingBottom: "20px",
        }}
      >
        <Link
          to={`/blog/${probs.blog.id}`}
          style={{ textDecoration: "none", width: "fit-content" }}
        >
          <HeadingSub white={probs.blog.title} red="" />
        </Link>
        <Grid item container gap={2}>
          <Typography
            component="div"
            color="primary.contrastText"
            sx={{
              textAlign: "justify",
              fontSize: matches ? "12px" : "14px",
            }}
          >
            {probs.blog.createdBy.name},{" "}
            <Button
              variant="text"
              sx={{
                color: "primary.contrastText",
                textTransform: "none",
                padding: 0,
              }}
              onClick={() => probs.handleClubClick(probs.blog.club?.name)}
            >
              {probs.blog.club?.name}
            </Button>{" "}
            &bull; {moment(probs.blog.updatedAt).format("MMMM Do, YYYY")}
          </Typography>
        </Grid>
        {probs.blog.tags && (
          <Grid container gap={2} pt={1}>
            {probs.blog.tags.map((_tag) => (
              <Chip
                label={_tag.name}
                sx={{
                  backgroundColor: "primary.contrastText",
                  ":hover": {
                    backgroundColor: "primary.contrastText",
                  },
                }}
                size="small"
                onClick={() => probs.handleTagClick(_tag.name)}
              />
            ))}
          </Grid>
        )}
        <Typography
          component="div"
          color="primary.contrastText"
          sx={{
            textAlign: "justify",
            fontSize: matches ? "16px" : "18px",
          }}
        >
          {probs.blog.description}
        </Typography>
        <Grid item container gap={2}>
          <Typography
            component="div"
            color="primary.contrastText"
            sx={{
              textAlign: "justify",
              fontSize: matches ? "12px" : "14px",
            }}
          >
            {probs.blog.views} views &bull; {probs.blog.readingTime} mins read
          </Typography>
        </Grid>
        {(RoleAccess.BlogAdminAccess.includes(state.user?.role) ||
          state.user?.id === probs.blog.createdBy.id) && (
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
      </CardContent>
    </Card>
  );
};

export default BlogCard;
