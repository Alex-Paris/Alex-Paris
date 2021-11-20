import React, { useEffect, useState } from 'react';
import { Link as HashLink } from 'react-scroll';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

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

const DashboardPreview: React.FC = () => {
  const [scrollActivated, setScrollActivated] = useState(false);
  const { scrolledY } = useScroll();

  useEffect(() => {
    if (scrolledY > 560) {
      setScrollActivated(true);
      return;
    }
    setScrollActivated(false);
  }, [scrolledY]);

  return (
    <>
      <Parallax pages={5} style={{ top: '0', left: '0' }}>
        <Content>
          <ParallaxLayer offset={0} speed={1}>
            <DashboardHome />
          </ParallaxLayer>

          <ParallaxLayer
            offset={0.9}
            speed={2}
            style={{ backgroundColor: '#ff6d6d' }}
          />

          <ParallaxLayer
            offset={0.7}
            speed={1}
            style={{
              color: 'white',
            }}
          >
            <DashboardAbout />
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={1}>
            <DashboardSkills />
          </ParallaxLayer>

          <ParallaxLayer offset={1.7} speed={1}>
            <DashboardQualification />
          </ParallaxLayer>

          <ParallaxLayer offset={2} speed={1}>
            <DashboardServices />
          </ParallaxLayer>

          <ParallaxLayer offset={2.7} speed={1}>
            <DashboardPortfolio />
          </ParallaxLayer>

          <ParallaxLayer offset={3} speed={1}>
            <DashboardProject />
          </ParallaxLayer>

          <ParallaxLayer offset={3.7} speed={1}>
            <DashboardTestimonials />
          </ParallaxLayer>

          <ParallaxLayer offset={3.8} speed={1}>
            <DashboardContact />
          </ParallaxLayer>
        </Content>

        <ParallaxLayer offset={3.9} speed={1}>
          <DashboardFooter />
        </ParallaxLayer>
      </Parallax>

      <ScrollUp scrollUp={scrollActivated}>
        <HashLink activeClass="active" to="home" spy smooth duration={300}>
          <Icon icon="UilArrowUp" />
        </HashLink>
      </ScrollUp>
    </>
  );
};

export default DashboardPreview;
