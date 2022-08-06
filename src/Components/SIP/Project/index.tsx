import {
  Card,
  CardContent,
  Chip,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  LoginType,
  ProjectStatus,
  useGetProjectQuery,
  UserRole,
} from "../../../generated/graphql";
import CustomBox, { CustomGridPage } from "../../Shared/CustomBox";
import Heading from "../../Shared/Heading";
import Comment from "./Comment";
import AuthContext from "../../../Utils/context";
import CommentForm from "./CommentForm";
import Loading from "../../Shared/Dialog/Loading";
import ErrorDialog from "../../Shared/Dialog/ErrorDialog";
import { SIPData } from "../../../Assets/Data/SIP";
import moment from "moment";
import LikeButton from "../LikeButton";
import "../../../Styles/editor.css";
import Login from "../../Auth/Login";

interface Probs {}

const Project = (probs: Probs) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { state } = useContext(AuthContext)!;
  const theme = useTheme();
  const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const { data, loading, error } = useGetProjectQuery({
    variables: {
      projectId: id!,
    },
  });

  const setClubNameFilter = (value: string) => {
    navigate(`/sip/projects?club=${value}`);
  };

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
        {data?.getProject && (
          <Grid item container>
            <Grid item container flexDirection={"column"}>
              <Heading white={data.getProject.title} red="" />
              <Typography color="primary.contrastText" textAlign={"center"}>
                By {data.getProject.createdBy.name}
              </Typography>
              <Typography
                component="div"
                color="primary.contrastText"
                textAlign={"center"}
              >
                Last updated at{" "}
                {moment(data.getProject.updatedAt).format(
                  "MMMM Do YYYY, h:mm a"
                )}
              </Typography>
              {data.getProject.clubs && (
                <Grid container gap={2} pt={1} justifyContent="center">
                  {data.getProject.clubs.map((_club) => (
                    <Chip
                      label={_club.name}
                      sx={{
                        backgroundColor: "primary.contrastText",
                        ":hover": {
                          backgroundColor: "primary.contrastText",
                        },
                      }}
                      size="small"
                      onClick={() => setClubNameFilter(_club.name)}
                    />
                  ))}
                </Grid>
              )}
            </Grid>

            <Grid item container flexDirection={"column"} mt={5}>
              <Card
                sx={{
                  borderRadius: "20px",
                  backgroundColor: "primary.light",
                  p: matchesSM ? "15px" : "30px",
                  boxShadow:
                    "5px 5px 5px #000000, -3px -3px 5px rgba(255, 255, 255, 0.1);",
                }}
              >
                <CardContent
                  style={{
                    padding: "unset",
                  }}
                >
                  {data.getProject.q1 && (
                    <>
                      <Grid item pt={matchesLG ? "15px" : "unset"}>
                        <Typography
                          variant={matchesSM ? "h6" : "h5"}
                          color="secondary"
                          sx={{
                            display: "inline",
                            textTransform: "uppercase",
                            fontFamily: "Proxima Nova Bold",
                          }}
                        >
                          1.{" "}
                        </Typography>
                        <Typography
                          variant={matchesSM ? "h6" : "h5"}
                          color="primary.contrastText"
                          sx={{
                            display: "inline",
                            fontFamily: "Proxima Nova Bold",
                          }}
                        >
                          {SIPData.questions[0]}
                        </Typography>
                      </Grid>
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
                          __html: data.getProject.q1!,
                        }}
                        className="editor"
                      />
                    </>
                  )}
                  {data.getProject.q2 && (
                    <>
                      <Grid item pt={matchesLG ? "15px" : "unset"}>
                        <Typography
                          variant={matchesSM ? "h6" : "h5"}
                          color="secondary"
                          sx={{
                            display: "inline",
                            textTransform: "uppercase",
                            fontFamily: "Proxima Nova Bold",
                          }}
                        >
                          2.{" "}
                        </Typography>
                        <Typography
                          variant={matchesSM ? "h6" : "h5"}
                          color="primary.contrastText"
                          sx={{
                            display: "inline",
                            fontFamily: "Proxima Nova Bold",
                          }}
                        >
                          {SIPData.questions[1]}
                        </Typography>
                      </Grid>
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
                          __html: data.getProject.q2!,
                        }}
                        className="editor"
                      />
                    </>
                  )}
                  {data.getProject.q3 && (
                    <>
                      <Grid item pt={matchesLG ? "15px" : "unset"}>
                        <Typography
                          variant={matchesSM ? "h6" : "h5"}
                          color="secondary"
                          sx={{
                            display: "inline",
                            textTransform: "uppercase",
                            fontFamily: "Proxima Nova Bold",
                          }}
                        >
                          3.{" "}
                        </Typography>
                        <Typography
                          variant={matchesSM ? "h6" : "h5"}
                          color="primary.contrastText"
                          sx={{
                            display: "inline",
                            fontFamily: "Proxima Nova Bold",
                          }}
                        >
                          {SIPData.questions[2]}
                        </Typography>
                      </Grid>
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
                          __html: data.getProject.q3!,
                        }}
                        className="editor"
                      />
                    </>
                  )}
                  {data.getProject.q4 && (
                    <>
                      <Grid item pt={matchesLG ? "15px" : "unset"}>
                        <Typography
                          variant={matchesSM ? "h6" : "h5"}
                          color="secondary"
                          sx={{
                            display: "inline",
                            textTransform: "uppercase",
                            fontFamily: "Proxima Nova Bold",
                          }}
                        >
                          4.{" "}
                        </Typography>
                        <Typography
                          variant={matchesSM ? "h6" : "h5"}
                          color="primary.contrastText"
                          sx={{
                            display: "inline",
                            fontFamily: "Proxima Nova Bold",
                          }}
                        >
                          {SIPData.questions[3]}
                        </Typography>
                      </Grid>
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
                          __html: data.getProject.q4!,
                        }}
                        className="editor"
                      />
                    </>
                  )}
                  <Grid item pt={2}>
                    <LikeButton
                      projectId={data.getProject.id}
                      likeCount={data.getProject.likeCount}
                      isLiked={data.getProject.isLiked}
                    />
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            <Grid item container mt={5}>
              <Comment comments={data.getProject.comments} />
            </Grid>

            <Grid item container justifyContent="center" mt={5}>
              {state?.user?.role === UserRole.User ? (
                data.getProject.status === ProjectStatus.Public && (
                  <CommentForm projectId={data.getProject.id} />
                )
              ) : (
                <Login
                  btnMessage="Login To Comment"
                  isSmailOnly={true}
                  roles={[UserRole.User]}
                  loginType={LoginType.Sip}
                />
              )}
            </Grid>
          </Grid>
        )}
      </CustomGridPage>
    </CustomBox>
  );
};

export default Project;
