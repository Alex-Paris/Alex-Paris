import React, { useEffect, useState } from 'react';
import { Link as HashLink } from 'react-scroll';

import { useScroll } from '../../hooks/context/scrolls';

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
  const [scrollActivated, setScrollActivated] = useState(false);
  const { scrolled } = useScroll();

  useEffect(() => {
    if (scrolled(560)) {
      setScrollActivated(true);
      return;
    }
    setScrollActivated(false);
  }, [scrolled]);

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

      <ScrollUp scrollUp={scrollActivated}>
        <HashLink activeClass="active" to="home" spy smooth duration={300}>
          <Icon icon="UilArrowUp" />
        </HashLink>
      </ScrollUp>
    </>
  );
};

export default Dashboard;
