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
import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetBlogQuery,
  UserRole,
  useUpdateViewsMutation,
} from "../../generated/graphql";
import CustomBox, { CustomGridPage } from "../Shared/CustomBox";
import Heading, { HeadingSub } from "../Shared/Heading";
import Loading from "../Shared/Dialog/Loading";
import ErrorDialog from "../Shared/Dialog/ErrorDialog";
import moment from "moment";
import EditBlogButton from "./EditBlogButton";
import AdminEditBlogButton from "../Admin/Blog/AdminEditBlogButton";
import SuggestBlogEdit from "../Admin/Blog/SuggestEdit";
import AuthContext from "../../Utils/context";
import BlogApprove from "../Admin/Blog/BlogApprove";

interface Probs { }

const ViewBlog = (probs: Probs) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));


  const { state } = useContext(AuthContext)!;

  const { data, loading, error } = useGetBlogQuery({
    variables: {
      blogId: id!,
    },
  });

  const [updateViewsMutation] = useUpdateViewsMutation();

  const setClubNameFilter = (value: string) => {
    navigate(`/blog?club=${value}`);
  };
  const setTagNameFilter = (value: string) => {
    navigate(`/blog?tag=${value}`);
  };

  useEffect(() => {
    updateViewsMutation({
      variables: {
        blogId: id!,
      },
    }).catch((e) => console.log(e));
  }, [id, updateViewsMutation]);

  const [errorMessage, setErrorMessage] = React.useState<string | undefined>();

  React.useEffect(() => {
    if (error) setErrorMessage("Some Error Occurred");
  }, [error]);

  return (
    <CustomBox>
      <CustomGridPage>
        <Loading loading={!!loading} />
        <ErrorDialog
          message={errorMessage}
          handleClose={() => setErrorMessage(undefined)}
        />
        {data?.getBlog && (
          <Grid item container>
            <Grid item container flexDirection={"column"}>
              <Heading white={data.getBlog.title} red="" />
              {(data.getBlog.createdBy.id === state.user?.id ||
                data.getBlog.club?.email === state.user?.email ||
                [UserRole.Admin].includes(state.user?.role!)) && (
                  <HeadingSub white="Blog Status: " red={data.getBlog.status} />
                )}
              <BlogApprove
                blog={{
                  id: data.getBlog.id,
                  status: data.getBlog.status,
                  club: {
                    email: data.getBlog.club?.email!,
                  },
                }}
              />
              <Grid item container gap={2} justifyContent="center">
                <Typography
                  component="div"
                  color="primary.contrastText"
                  textAlign="center"
                >
                  <div>{data.getBlog.createdBy.name}</div>
                  <Button
                    variant="text"
                    sx={{
                      color: "primary.contrastText",
                      textTransform: "none",
                      padding: 0,
                    }}
                    onClick={() => setClubNameFilter(data.getBlog?.club?.name!)}
                  >
                    {data.getBlog.club?.name}
                  </Button>{" "}
                  {/* &bull;{" "}
                  {matchesSM?"gggg":"jjjj"} */}
                  <div>
                    {moment(data.getBlog.updatedAt).format("MMMM Do, YYYY")}
                  </div>
                </Typography>
              </Grid>
              {data.getBlog.tags && (
                <Grid container gap={2} pt={1} justifyContent="center">
                  {data.getBlog.tags.map((_tag) => (
                    <Chip
                      label={_tag.name}
                      sx={{
                        backgroundColor: "primary.contrastText",
                        ":hover": {
                          backgroundColor: "primary.contrastText",
                        },
                      }}
                      size="small"
                      onClick={() => setTagNameFilter(_tag.name)}
                    />
                  ))}
                </Grid>
              )}
            </Grid>
            <Grid item container gap={2} pt={1} justifyContent={"center"}>
              <Typography
                component="div"
                color="primary.contrastText"
                sx={{
                  textAlign: "justify",
                  fontSize: matchesSM ? "12px" : "14px",
                }}
              >
                {data.getBlog.views} views &bull; {data.getBlog.readingTime}{" "}
                mins read
              </Typography>
            </Grid>
            <EditBlogButton blog={data.getBlog} />
            <AdminEditBlogButton blog={data.getBlog} />
            <Grid container gap={2} pt={2} justifyContent="center">
              <Typography
                component="div"
                color="primary.contrastText"
                sx={{
                  textAlign: "justify",
                  fontSize: matchesSM ? "16px" : "18px",
                }}
              >
                {data.getBlog.description}
              </Typography>
            </Grid>
            <Grid item container flexDirection={"column"} mt={5}>
              <Card
                sx={{
                  backgroundColor: "transparent",
                  justifyContent: "center",
                  display: "flex"
                }}
              >
                {data?.getBlog?.image?.url &&
                  <CardMedia
                    component="img"
                    image={data?.getBlog?.image?.url}
                    alt={data?.getBlog?.image?.url}
                    sx={{
                      borderRadius: "20px",
                      verticalAlign: "middle",
                      objectFit: "cover",
                      height: matchesLG ? "50vw" : "100%",
                      width: matchesLG ? "70vw" : "312.5px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                  </CardMedia>}
              </Card>
              <Card
                sx={{
                  borderRadius: "20px",
                  //  backgroundColor: "primary.light",
                  backgroundColor: "transparent",
                  p: matchesSM ? "15px" : "30px",
                  // boxShadow:
                  //   "5px 5px 5px #000000, -3px -3px 5px rgba(255, 255, 255, 0.1);",
                }}
              >
                <CardContent
                  style={{
                    padding: "unset",
                  }}
                >
                  {data.getBlog.content && (
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
                        __html: data.getBlog.content!,
                      }}
                      className="editor"
                    />
                  )}
                </CardContent>
              </Card>
            </Grid>
            <Grid item container justifyContent="center" mt={5}>
              <SuggestBlogEdit
                blogId={data.getBlog.id}
                blogClubEmail={data.getBlog.club?.email!}
                blogStatus={data.getBlog.status}
              />
            </Grid>
          </Grid>
        )}
      </CustomGridPage>
    </CustomBox>
  );
};

export default ViewBlog;
