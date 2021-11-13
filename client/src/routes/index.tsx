import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import NavMenu from '../components/NavMenu';

const Routes: React.FC = () => (
  <>
    <Route path="/" component={NavMenu} />
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Redirect to="/" />
    </Switch>
  </>
);

export default Routes;
