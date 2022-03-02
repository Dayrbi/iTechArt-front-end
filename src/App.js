import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import UseRoute from './routes/routes';

function App() {
  const routes = UseRoute();
  return (
    <Router>
      <div className="App">
        {routes}
      </div>
    </Router>

  );
}

export default App;
