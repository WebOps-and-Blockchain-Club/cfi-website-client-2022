import {
  Card,
  CardContent,
  Grid,
  IconButton,
  Snackbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { useGetProjectQuery } from "../../../generated/graphql";
import CustomBox, { CustomGridPage } from "../../Shared/CustomBox";
import Heading from "../../Shared/Heading";
import Comment from "./Comment";
import CloseIcon from "@mui/icons-material/Close";

interface Probs {}

const Project = (probs: Probs) => {
  const { id } = useParams<{ id: string }>();
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
        <Snackbar
          open={!!error || !!loading}
          autoHideDuration={loading ? null : 6000}
          // onClose={handleClose}
          message={JSON.stringify(error) + loading}
          action={
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              // onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          }
        />
        {data?.getProject && (
          <>
            <Heading white={data.getProject.title} red="" />
            <Typography color="primary.contrastText">
              By {data.getProject.createdBy.name}
            </Typography>
            <Card
              sx={{
                width: "100%",
                borderRadius: "20px",
                backgroundColor: "primary.light",
                display: "flex",
                flexDirection: matchesLG ? "column" : "row",
                alignItems: "center",
                // justifyContent: "center",
                p: matchesSM ? "15px" : "30px",
                mt: "30px",
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
                    <Grid
                      item
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
                        QUESTION{" "}
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
                      sx={{
                        textAlignLast: "center",
                      }}
                      dangerouslySetInnerHTML={{ __html: data.getProject.q1! }}
                    />
                  </>
                )}
                {data.getProject.q2 && (
                  <>
                    <Grid
                      item
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
                        QUESTION{" "}
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
                      sx={{
                        textAlignLast: "center",
                      }}
                      dangerouslySetInnerHTML={{ __html: data.getProject.q2! }}
                    />
                  </>
                )}
                {data.getProject.q3 && (
                  <>
                    <Grid
                      item
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
                        QUESTION{" "}
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
                      sx={{
                        textAlignLast: "center",
                      }}
                      dangerouslySetInnerHTML={{ __html: data.getProject.q3! }}
                    />
                  </>
                )}
                {data.getProject.q4 && (
                  <>
                    <Grid
                      item
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
                        QUESTION{" "}
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
                      sx={{
                        textAlignLast: "center",
                      }}
                      dangerouslySetInnerHTML={{ __html: data.getProject.q4! }}
                    />
                  </>
                )}
                {data.getProject.q5 && (
                  <>
                    <Grid
                      item
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
                        QUESTION{" "}
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
                      sx={{
                        textAlignLast: "center",
                      }}
                      dangerouslySetInnerHTML={{ __html: data.getProject.q5! }}
                    />
                  </>
                )}
                {data.getProject.q6 && (
                  <>
                    <Grid
                      item
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
                        QUESTION{" "}
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
                      sx={{
                        textAlignLast: "center",
                      }}
                      dangerouslySetInnerHTML={{ __html: data.getProject.q6! }}
                    />
                  </>
                )}
                {data.getProject.q7 && (
                  <>
                    <Grid
                      item
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
                        QUESTION{" "}
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
                      sx={{
                        textAlignLast: "center",
                      }}
                      dangerouslySetInnerHTML={{ __html: data.getProject.q7! }}
                    />
                  </>
                )}
              </CardContent>
            </Card>

            <Comment comments={data.getProject.comments} />
          </>
        )}
      </CustomGridPage>
    </CustomBox>
  );
};

export default Project;
