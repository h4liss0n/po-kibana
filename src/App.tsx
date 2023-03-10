import React, { useState } from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Checkbox, Container, createTheme, CssBaseline, styled, ThemeProvider } from '@mui/material';
import { orange } from '@mui/material/colors';
import { Envioriment } from './pages/envioriment/Envioriment';
import { defaultGlobalValue, GlobalValue, PropsGlobalValue } from './context/Context';


declare module '@mui/material/styles' {
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
    mode: 'dark',
  },
  status: {
    danger: orange[500],
  },
});

const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  color: theme.status.danger,
  '&.Mui-checked': {
    color: theme.status.danger,
  },
}));

function App() {

  const [globalValue, setGlobalValue] = useState<PropsGlobalValue>(defaultGlobalValue);

  return (
    <ThemeProvider theme={theme}>
      <GlobalValue.Provider value={
        {
          value: globalValue,
          setValue: setGlobalValue
        }}>
        <CssBaseline />
        <Container maxWidth="sm">
          <Envioriment />
        </Container>
      </GlobalValue.Provider >
    </ThemeProvider >

  );
}

export default App;
