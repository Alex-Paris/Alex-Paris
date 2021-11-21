import React from 'react';

import { StorageProvider } from './context/storage';
import { AuthProvider } from './context/auth';
import { ToastProvider } from './context/toast';

const AppProvider: React.FC = ({ children }) => (
  <StorageProvider>
    <AuthProvider>
      <ToastProvider>{children}</ToastProvider>
    </AuthProvider>
  </StorageProvider>
);

export default AppProvider;
