import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import Routes from "./Components/Route";
import { AuthContextProvider } from "./Utils/context";
import { ApolloProvider } from "@apollo/client";
import client from "./Graphql";
import ReactGA from 'react-ga4';

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
      dark: "#860000",
    },
  },
  typography: {
    fontFamily: ["Proxima Nova", "Proxima Nova Bold"].join(","),
  },
});

const App = (probs: Probs) => {
  React.useEffect(() => {
    ReactGA.initialize("G-FE0EJC6NK8");

    ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search });
  }, []);

  return (
    <ApolloProvider client={client}>
      <AuthContextProvider>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </AuthContextProvider>
    </ApolloProvider>
  );
};

export default App;
