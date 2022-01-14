import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import 'react-day-picker/lib/style.css';
import { FiCalendar, FiClock } from 'react-icons/fi';

import { useAuth } from '../../hooks/context/auth';
import { useMobileRoute } from '../../../../hooks/context/mobileRoute';

import {
  Container,
  Header,
  HeaderContent,
  Profile,
  ProvidersContainer,
  ProvidersList,
  ProvidersMeta,
} from './styles';
import { useStorage } from '../../hooks/context/storage';

const Dashboard: React.FC = () => {
  const { signOutMobile, userMobile } = useAuth();
  const { togglePage } = useMobileRoute();
  const { users } = useStorage();

  const handleSignOut = useCallback(() => {
    signOutMobile();
    togglePage('SignIn');
  }, [signOutMobile, togglePage]);

  return (
    <Container>
      <Header>
        <HeaderContent>
          <Profile>
            <div>
              <span>Welcome,</span>
              <strong>{userMobile.name}</strong>
            </div>
          </Profile>
          <button type="button" onClick={handleSignOut}>
            Logout
          </button>

          <Link to="/demos/GoBarber/profile">
            <img
              src={
                userMobile.avatar_url
                  ? userMobile.avatar_url
                  : 'http://cdn.onlinewebfonts.com/svg/img_261106.png'
              }
              alt={userMobile.name}
            />
          </Link>
        </HeaderContent>
      </Header>
      <ProvidersList>
        <p>Barbers</p>

        {users.map((barber) => (
          <ProvidersContainer key={barber.id}>
            <img
              src={
                barber.avatar_url
                  ? barber.avatar_url
                  : 'http://cdn.onlinewebfonts.com/svg/img_261106.png'
              }
              alt={barber.name}
            />

            <div>
              <strong>{barber.name}</strong>
              <ProvidersMeta>
                <FiCalendar size={14} color="ff9000" />
                <p>Monday to Friday</p>
              </ProvidersMeta>

              <ProvidersMeta>
                <FiClock size={14} color="ff9000" />
                <p>8am to 6pm</p>
              </ProvidersMeta>
            </div>
          </ProvidersContainer>
        ))}
      </ProvidersList>
    </Container>
  );
};

export default Dashboard;
