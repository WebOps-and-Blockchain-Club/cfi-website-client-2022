import React from "react";
import { Grid, Typography } from "@mui/material";

import cfilogo from "../../Images/CFILogo/CFI Logo (with text) - White - Copy.png";
import { margin, padding } from "@mui/system";

function Vision() {
  return (
    <Grid
      container
      rowSpacing={3}
      direction="column"
      justifyContent="center"
      mt={3}
      mb={12}
      alignItems="center"
    >
      <Typography variant="h4" color="primary.contrastText" p={6}>
       VISION
      </Typography>
      <Grid
        item
        container
        direction="row"
      >
        <Grid item 
        container
        p={4}
        lg={6}
        md={6}
        sm={12}
        xs={12}
        justifyContent="center"
        alignItems="center"
        >
          
            <Typography variant="h4" color="primary.contrastText"  sx={{fontFamily: "Proxima Nova Bold" , marginRight: 10}}>
                “To promote informal learning and foster innovation and invention in technology, with a focus on technologies aimed at contributing positively to the environment and to the society”
              </Typography>
        </Grid>
        <Grid
          container
          item
          sx={{ background: "linear-gradient(138.5deg, #0000006b, #420101)", borderRadius: "40px" }}
          alignItems="center"
          justifyContent="center"
          p={3}
          lg={6}
        md={6}
        sm={12}
        xs={12}
        >
            <img
              src={cfilogo}
              alt="cfi logo"
              style={{  width: "50%" , marginTop: "10%" , marginBottom: "10%"}}
            />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Vision;