import React from 'react';

import { Content } from './styles';

import DashboardHome from './DashboardHome';
import DashboardAbout from './DashboardAbout';
import DashboardSkills from './DashboardSkills';

const Dashboard: React.FC = () => {
  return (
    <>
      <Content>
        <DashboardHome />

        <DashboardAbout />

        <DashboardSkills />
      </Content>
    </>
  );
};

export default Dashboard;
