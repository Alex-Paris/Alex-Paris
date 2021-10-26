import React from 'react';
import {
  UilEstate,
  // @ts-expect-error: React-Unicons doesnt have @types yet
} from '@iconscout/react-unicons';

import { Content } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Content>
        <h1>top</h1>
      </Content>
    </>
  );
};

export default Dashboard;
