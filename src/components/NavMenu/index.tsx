import React, { useState, useEffect, useCallback } from 'react';
import { useTransition, config } from 'react-spring';
import { Link as HashLink } from 'react-scroll';

import { useScroll } from '../../hooks/context/scrolls';
import { useResize } from '../../hooks/context/resize';
import { useTheme } from '../../hooks/context/theme';
import { size } from '../../styles/device';

import Icon from '../Unicons';

import { Header, Nav, NavList, NavToggle, NavItem, NavBtns } from './styles';

const NavMenu: React.FC = () => {
  const [show, setShow] = useState(false);
  const [alwaysShowing, setAlwaysShowing] = useState(false);
  const [scrollActivated, setScrollActivated] = useState(false);
  const { scrolled } = useScroll();
  const { windowWidth } = useResize();
  const { actualTheme, toggleTheme } = useTheme();

  const navExibitionMobile = useTransition(show, {
    from: { opacity: 0, y: '150%' },
    enter: { opacity: 1, y: '0' },
    leave: { opacity: 0, y: '120%' },
    reverse: show,
    config: config.stiff,
  });

  const handleShowNav = useCallback(() => {
    if (alwaysShowing) {
      setShow(true);
      return;
    }

    setShow((state) => !state);
  }, [alwaysShowing]);

  useEffect(() => {
    if (scrolled(90)) {
      setScrollActivated(true);
      return;
    }
    setScrollActivated(false);
  }, [scrolled]);

  useEffect(() => {
    if (windowWidth > size.laptop) {
      setShow(true);
      setAlwaysShowing(true);
      return;
    }

    if (alwaysShowing) {
      setShow(false);
      setAlwaysShowing(false);
    }
  }, [windowWidth, alwaysShowing]);

  return (
    <Header isBordered={scrollActivated}>
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

        <NavBtns>
          <Icon
            icon={actualTheme('light') ? 'UilMoon' : 'UilSun'}
            onClick={() => toggleTheme()}
          />

          <NavToggle onClick={handleShowNav}>
            <Icon icon="UilApps" />
          </NavToggle>
        </NavBtns>
      </Nav>
    </Header>
  );
};

export default NavMenu;
