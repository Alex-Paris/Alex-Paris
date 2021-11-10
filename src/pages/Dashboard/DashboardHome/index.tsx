import React from 'react';

import { PerfilIcon } from '../../../assets/perfil';
import Button from '../../../components/Button';
import Icon from '../../../components/Unicons';

import {
  Home,
  HomeContainer,
  HomeContent,
  HomeSocial,
  HomeImg,
  HomeData,
  HomeScroll,
} from './styles';

const DashboardHome: React.FC = () => {
  return (
    <Home id="home">
      <HomeContainer>
        <HomeContent>
          <HomeSocial>
            <a
              href="https://www.linkedin.com/in/alex-paris/"
              target="_blank"
              rel="noreferrer"
            >
              <Icon icon="UilLinkedinAlt" />
              <Icon icon="UilExternalLinkAlt" />
            </a>

            <a
              href="https://github.com/Alex-Paris"
              target="_blank"
              rel="noreferrer"
            >
              <Icon icon="UilDribbble" />
              <Icon icon="UilExternalLinkAlt" />
            </a>

            <a
              href="https://github.com/Alex-Paris"
              target="_blank"
              rel="noreferrer"
            >
              <Icon icon="UilGithubAlt" />
              <Icon icon="UilExternalLinkAlt" />
            </a>
          </HomeSocial>

          <HomeImg>
            <PerfilIcon />
          </HomeImg>

          <HomeData>
            <h1>Hi, I&rsquo;am Alex</h1>
            <h3>Fullstack developer</h3>
            <p>
              High level experience in development knowledge, producing quality
              work.
            </p>
            <Button isFlex>
              Contact Me <Icon icon="UilMessage" />
            </Button>
          </HomeData>
        </HomeContent>

        <HomeScroll>
          <Button isFlex isSimple>
            <Icon icon="UilMouseAlt" />
            <span>Scroll down</span>
            <Icon icon="UilArrowDown" />
          </Button>
        </HomeScroll>
      </HomeContainer>
    </Home>
  );
};

export default DashboardHome;
