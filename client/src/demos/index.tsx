import React from 'react';
import { Route } from 'react-router-dom';

import GoBarberApp from './GoBarber/App';
import HordeProjectGame from './HordeProject/App';

const DemoRoutes: React.FC = () => (
  <>
    <Route path="/demos/GoBarber/" component={GoBarberApp} />
    <Route path="/demos/HordeProject/" component={HordeProjectGame} />
  </>
);

export default DemoRoutes;
