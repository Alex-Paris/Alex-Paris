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
  signIn(credentials: SignInCredentials): void;
  signOut(): void;
  updateAuth(user: User): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const { authUser } = useStorage();

  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('Portfolio@GoBarber:token');
    const user = localStorage.getItem('Portfolio@GoBarber:user');

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

  const signOut = useCallback(() => {
    localStorage.removeItem('Portfolio@GoBarber:token');
    localStorage.removeItem('Portfolio@GoBarber:user');

    setData({} as AuthState);
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

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, updateAuth }}
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
