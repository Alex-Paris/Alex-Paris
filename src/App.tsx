import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AppProvider from './hooks/index';

import GlobalStyle from './styles/global';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <Router>
          <Routes />
        </Router>

        <GlobalStyle />
      </AppProvider>
    </>
  );
};

export default App;
