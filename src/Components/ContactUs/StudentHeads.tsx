import { Grid, Typography } from "@mui/material";

function StudentHeads() {
  return (
    <Grid
      container
      rowSpacing={3}
      direction="column"
      justifyContent="center"
      mt={3}
      alignItems="center"
    >
      <Grid item>
        <Typography
          variant="h4"
          color="primary.contrastText"
          sx={{ fontFamily: "Proxima Nova Bold", marginBottom: "10px" }}
          align="right"
        >
          Advisor
        </Typography>
      </Grid>
      {/* Advisor */}
      <Grid
        item
        container
        direction="row"
        justifyContent="center"
        mt={6}
        mb={6}
      >
        {/*Advisor 1 */}
        <Grid
          item
          direction="column"
          justifyContent="center"
          lg={6}
          md={6}
          sm={12}
          xs={12}
          p={4}
        >
          <img
            src="https://source.unsplash.com/random"
            alt="Idea"
            style={{ width: "85%", marginTop: "5%", marginBottom: "5%" }}
          />
          <Typography variant="body1" color="primary.contrastText">
            (Name) (Mail id) (Contact No.)
          </Typography>
        </Grid>
        {/*Advisor 2 */}
        <Grid
          item
          direction="column"
          justifyContent="center"
          lg={6}
          md={6}
          sm={12}
          xs={12}
          p={4}
        >
          <img
            src="https://source.unsplash.com/random"
            alt="Idea"
            style={{ width: "85%", marginTop: "5%", marginBottom: "5%" }}
          />
          <Typography variant="body1" color="primary.contrastText">
            (Name) (Mail id) (Contact No.)
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default StudentHeads;
