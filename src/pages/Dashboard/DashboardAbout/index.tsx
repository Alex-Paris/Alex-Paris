import React, { useCallback } from 'react';
import { saveAs } from 'file-saver';

import aboutImg from '../../../assets/about320.jpg';
import Button from '../../../components/Button';
import Icon from '../../../components/Unicons';

import {
  About,
  AboutContainer,
  AboutData,
  AboutInfo,
  AboutButtons,
  AboutInfoTitle,
  AboutInfoName,
} from './styles';

const DashboardAbout: React.FC = () => {
  const year = new Date().getFullYear() - 2018;
  const lpad = '00';
  const yearsExperience = (lpad + year).slice(-lpad.length);

  const handleDownloadCV = useCallback(() => {
    saveAs('/files/AlexParis-Resume.pdf', 'AlexParis-Resume.pdf');
  }, []);

  return (
    <About id="about">
      <h2>About Me</h2>
      <span>My introduction</span>

      <AboutContainer>
        <img src={aboutImg} />

        <AboutData>
          <p>
            Web and desktop developer, with extensive knowledge and experience,
            working in technologies and Ui design
          </p>

          <AboutInfo>
            <div>
              <AboutInfoTitle>{yearsExperience}+</AboutInfoTitle>
              <AboutInfoName>
                Years <br /> experience
              </AboutInfoName>
            </div>

            <div>
              <AboutInfoTitle>02+</AboutInfoTitle>
              <AboutInfoName>
                Completed <br /> project
              </AboutInfoName>
            </div>

            <div>
              <AboutInfoTitle>01+</AboutInfoTitle>
              <AboutInfoName>
                Companies <br /> worked
              </AboutInfoName>
            </div>
          </AboutInfo>

          <AboutButtons>
            <Button isFlex onClick={handleDownloadCV}>
              Download CV <Icon icon="UilDownloadAlt" />
            </Button>
          </AboutButtons>
        </AboutData>
      </AboutContainer>
    </About>
  );
};

export default DashboardAbout;
