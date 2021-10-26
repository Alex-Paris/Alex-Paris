import React, { useState, useCallback } from 'react';
import { useTransition } from 'react-spring';
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
    from: { opacity: 0, y: '100%' },
    enter: { opacity: 1, y: '0' },
    leave: { opacity: 0, y: '100%' },
    delay: 200,
  });

  const handleShowNav = useCallback(() => {
    setShow(!show);
  }, [show]);

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
                    <a href="#">
                      <UilEstate /> Home
                    </a>
                  </NavItem>
                  <NavItem>
                    <a href="#">
                      <UilUser /> About
                    </a>
                  </NavItem>
                  <NavItem>
                    <a href="#">
                      <UilFileAlt /> Skills
                    </a>
                  </NavItem>
                  <NavItem>
                    <a href="#">
                      <UilBriefcaseAlt /> Services
                    </a>
                  </NavItem>
                  <NavItem>
                    <a href="#">
                      <UilScenery /> Portfolio
                    </a>
                  </NavItem>
                  <NavItem>
                    <a href="#">
                      <UilMessage /> Contactme
                    </a>
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
