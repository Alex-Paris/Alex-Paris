import React from 'react';

import Icon from '../../../components/Unicons';

import { Footer, FooterContainer, FooterLinks, FooterSocials } from './styles';

const DashboardFooter: React.FC = () => {
  return (
    <Footer>
      <div>
        <FooterContainer>
          <div>
            <h1>Alex</h1>
            <span>Fullstack developer</span>
          </div>

          <FooterLinks>
            <li>
              <a href="#services">Services</a>
            </li>

            <li>
              <a href="#portfolio">Portfolio</a>
            </li>

            <li>
              <a href="#contact">Contactme</a>
            </li>
          </FooterLinks>

          <FooterSocials>
            <a
              href="https://www.facebook.com/AlexParis28/"
              target="_blank"
              rel="noreferrer"
            >
              <Icon icon="UilFacebookF" />
            </a>

            <a
              href="https://www.instagram.com/lexparis_/"
              target="_blank"
              rel="noreferrer"
            >
              <Icon icon="UilInstagram" />
            </a>

            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <Icon icon="UilTwitterAlt" />
            </a>
          </FooterSocials>
        </FooterContainer>

        <p>&#169; GhostCode. All right reserved</p>
      </div>
    </Footer>
  );
};

export default DashboardFooter;
