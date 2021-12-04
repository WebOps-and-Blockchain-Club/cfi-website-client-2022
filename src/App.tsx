import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import Routes from "./Components/Route";

interface Probs {}

const theme = createTheme({
  palette: {
    primary: {
      light: "#080808", //Dark grey
      main: "#030303", //Black
      dark: "#000000", //Standard Black
      contrastText: "#D6D6D6", //White
    },
    secondary: {
      main: "#FF0000", //Red
    },
  },
  typography: {
    fontFamily: ["Proxima Nova", "Proxima Nova Bold"].join(","),
  },
});

const App = (probs: Probs) => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
