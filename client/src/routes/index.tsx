import React from 'react';
import { Route as RouteDom, Switch, Redirect } from 'react-router-dom';

import NavMenu from '../components/NavMenu';

import Dashboard from '../pages/Dashboard';

import DemoRoutes from '../demos';
import Route from './Route';

import DashboardPreview from '../pages/Dashboard/index-preview';

const Routes: React.FC = () => (
  <>
    <RouteDom path="/" component={NavMenu} />
    <Switch>
      <Route exact path="/" component={Dashboard} />

      <Route path="/demos" isDemo component={DemoRoutes} />
      <Route exact path="/preview" component={DashboardPreview} />
      <Redirect to="/" />
    </Switch>
  </>
);

export default Routes;
