import React from 'react';

import GlobalStyle from './styles/global';

import Routes from './routes';

const ToDoListApp: React.FC = () => (
  <>
    <Routes />

    <GlobalStyle />
  </>
);

export default ToDoListApp;
