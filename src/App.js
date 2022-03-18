import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Routing } from './routes/routes';

const theme = createTheme();
export function App() {
  const routes = Routing();
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          {routes}
        </div>
      </ThemeProvider>
    </Router>

  );
}
