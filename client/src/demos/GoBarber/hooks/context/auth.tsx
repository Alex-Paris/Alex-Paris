import React, { createContext, useContext, useCallback, useState } from 'react';
import { useStorage } from './storage';

interface User {
  id: string;
  name: string;
  email: string;
  avatar_url: string;
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  userMobile: User;
  signIn(credentials: SignInCredentials): void;
  signOut(): void;
  updateAuth(user: User): void;
  signInMobile(credentials: SignInCredentials): void;
  signOutMobile(): void;
  updateAuthMobile(user: User): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const { authUser, authUserMobile } = useStorage();

  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('Portfolio@GoBarber:token');
    const user = localStorage.getItem('Portfolio@GoBarber:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const [dataMobile, setDataMobile] = useState<AuthState>(() => {
    const token = localStorage.getItem('Portfolio@GoBarber:tokenMobile');
    const user = localStorage.getItem('Portfolio@GoBarber:userMobile');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(
    ({ email, password }) => {
      const response = authUser({ email, password });

      const { token, user } = response;

      localStorage.setItem('Portfolio@GoBarber:token', token);
      localStorage.setItem('Portfolio@GoBarber:user', JSON.stringify(user));

      setData({ token, user });
    },
    [authUser]
  );

  const signInMobile = useCallback(
    ({ email, password }) => {
      const response = authUserMobile({ email, password });

      const { token, user } = response;

      localStorage.setItem('Portfolio@GoBarber:tokenMobile', token);
      localStorage.setItem(
        'Portfolio@GoBarber:userMobile',
        JSON.stringify(user)
      );

      setDataMobile({ token, user });
    },
    [authUserMobile]
  );

  const signOut = useCallback(() => {
    localStorage.removeItem('Portfolio@GoBarber:token');
    localStorage.removeItem('Portfolio@GoBarber:user');

    setData({} as AuthState);
  }, []);

  const signOutMobile = useCallback(() => {
    localStorage.removeItem('Portfolio@GoBarber:tokenMobile');
    localStorage.removeItem('Portfolio@GoBarber:userMobile');

    setDataMobile({} as AuthState);
  }, []);

  const updateAuth = useCallback(
    (user: User) => {
      localStorage.setItem('Portfolio@GoBarber:user', JSON.stringify(user));

      setData({
        token: data.token,
        user,
      });
    },
    [setData, data.token]
  );

  const updateAuthMobile = useCallback(
    (user: User) => {
      localStorage.setItem(
        'Portfolio@GoBarber:userMobile',
        JSON.stringify(user)
      );

      setDataMobile({
        token: dataMobile.token,
        user,
      });
    },
    [setDataMobile, dataMobile.token]
  );

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        userMobile: dataMobile.user,
        signIn,
        signOut,
        updateAuth,
        signInMobile,
        signOutMobile,
        updateAuthMobile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
