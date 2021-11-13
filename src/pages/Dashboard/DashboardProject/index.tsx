import React, { useCallback } from 'react';
import { scroller } from 'react-scroll';

import projectImg from '../../../assets/project320.jpg';
import Button from '../../../components/Button';
import Icon from '../../../components/Unicons';

import { Project, ProjectContainer, ProjectData } from './styles';

const DashboardProject: React.FC = () => {
  const handleContactMeClick = useCallback(() => {
    scroller.scrollTo('contactme', {
      spy: true,
      smooth: true,
      offset: -70,
      duration: 500,
    });
  }, []);

  return (
    <Project id="project">
      <div>
        <ProjectContainer>
          <ProjectData>
            <h2>Need a hand in your company</h2>
            <p>Contact me now.</p>
            <Button isFlex isWhite onClick={handleContactMeClick}>
              Contact Me <Icon icon="UilMessage" />
            </Button>
          </ProjectData>
          <img src={projectImg} />
        </ProjectContainer>
      </div>
    </Project>
  );
};

export default DashboardProject;
