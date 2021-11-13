import React from 'react';
import { Link as HashLink } from 'react-scroll';

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
              <HashLink
                activeClass="active"
                to="services"
                spy
                smooth
                offset={-70}
                duration={300}
              >
                Services
              </HashLink>
            </li>

            <li>
              <HashLink
                activeClass="active"
                to="portfolio"
                spy
                smooth
                offset={-70}
                duration={300}
              >
                Portfolio
              </HashLink>
            </li>

            <li>
              <HashLink
                activeClass="active"
                to="contactme"
                spy
                smooth
                offset={-70}
                duration={300}
              >
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
          </FooterSocials>
        </FooterContainer>

        <p>&#169; Alex Paris. All right reserved</p>
      </div>
    </Footer>
  );
};

export default DashboardFooter;
