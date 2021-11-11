import React, { useEffect, useCallback, useState } from 'react';
import { Link as HashLink } from 'react-scroll';

import Icon from '../../components/Unicons';

import { Content, ScrollUp } from './styles';

import DashboardHome from './DashboardHome';
import DashboardAbout from './DashboardAbout';
import DashboardSkills from './DashboardSkills';
import DashboardQualification from './DashboardQualification';
import DashboardServices from './DashboardServices';
import DashboardPortfolio from './DashboardPortfolio';
import DashboardProject from './DashboardProject';
import DashboardTestimonials from './DashboardTestimonials';
import DashboardContact from './DashboardContact';
import DashboardFooter from './DashboardFooter';

const Dashboard: React.FC = () => {
  const [scrollUp, setScrollUp] = useState(false);

  const handleScroll = useCallback(() => {
    if (scrollY > 560) {
      setScrollUp(true);
      return;
    }
    setScrollUp(false);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <Content>
        <DashboardHome />

        <DashboardAbout />

        <DashboardSkills />

        <DashboardQualification />

        <DashboardServices />

        <DashboardPortfolio />

        <DashboardProject />

        <DashboardTestimonials />

        <DashboardContact />
      </Content>

      <DashboardFooter />

      <ScrollUp scrollUp={scrollUp}>
        <HashLink activeClass="active" to="home" spy smooth duration={300}>
          <Icon icon="UilArrowUp" />
        </HashLink>
      </ScrollUp>
    </>
  );
};

export default Dashboard;
