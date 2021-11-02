import React from 'react';
import {
  UilMessage,
  // @ts-expect-error: React-Unicons doesnt have @types yet
} from '@iconscout/react-unicons';

import projectImg from '../../../assets/project320.jpg';
import Button from '../../../components/Button';

import { Project, ProjectContainer, ProjectData } from './styles';

const DashboardProject: React.FC = () => {
  return (
    <Project id="project">
      <div>
        <ProjectContainer>
          <ProjectData>
            <h2>You have a new project</h2>
            <p>Contact me now and get 30% discount.</p>
            <Button isFlex isWhite>
              Contact Me <UilMessage />
            </Button>
          </ProjectData>
          <img src={projectImg} />
        </ProjectContainer>
      </div>
    </Project>
  );
};

export default DashboardProject;
