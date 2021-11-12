import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import AppProvider from './hooks/index';

import GlobalStyle from './styles/global';
import light from './styles/themes/light';
import Routes from './routes';

const App: React.FC = () => (
  <>
    <ThemeProvider theme={light}>
      <Router>
        <AppProvider>
          <Routes />
        </AppProvider>
      </Router>

      <GlobalStyle />
    </ThemeProvider>
  </>
);

export default App;
