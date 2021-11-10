import React, { useState, useCallback } from 'react';
import { useTransition, config } from 'react-spring';
import { HashLink } from 'react-router-hash-link';
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
                    <HashLink smooth to="/#home" onClick={handleShowNav}>
                      <UilEstate /> Home
                    </HashLink>
                  </NavItem>
                  <NavItem>
                    <HashLink smooth to="/#about" onClick={handleShowNav}>
                      <UilUser /> About
                    </HashLink>
                  </NavItem>
                  <NavItem>
                    <HashLink smooth to="/#skills" onClick={handleShowNav}>
                      <UilFileAlt /> Skills
                    </HashLink>
                  </NavItem>
                  <NavItem>
                    <HashLink smooth to="/#services" onClick={handleShowNav}>
                      <UilBriefcaseAlt /> Services
                    </HashLink>
                  </NavItem>
                  <NavItem>
                    <HashLink smooth to="/#portfolio" onClick={handleShowNav}>
                      <UilScenery /> Portfolio
                    </HashLink>
                  </NavItem>
                  <NavItem>
                    <HashLink smooth to="/#contactme" onClick={handleShowNav}>
                      <UilMessage /> Contactme
                    </HashLink>
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
