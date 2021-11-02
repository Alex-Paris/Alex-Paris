import React, { useState, useCallback } from 'react';
import { useTransition, config } from 'react-spring';
import { Link } from 'react-router-dom';
import {
  UilEstate,
  UilUser,
  UilFileAlt,
  UilBriefcaseAlt,
  UilScenery,
  UilMessage,
  UilTimes,
  UilApps,
  // @ts-expect-error: React-Unicons doesnt have @types yet
} from '@iconscout/react-unicons';

import { Header, Nav, NavList, NavToggle, NavItem } from './styles';

const NavMenu: React.FC = () => {
  const [show, setShow] = useState(false);

  const navExibitionMobile = useTransition(show, {
    from: { opacity: 0, y: '150%' },
    enter: { opacity: 1, y: '0' },
    leave: { opacity: 0, y: '120%' },
    reverse: show,
    config: config.stiff,
  });

  const handleShowNav = useCallback(() => {
    setShow((state) => !state);
  }, []);

  return (
    <Header>
      <Nav>
        <a>Alex</a>

        {navExibitionMobile(
          (styles, item) =>
            item && (
              <NavList style={styles}>
                <ul>
                  <NavItem>
                    <a href="#home" onClick={handleShowNav}>
                      <UilEstate /> Home
                    </a>
                  </NavItem>
                  <NavItem>
                    <Link to="#about" onClick={handleShowNav}>
                      <UilUser /> About
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link to="skills" onClick={handleShowNav}>
                      <UilFileAlt /> Skills
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link to="#services" onClick={handleShowNav}>
                      <UilBriefcaseAlt /> Services
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link to="#portfolio" onClick={handleShowNav}>
                      <UilScenery /> Portfolio
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link to="#contactme" onClick={handleShowNav}>
                      <UilMessage /> Contactme
                    </Link>
                  </NavItem>
                </ul>
                <UilTimes onClick={handleShowNav} />
              </NavList>
            )
        )}

        <div>
          <NavToggle onClick={handleShowNav}>
            <UilApps />
          </NavToggle>
        </div>
      </Nav>
    </Header>
  );
};

export default NavMenu;
