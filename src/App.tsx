import React, { useState } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  Container,
  createTheme,
  CssBaseline,
  Grid,
  ThemeProvider,
} from "@mui/material";
import { orange } from "@mui/material/colors";
import { Envioriment } from "./componente/envioriment/Envioriment";
import {
  defaultGlobalValue,
  GlobalValue,
  PropsGlobalValue,
} from "./context/Context";
import { StartingCampaign } from "./pages/dialer/StartingCampaign";
import { RunBooks } from "./RunBooks";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    mode: "dark",
  },
  status: {
    danger: orange[500],
  },
});

function App() {
  const [globalValue, setGlobalValue] =
    useState<PropsGlobalValue>(defaultGlobalValue);

  return (
    <ThemeProvider theme={theme}>
      <GlobalValue.Provider
        value={{
          value: globalValue,
          setValue: setGlobalValue,
        }}
      >
        <CssBaseline />
        <Container>
          <Envioriment />
          <Grid container spacing={2}>
            {RunBooks.map((runBook) => (
              <Grid key={runBook.description}  item xs={6} md={12}>
                <StartingCampaign runBook={runBook} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </GlobalValue.Provider>
    </ThemeProvider>
  );
}

export default App;
