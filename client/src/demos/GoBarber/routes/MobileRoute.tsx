import React from 'react';

import SignIn from '../mobile/SignIn';
import SignUp from '../mobile/SignUp';
import Dashboard from '../mobile/Dashboard';

import MobilePreview from '../../../components/MobilePreview';
import { MobileRouteProvider } from '../../../hooks/context/mobileRoute';

const MobileRoute: React.FC = () => (
  <>
    <MobilePreview>
      <MobileRouteProvider
        propPages={[
          { page: SignIn, pageTitle: 'SignIn', isActive: true },
          { page: SignUp, pageTitle: 'SignUp' },
          { page: Dashboard, pageTitle: 'Dashboard' },
        ]}
      />
    </MobilePreview>
  </>
);

export default MobileRoute;
