import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { QueryParamProvider } from 'use-query-params';
import { RouteAdapter } from 'adapters/routeAdapter';
import { Routing } from './routes/routes';
import { theme } from './theme';

export function App() {
  const routes = Routing();
  return (
    <Router>
      <QueryParamProvider ReactRouterRoute={RouteAdapter}>
        <ThemeProvider theme={theme}>
          <StyledEngineProvider injectFirst>
            <div className="App">
              {routes}
            </div>
          </StyledEngineProvider>
        </ThemeProvider>
      </QueryParamProvider>
    </Router>
  );
}
