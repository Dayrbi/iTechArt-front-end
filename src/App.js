import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';
import { Routing } from './routes/routes';

const theme = createTheme();
export function App() {
  const routes = Routing();
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
          <div className="App">
            {routes}
          </div>
        </StyledEngineProvider>
      </ThemeProvider>
    </Router>
  );
}
