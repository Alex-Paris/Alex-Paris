import React from 'react';

import SignIn from '../mobile/SignIn';
import SignUp from '../mobile/SignUp';
import Dashboard from '../mobile/Dashboard';
import Profile from '../mobile/Profile';

import { useAuth } from '../hooks/context/auth';

import MobilePreview from '../../../components/MobilePreview';
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
  ];

  return (
    <>
      <MobilePreview>
        <MobileRouteProvider propPages={pages} />
      </MobilePreview>
    </>
  );
};

export default MobileRoute;
