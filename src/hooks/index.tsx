import React from 'react';

import { ScrollProvider } from './context/scrolls';
import { ThemeToggleProvider } from './context/theme';

const AppProvider: React.FC = ({ children }) => (
  <ScrollProvider>
    <ThemeToggleProvider>{children}</ThemeToggleProvider>
  </ScrollProvider>
);

export default AppProvider;
