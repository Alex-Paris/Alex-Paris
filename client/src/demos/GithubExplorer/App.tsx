import React from 'react';

import GlobalStyle from './styles/global';

import Routes from './routes';

const GithubExplorerApp: React.FC = () => (
  <>
    <Routes />

    <GlobalStyle />
  </>
);

export default GithubExplorerApp;
