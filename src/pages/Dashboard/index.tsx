import React from 'react';

import { Content } from './styles';

import DashboardHome from './DashboardHome';
import DashboardAbout from './DashboardAbout';
import DashboardSkills from './DashboardSkills';
import DashboardQualification from './DashboardQualification';
import DashboardServices from './DashboardServices';
import DashboardPortfolio from './DashboardPortfolio';

const Dashboard: React.FC = () => {
  return (
    <>
      <Content>
        <DashboardHome />

        <DashboardAbout />

        <DashboardSkills />

        <DashboardQualification />

        <DashboardServices />

        <DashboardPortfolio />
      </Content>
    </>
  );
};

export default Dashboard;
