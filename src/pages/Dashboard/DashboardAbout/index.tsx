import React from 'react';
import {
  UilDownloadAlt,
  // @ts-expect-error: React-Unicons doesnt have @types yet
} from '@iconscout/react-unicons';

import aboutImg from '../../../assets/about320.jpg';
import Button from '../../../components/Button';

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
              <AboutInfoTitle>08+</AboutInfoTitle>
              <AboutInfoName>
                Years <br /> experience
              </AboutInfoName>
            </div>

            <div>
              <AboutInfoTitle>20+</AboutInfoTitle>
              <AboutInfoName>
                Completed <br /> project
              </AboutInfoName>
            </div>

            <div>
              <AboutInfoTitle>05+</AboutInfoTitle>
              <AboutInfoName>
                Companies <br /> worked
              </AboutInfoName>
            </div>
          </AboutInfo>

          <AboutButtons>
            <Button isFlex>
              Download CV <UilDownloadAlt size="1.25rem" />
            </Button>
          </AboutButtons>
        </AboutData>
      </AboutContainer>
    </About>
  );
};

export default DashboardAbout;
