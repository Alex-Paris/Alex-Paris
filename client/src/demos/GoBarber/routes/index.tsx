import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/demos/GoBarber/" exact component={SignIn} />
    <Route path="/demos/GoBarber/signup" component={SignUp} />
    <Route path="/demos/GoBarber/forgot-password" component={ForgotPassword} />
    <Route path="/demos/GoBarber/reset-password" component={ResetPassword} />

    <Route path="/demos/GoBarber/dashboard" component={Dashboard} isPrivate />
    <Route path="/demos/GoBarber/profile" component={Profile} isPrivate />
  </Switch>
);

export default Routes;
