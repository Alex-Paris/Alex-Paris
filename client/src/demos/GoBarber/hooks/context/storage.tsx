import React, {
  createContext,
  useContext,
  useCallback,
  useState,
  useEffect,
} from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  avatar_url: string;
}

interface Appointment {
  id: string;
  date: string;
  hourFormatted: string;
  user: {
    name: string;
    avatar_url: string;
  };
}

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

interface AuthCredentials {
  email: string;
  password: string;
}

interface AuthReturn {
  user: User;
  token: string;
}

interface ProfileFormData {
  name: string;
  email: string;
  old_password?: string;
  password?: string;
  password_confirmation?: string;
}

interface StorageContextData {
  authUser(credentials: AuthCredentials): AuthReturn;
  forgotUser(email: string): User;
  updateUserAvatar(userId: string, avatar: string): User;
  addUser(user: SignUpFormData): void;
  updateUser(profile: ProfileFormData): User;
  addAppointment(appointment: Appointment): void;
  updateAppointment(appointment: Appointment): void;
}

const StorageContext = createContext<StorageContextData>(
  {} as StorageContextData
);

export const StorageProvider: React.FC = ({ children }) => {
  const [users, setUsers] = useState<User[]>(() => {
    const storagedUsers = localStorage.getItem('Portfolio@GoBarber:users');

    if (storagedUsers) {
      return JSON.parse(storagedUsers);
    }

    return [];
  });

  const [appointments, setAppointments] = useState<Appointment[]>(() => {
    const storagedAppointments = localStorage.getItem(
      'Portfolio@GoBarber:appointments'
    );

    if (storagedAppointments) {
      return JSON.parse(storagedAppointments);
    }

    return [];
  });

  const addUser = useCallback(
    ({ ...rest }) => {
      const user: User = {
        id: users.length + 1,
        ...rest,
      };

      const duplicatedUser = users.find((p) => p.email === user.email);

      if (duplicatedUser) {
        throw new Error();
      }

      setUsers([...users, user]);
    },
    [users]
  );

  const addAppointment = useCallback(
    (appointment: Appointment) => {
      setAppointments([...appointments, appointment]);
    },
    [appointments]
  );

  const updateUser = useCallback(
    ({ name, email, old_password, password }) => {
      const userIndex = users.findIndex(
        (p) => p.email == email && p.password == old_password
      );

      if (userIndex < 0) {
        throw new Error();
      }

      users[userIndex] = {
        ...users[userIndex],
        name,
        email,
        ...(old_password && {
          password,
        }),
      };

      setUsers([...users]);

      return users[userIndex];
    },
    [users]
  );

  const updateAppointment = useCallback(
    (appointment: Appointment) => {
      const appointmentIndex = appointments.findIndex(
        (p) => p.id === appointment.id
      );

      if (!appointmentIndex) {
        return;
      }

      appointments[appointmentIndex] = appointment;
      setAppointments([...appointments]);
    },
    [appointments]
  );

  useEffect(() => {
    localStorage.setItem('Portfolio@GoBarber:users', JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    localStorage.setItem(
      'Portfolio@GoBarber:appointments',
      JSON.stringify(appointments)
    );
  }, [appointments]);

  const authUser = useCallback(
    ({ email, password }) => {
      const findUser = users.find(
        (p) => p.email == email && p.password == password
      );

      if (!findUser) {
        throw new Error();
      }

      const loggedUser = {
        user: findUser,
        token: findUser.email + '@' + findUser.password,
      };

      return loggedUser;
    },
    [users]
  );

  const forgotUser = useCallback(
    (email: string) => {
      const findUser = users.find((p) => p.email == email);

      if (!findUser) {
        throw new Error();
      }

      return findUser;
    },
    [users]
  );

  const updateUserAvatar = useCallback(
    (userId: string, avatar: string) => {
      const userIndex = users.findIndex((p) => p.id === userId);

      if (userIndex < 0) {
        throw new Error();
      }

      users[userIndex] = {
        ...users[userIndex],
        avatar_url: avatar,
      };

      setUsers([...users]);

      return users[userIndex];
    },
    [users]
  );

  return (
    <StorageContext.Provider
      value={{
        authUser,
        forgotUser,
        updateUserAvatar,
        addUser,
        updateUser,
        addAppointment,
        updateAppointment,
      }}
    >
      {children}
    </StorageContext.Provider>
  );
};

export function useStorage(): StorageContextData {
  const context = useContext(StorageContext);

  if (!context) {
    throw new Error('useStorage must be used within an StorageProvider');
  }

  return context;
}
