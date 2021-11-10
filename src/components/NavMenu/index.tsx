import React, { useState, useEffect, useCallback } from 'react';
import { useTransition, config } from 'react-spring';
import { Link as HashLink } from 'react-scroll';

import Icon from '../Unicons';

import { Header, Nav, NavList, NavToggle, NavItem } from './styles';

const NavMenu: React.FC = () => {
  const [show, setShow] = useState(false);
  const [bordered, setBordered] = useState(false);

  const navExibitionMobile = useTransition(show, {
    from: { opacity: 0, y: '150%' },
    enter: { opacity: 1, y: '0' },
    leave: { opacity: 0, y: '120%' },
    reverse: show,
    config: config.stiff,
  });

  const handleScroll = useCallback(() => {
    if (scrollY > 90) {
      setBordered(true);
      return;
    }
    setBordered(false);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const handleShowNav = useCallback(() => {
    setShow((state) => !state);
  }, []);

  return (
    <Header isBordered={bordered}>
      <Nav>
        <HashLink
          activeClass="active"
          to="home"
          spy
          smooth
          offset={-70}
          duration={500}
        >
          Alex
        </HashLink>

        {navExibitionMobile(
          (styles, item) =>
            item && (
              <NavList style={styles}>
                <ul>
                  <NavItem>
                    <HashLink
                      activeClass="active"
                      to="home"
                      spy
                      smooth
                      offset={-70}
                      duration={500}
                      onClick={handleShowNav}
                    >
                      <Icon icon="UilEstate" /> Home
                    </HashLink>
                  </NavItem>
                  <NavItem>
                    <HashLink
                      activeClass="active"
                      to="about"
                      spy
                      smooth
                      offset={-70}
                      duration={500}
                      onClick={handleShowNav}
                    >
                      <Icon icon="UilUser" /> About
                    </HashLink>
                  </NavItem>
                  <NavItem>
                    <HashLink
                      activeClass="active"
                      to="skills"
                      spy
                      smooth
                      offset={-70}
                      duration={500}
                      onClick={handleShowNav}
                    >
                      <Icon icon="UilFileAlt" /> Skills
                    </HashLink>
                  </NavItem>
                  <NavItem>
                    <HashLink
                      activeClass="active"
                      to="services"
                      spy
                      smooth
                      offset={-70}
                      duration={500}
                      onClick={handleShowNav}
                    >
                      <Icon icon="UilBriefcaseAlt" /> Services
                    </HashLink>
                  </NavItem>
                  <NavItem>
                    <HashLink
                      activeClass="active"
                      to="portfolio"
                      spy
                      smooth
                      offset={-70}
                      duration={500}
                      onClick={handleShowNav}
                    >
                      <Icon icon="UilScenery" /> Portfolio
                    </HashLink>
                  </NavItem>
                  <NavItem>
                    <HashLink
                      activeClass="active"
                      to="contactme"
                      spy
                      smooth
                      offset={-70}
                      duration={500}
                      onClick={handleShowNav}
                    >
                      <Icon icon="UilMessage" /> Contactme
                    </HashLink>
                  </NavItem>
                </ul>
                <Icon icon="UilTimes" onClick={handleShowNav} />
              </NavList>
            )
        )}

        <div>
          <NavToggle onClick={handleShowNav}>
            <Icon icon="UilApps" />
          </NavToggle>
        </div>
      </Nav>
    </Header>
  );
};

export default NavMenu;
