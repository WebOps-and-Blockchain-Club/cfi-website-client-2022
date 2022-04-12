import {
  Card,
  CardContent,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { useGetProjectQuery, UserRole } from "../../../generated/graphql";
import CustomBox, { CustomGridPage } from "../../Shared/CustomBox";
import Heading from "../../Shared/Heading";
import Comment from "./Comment";
import AuthContext from "../../../Utils/context";
import CommentForm from "../../Form/CommentForm";
import SIPLogin from "../Auth/SIPLogin";
import Loading from "../../Shared/Dialog/Loading";
import ErrorDialog from "../../Shared/Dialog/ErrorDialog";

interface Probs {}

const Project = (probs: Probs) => {
  const { id } = useParams<{ id: string }>();
  const { state } = useContext(AuthContext)!;
  const theme = useTheme();
  const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const { data, loading, error } = useGetProjectQuery({
    variables: {
      projectId: id!,
    },
  });
  return (
    <CustomBox>
      <CustomGridPage>
        <Loading loading={!!loading} />
        <ErrorDialog message={!!error ? "Some Error Occurred" : null} />
        {data?.getProject && (
          <Grid item container>
            <Grid item container flexDirection={"column"}>
              <Heading white={data.getProject.title} red="" />
              <Typography color="primary.contrastText" textAlign={"center"}>
                By {data.getProject.createdBy.name}
              </Typography>
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
                          color="primary.contrastText"
                          sx={{
                            display: "inline",
                            textTransform: "uppercase",
                            fontFamily: "Proxima Nova Bold",
                          }}
                        >
                          QUESTION{" "}
                        </Typography>
                        <Typography
                          variant={matchesSM ? "h6" : "h5"}
                          color="secondary"
                          sx={{
                            display: "inline",
                            textTransform: "uppercase",
                            fontFamily: "Proxima Nova Bold",
                          }}
                        >
                          1
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
                      />
                    </>
                  )}
                  {data.getProject.q2 && (
                    <>
                      <Grid item pt={matchesLG ? "15px" : "unset"}>
                        <Typography
                          variant={matchesSM ? "h6" : "h5"}
                          color="primary.contrastText"
                          sx={{
                            display: "inline",
                            textTransform: "uppercase",
                            fontFamily: "Proxima Nova Bold",
                          }}
                        >
                          QUESTION{" "}
                        </Typography>
                        <Typography
                          variant={matchesSM ? "h6" : "h5"}
                          color="secondary"
                          sx={{
                            display: "inline",
                            textTransform: "uppercase",
                            fontFamily: "Proxima Nova Bold",
                          }}
                        >
                          2
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
                      />
                    </>
                  )}
                  {data.getProject.q3 && (
                    <>
                      <Grid item pt={matchesLG ? "15px" : "unset"}>
                        <Typography
                          variant={matchesSM ? "h6" : "h5"}
                          color="primary.contrastText"
                          sx={{
                            display: "inline",
                            textTransform: "uppercase",
                            fontFamily: "Proxima Nova Bold",
                          }}
                        >
                          QUESTION{" "}
                        </Typography>
                        <Typography
                          variant={matchesSM ? "h6" : "h5"}
                          color="secondary"
                          sx={{
                            display: "inline",
                            textTransform: "uppercase",
                            fontFamily: "Proxima Nova Bold",
                          }}
                        >
                          3
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
                      />
                    </>
                  )}
                  {data.getProject.q4 && (
                    <>
                      <Grid item pt={matchesLG ? "15px" : "unset"}>
                        <Typography
                          variant={matchesSM ? "h6" : "h5"}
                          color="primary.contrastText"
                          sx={{
                            display: "inline",
                            textTransform: "uppercase",
                            fontFamily: "Proxima Nova Bold",
                          }}
                        >
                          QUESTION{" "}
                        </Typography>
                        <Typography
                          variant={matchesSM ? "h6" : "h5"}
                          color="secondary"
                          sx={{
                            display: "inline",
                            textTransform: "uppercase",
                            fontFamily: "Proxima Nova Bold",
                          }}
                        >
                          4
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
                      />
                    </>
                  )}
                  {data.getProject.q5 && (
                    <>
                      <Grid item pt={matchesLG ? "15px" : "unset"}>
                        <Typography
                          variant={matchesSM ? "h6" : "h5"}
                          color="primary.contrastText"
                          sx={{
                            display: "inline",
                            textTransform: "uppercase",
                            fontFamily: "Proxima Nova Bold",
                          }}
                        >
                          QUESTION{" "}
                        </Typography>
                        <Typography
                          variant={matchesSM ? "h6" : "h5"}
                          color="secondary"
                          sx={{
                            display: "inline",
                            textTransform: "uppercase",
                            fontFamily: "Proxima Nova Bold",
                          }}
                        >
                          5
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
                          __html: data.getProject.q5!,
                        }}
                      />
                    </>
                  )}
                  {data.getProject.q6 && (
                    <>
                      <Grid item pt={matchesLG ? "15px" : "unset"}>
                        <Typography
                          variant={matchesSM ? "h6" : "h5"}
                          color="primary.contrastText"
                          sx={{
                            display: "inline",
                            textTransform: "uppercase",
                            fontFamily: "Proxima Nova Bold",
                          }}
                        >
                          QUESTION{" "}
                        </Typography>
                        <Typography
                          variant={matchesSM ? "h6" : "h5"}
                          color="secondary"
                          sx={{
                            display: "inline",
                            textTransform: "uppercase",
                            fontFamily: "Proxima Nova Bold",
                          }}
                        >
                          6
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
                          __html: data.getProject.q6!,
                        }}
                      />
                    </>
                  )}
                  {data.getProject.q7 && (
                    <>
                      <Grid item pt={matchesLG ? "15px" : "unset"}>
                        <Typography
                          variant={matchesSM ? "h6" : "h5"}
                          color="primary.contrastText"
                          sx={{
                            display: "inline",
                            textTransform: "uppercase",
                            fontFamily: "Proxima Nova Bold",
                          }}
                        >
                          QUESTION{" "}
                        </Typography>
                        <Typography
                          variant={matchesSM ? "h6" : "h5"}
                          color="secondary"
                          sx={{
                            display: "inline",
                            textTransform: "uppercase",
                            fontFamily: "Proxima Nova Bold",
                          }}
                        >
                          7
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
                          __html: data.getProject.q7!,
                        }}
                      />
                    </>
                  )}
                </CardContent>
              </Card>
            </Grid>

            <Grid item container mt={5}>
              <Comment comments={data.getProject.comments} />
            </Grid>

            <Grid item container justifyContent="center" mt={5}>
              {state?.user?.role === UserRole.User ? (
                <CommentForm projectId={data.getProject.id} />
              ) : (
                <SIPLogin btnMessage="Login To Comment" />
              )}
            </Grid>
          </Grid>
        )}
      </CustomGridPage>
    </CustomBox>
  );
};

export default Project;
