import React from 'react';

import SignIn from '../mobile/SignIn';
import SignUp from '../mobile/SignUp';
import Dashboard from '../mobile/Dashboard';
import Profile from '../mobile/Profile';
import CreateAppointment from '../mobile/CreateAppointment';
import AppointmentCreated from '../mobile/AppointmentCreated';

import { useAuth } from '../hooks/context/auth';

import { MobileRouteProvider } from '../../../hooks/context/mobileRoute';

interface MobilePage {
  page: React.FC;
  pageTitle: string;
  isActive?: boolean;
}

const MobileRoute: React.FC = () => {
  const { userMobile } = useAuth();

  const pages: MobilePage[] = [
    { page: SignIn, pageTitle: 'SignIn', isActive: !userMobile },
    { page: SignUp, pageTitle: 'SignUp' },
    { page: Dashboard, pageTitle: 'Dashboard', isActive: !!userMobile },
    { page: Profile, pageTitle: 'Profile' },
    { page: CreateAppointment, pageTitle: 'CreateAppointment' },
    { page: AppointmentCreated, pageTitle: 'AppointmentCreated' },
  ];

  return (
    <>
      <MobileRouteProvider propPages={pages} />
    </>
  );
};

export default MobileRoute;
