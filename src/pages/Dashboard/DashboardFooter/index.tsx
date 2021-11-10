import React from 'react';
import { HashLink } from 'react-router-hash-link';

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
              <HashLink smooth to="#services">
                Services
              </HashLink>
            </li>

            <li>
              <HashLink smooth to="#portfolio">
                Portfolio
              </HashLink>
            </li>

            <li>
              <HashLink smooth to="#contact">
                Contactme
              </HashLink>
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
