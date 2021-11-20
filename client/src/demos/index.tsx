import React from 'react';
import { Route } from 'react-router-dom';

import GoBarberApp from './GoBarber/App';

const DemoRoutes: React.FC = () => (
  <>
    <Route path="/demos/GoBarber/" component={GoBarberApp} />
  </>
);

export default DemoRoutes;
