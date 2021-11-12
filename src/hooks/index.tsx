import React from 'react';

import { ScrollProvider } from './context/scrolls';

const AppProvider: React.FC = ({ children }) => (
  <ScrollProvider>{children}</ScrollProvider>
);

export default AppProvider;
