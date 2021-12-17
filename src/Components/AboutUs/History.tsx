import React from 'react'

import { Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function History() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const matches2 = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <Grid
        container
        direction="column"
        justifyContent="center"
        mt={3}
        mb={3}
        p={{ xs: 0, sm:2 , md: 4 , lg:8}}
        alignItems="center"
        >
            <Grid item 
            p={{sm:1 , md:3 , lg: 4}}
          >
            <Typography variant={matches ? "h5" : "h4"} color="primary.contrastText" style={{fontFamily:"Proxima Nova Bold"}}>
            HISTORY
            </Typography>
            </Grid>
            <Grid item 
            p={3}
            sx={{ textAlign: "center"}}>
                <Typography variant={matches2 ? matches ? "subtitle1" : "h6" : "h5"} color="primary.contrastText">
                CFI was started in 2008 with an objective to be a forum for creative output of the budding engineers of IIT Madras. It provides students the necessary platform for realizing their ideas. A great workspace, a comprehensive inventory, ample guidance from faculty & senior-students and the zeal and passion of the CFI team make CFI a gifted asset for IIT Madras students. And over time, CFI has successfully evolved into a hub which encourages thinking and provokes students to generate novel ideas making it truly the “centre” for innovation.
                </Typography>
            </Grid>
      </Grid>
    )
}

export default History
