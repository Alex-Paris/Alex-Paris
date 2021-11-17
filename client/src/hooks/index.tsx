import React from 'react';

import { ResizeProvider } from './context/resize';
import { ScrollProvider } from './context/scrolls';
import { ThemeToggleProvider } from './context/theme';
import StyledToastContainer from './context/toastify';

const AppProvider: React.FC = ({ children }) => (
  <ResizeProvider>
    <ScrollProvider>
      <ThemeToggleProvider>{children}</ThemeToggleProvider>

      <StyledToastContainer />
    </ScrollProvider>
  </ResizeProvider>
);

export default AppProvider;
