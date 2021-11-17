import React from 'react';

import GlobalStyle from './styles/global';

import AppProvider from './hooks/index';

import Routes from './routes';

const GoBarberApp: React.FC = () => (
  <>
    <AppProvider>
      <Routes />
    </AppProvider>

    <GlobalStyle />
  </>
);

export default GoBarberApp;
