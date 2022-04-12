import React from "react";
import { Backdrop, CircularProgress } from "@mui/material";

interface Probs {
  loading: boolean;
}

const Loading = (probs: Probs) => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={probs.loading}
    >
      <CircularProgress color="inherit" sx={{ color: "secondary.main" }} />
    </Backdrop>
  );
};

export default Loading;
