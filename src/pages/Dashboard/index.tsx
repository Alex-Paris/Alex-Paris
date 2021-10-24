import React from 'react';
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

import { Header, Nav, NavMenu, NavToggle, NavItem } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header>
        <Nav>
          <a>Alex</a>

          <NavMenu>
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
            <UilTimes />
          </NavMenu>

          <div>
            <NavToggle>
              <UilApps />
            </NavToggle>
          </div>
        </Nav>
      </Header>
    </>
  );
};

export default Dashboard;
