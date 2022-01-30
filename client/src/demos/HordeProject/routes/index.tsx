import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import Game from '../pages/Game';

const Routes: React.FC = () => (
  <>
    <Switch>
      <Route path="/demos/HordeProject/" exact component={Game} />

      <Redirect to="/" />
    </Switch>
  </>
);

export default Routes;
