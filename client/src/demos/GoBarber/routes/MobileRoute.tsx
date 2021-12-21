import React from 'react';

import SignIn from '../mobile/SignIn';
import Dashboard from '../mobile/Dashboard';

import MobilePreview from '../../../components/MobilePreview';
import { MobileRouteProvider } from '../../../hooks/context/mobileRoute';

const MobileRoute: React.FC = () => (
  <>
    <MobilePreview>
      <MobileRouteProvider
        propPages={[
          { page: SignIn, pageTitle: 'SignIn', isActive: true },
          { page: Dashboard, pageTitle: 'Dashboard' },
        ]}
      />
    </MobilePreview>
  </>
);

export default MobileRoute;
