import React from 'react'

import { Grid, Typography } from "@mui/material";

function History() {
    return (
        <Grid
        container
        direction="column"
        justifyContent="center"
        mt={3}
        p={{ xs: 2, md: 4 , lg:6}}
        alignItems="center"
        >
            <Grid item 
            p={6}
          >
            <Typography variant="h4" color="primary.contrastText">
            HISTORY
            </Typography>
            </Grid>
            <Grid item 
            p={3}
            sx={{ textAlign: "center"}}>
                <Typography variant="h5" color="primary.contrastText">
                CFI was started in 2008 with an objective to be a forum for creative output of the budding engineers of IIT Madras. It provides students the necessary platform for realizing their ideas. A great workspace, a comprehensive inventory, ample guidance from faculty & senior-students and the zeal and passion of the CFI team make CFI a gifted asset for IIT Madras students. And over time, CFI has successfully evolved into a hub which encourages thinking and provokes students to generate novel ideas making it truly the “centre” for innovation.
                </Typography>
            </Grid>
      </Grid>
    )
}

export default History
