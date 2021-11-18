import React from 'react';
import { Route as RouteDom, Switch, Redirect } from 'react-router-dom';

import NavMenu from '../components/NavMenu';
import Dashboard from '../pages/Dashboard';
import DemoRoutes from '../demos';
import Route from './Route';

const Routes: React.FC = () => (
  <>
    <RouteDom path="/" component={NavMenu} />
    <Switch>
      <Route exact path="/" component={Dashboard} />

      <Route path="/demos" isDemo component={DemoRoutes} />
      <Redirect to="/" />
    </Switch>
  </>
);

export default Routes;
