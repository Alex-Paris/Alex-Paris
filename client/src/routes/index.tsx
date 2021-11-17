import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import NavMenu from '../components/NavMenu';
import Dashboard from '../pages/Dashboard';
import DemoRoutes from '../demos';

const Routes: React.FC = () => (
  <>
    <Route path="/" component={NavMenu} />
    <Switch>
      <Route exact path="/" component={Dashboard} />

      <DemoRoutes />
      <Redirect to="/" />
    </Switch>
  </>
);

export default Routes;
