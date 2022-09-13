import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/demos/ToDoList/" exact component={Dashboard} />
  </Switch>
);

export default Routes;
