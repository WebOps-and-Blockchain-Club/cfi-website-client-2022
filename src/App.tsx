import React from "react";
import Routes from "./Components/Route";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { red, lightGreen } from "@mui/material/colors";

interface Probs {}
interface PaletteColor {
  light?: string;
  main: string;
  dark?: string;
  contrastText?: string;
}
interface theme {
  palette: {
    primary: PaletteColor;
    secondary: PaletteColor;
  };
}

const theme = createTheme({
  palette: {
    primary: {
      light: "#080808",
      main: "#030303",
      dark: "#000000",
      contrastText: "#D6D6D6",
    },
    secondary: {
      main: "#FF0000",
    },
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
