import React from 'react';
import {
  UilLinkedinAlt,
  UilDribbble,
  UilGithubAlt,
  UilMessage,
  UilMouseAlt,
  UilArrowDown,
  UilExternalLinkAlt,
  // @ts-expect-error: React-Unicons doesnt have @types yet
} from '@iconscout/react-unicons';

import { PerfilIcon } from '../../../assets/perfil';
import Button from '../../../components/Button';

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
              <UilLinkedinAlt />
              <UilExternalLinkAlt size="1.1rem" />
            </a>

            <a
              href="https://github.com/Alex-Paris"
              target="_blank"
              rel="noreferrer"
            >
              <UilDribbble />
              <UilExternalLinkAlt size="1.1rem" />
            </a>

            <a
              href="https://github.com/Alex-Paris"
              target="_blank"
              rel="noreferrer"
            >
              <UilGithubAlt />
              <UilExternalLinkAlt size="1.1rem" />
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
              Contact Me <UilMessage size="1.25rem" />
            </Button>
          </HomeData>
        </HomeContent>

        <HomeScroll>
          <Button isFlex isSimple>
            <UilMouseAlt size="2rem" />
            <span>Scroll down</span>
            <UilArrowDown size="1.25rem" />
          </Button>
        </HomeScroll>
      </HomeContainer>
    </Home>
  );
};

export default DashboardHome;
