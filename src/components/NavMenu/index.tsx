import React, { useState, useCallback } from 'react';
import { useTransition, config } from 'react-spring';
import { HashLink } from 'react-router-hash-link';

import Icon from '../Unicons';

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
                      <Icon icon="UilEstate" /> Home
                    </HashLink>
                  </NavItem>
                  <NavItem>
                    <HashLink smooth to="/#about" onClick={handleShowNav}>
                      <Icon icon="UilUser" /> About
                    </HashLink>
                  </NavItem>
                  <NavItem>
                    <HashLink smooth to="/#skills" onClick={handleShowNav}>
                      <Icon icon="UilFileAlt" /> Skills
                    </HashLink>
                  </NavItem>
                  <NavItem>
                    <HashLink smooth to="/#services" onClick={handleShowNav}>
                      <Icon icon="UilBriefcaseAlt" /> Services
                    </HashLink>
                  </NavItem>
                  <NavItem>
                    <HashLink smooth to="/#portfolio" onClick={handleShowNav}>
                      <Icon icon="UilScenery" /> Portfolio
                    </HashLink>
                  </NavItem>
                  <NavItem>
                    <HashLink smooth to="/#contactme" onClick={handleShowNav}>
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
