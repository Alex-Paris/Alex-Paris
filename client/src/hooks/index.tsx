import React from 'react';

import { ResizeProvider } from './context/resize';
import { ScrollProvider } from './context/scrolls';
import { ThemeToggleProvider } from './context/theme';

const AppProvider: React.FC = ({ children }) => (
  <ResizeProvider>
    <ScrollProvider>
      <ThemeToggleProvider>{children}</ThemeToggleProvider>
    </ScrollProvider>
  </ResizeProvider>
);

export default AppProvider;
