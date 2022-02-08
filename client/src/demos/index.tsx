import React from 'react';
import { Route } from 'react-router-dom';

import GoBarberApp from './GoBarber/App';
import GithubExplorerApp from './GithubExplorer/App';

const DemoRoutes: React.FC = () => (
  <>
    <Route path="/demos/GoBarber/" component={GoBarberApp} />
    <Route path="/demos/GithubExplorer/" component={GithubExplorerApp} />
  </>
);

export default DemoRoutes;
