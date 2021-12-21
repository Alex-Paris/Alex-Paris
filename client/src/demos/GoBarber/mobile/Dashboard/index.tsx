import React from 'react';
import { Link } from 'react-router-dom';
import 'react-day-picker/lib/style.css';

import { Container, Header, HeaderContent, Profile } from './styles';

import { useAuth } from '../../hooks/context/auth';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();

  let tmpUser = user;

  if (!tmpUser) {
    tmpUser = {
      id: '0',
      name: 'John Doe',
      email: 'johndoe@email.com',
      avatar_url: '',
    };
  }

  return (
    <Container>
      <Header>
        <HeaderContent>
          <Profile>
            <div>
              <span>Welcome,</span>
              <strong>{tmpUser.name}</strong>
            </div>
          </Profile>
          <button type="button" onClick={signOut}>
            Sair
          </button>

          <Link to="/demos/GoBarber/profile">
            <img
              src={
                tmpUser.avatar_url
                  ? tmpUser.avatar_url
                  : 'http://cdn.onlinewebfonts.com/svg/img_261106.png'
              }
              alt={tmpUser.name}
            />
          </Link>
        </HeaderContent>
      </Header>
      <div>Barbers</div>
    </Container>
  );
};

export default Dashboard;
