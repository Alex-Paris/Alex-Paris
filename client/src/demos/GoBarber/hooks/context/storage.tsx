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
  users: User[];
  usersMobile: User[];
  appointments: Appointment[];
  authUser(credentials: AuthCredentials): AuthReturn;
  forgotUser(email: string): User;
  resetUser(id: number, password: string): void;
  updateUserAvatar(userId: string, avatar: string): User;
  authUserMobile(credentials: AuthCredentials): AuthReturn;
  forgotUserMobile(email: string): User;
  resetUserMobile(id: number, password: string): void;
  updateUserMobileAvatar(userId: string, avatar: string): User;
  addUser(user: SignUpFormData): void;
  updateUser(profile: ProfileFormData): User;
  addUserMobile(user: SignUpFormData): void;
  updateUserMobile(profile: ProfileFormData): User;
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

  const [usersMobile, setUsersMobile] = useState<User[]>(() => {
    const storagedUsersMobile = localStorage.getItem(
      'Portfolio@GoBarber:usersMobile'
    );

    if (storagedUsersMobile) {
      return JSON.parse(storagedUsersMobile);
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

  const addUserMobile = useCallback(
    ({ ...rest }) => {
      const userMobile: User = {
        id: usersMobile.length + 1,
        ...rest,
      };

      const duplicatedUser = usersMobile.find(
        (p) => p.email === userMobile.email
      );

      if (duplicatedUser) {
        throw new Error();
      }

      setUsersMobile([...usersMobile, userMobile]);
    },
    [usersMobile]
  );

  const addAppointment = useCallback(
    (appointment: Appointment) => {
      setAppointments([...appointments, appointment]);
    },
    [appointments]
  );

  const updateUser = useCallback(
    ({ id, name, email, old_password, password }) => {
      const userIndex = users.findIndex((p) =>
        old_password ? p.id == id && p.password == old_password : p.id == id
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

  const updateUserMobile = useCallback(
    ({ id, name, email, old_password, password }) => {
      const userMobileIndex = usersMobile.findIndex((p) =>
        old_password ? p.id == id && p.password == old_password : p.id == id
      );

      if (userMobileIndex < 0) {
        throw new Error();
      }

      usersMobile[userMobileIndex] = {
        ...usersMobile[userMobileIndex],
        name,
        email,
        ...(old_password && {
          password,
        }),
      };

      setUsersMobile([...usersMobile]);

      return usersMobile[userMobileIndex];
    },
    [usersMobile]
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
      'Portfolio@GoBarber:usersMobile',
      JSON.stringify(usersMobile)
    );
  }, [usersMobile]);

  useEffect(() => {
    localStorage.setItem(
      'Portfolio@GoBarber:appointments',
      JSON.stringify(appointments)
    );
  }, [appointments]);

  //User - Barber
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

  const resetUser = useCallback(
    (id: number, password: string) => {
      const index = id - 1;

      if (!users[index]) {
        throw new Error();
      }

      users[index] = {
        ...users[index],
        password,
      };

      setUsers([...users]);
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

  //User - ClientMobile
  const authUserMobile = useCallback(
    ({ email, password }) => {
      const findUserMobile = usersMobile.find(
        (p) => p.email == email && p.password == password
      );

      if (!findUserMobile) {
        throw new Error();
      }

      const loggedUser = {
        user: findUserMobile,
        token: findUserMobile.email + '@' + findUserMobile.password,
      };

      return loggedUser;
    },
    [usersMobile]
  );

  const forgotUserMobile = useCallback(
    (email: string) => {
      const findUserMobile = usersMobile.find((p) => p.email == email);

      if (!findUserMobile) {
        throw new Error();
      }

      return findUserMobile;
    },
    [usersMobile]
  );

  const resetUserMobile = useCallback(
    (id: number, password: string) => {
      const index = id - 1;

      if (!usersMobile[index]) {
        throw new Error();
      }

      usersMobile[index] = {
        ...usersMobile[index],
        password,
      };

      setUsersMobile([...usersMobile]);
    },
    [usersMobile]
  );

  const updateUserMobileAvatar = useCallback(
    (userId: string, avatar: string) => {
      const userMobileIndex = usersMobile.findIndex((p) => p.id === userId);

      if (userMobileIndex < 0) {
        throw new Error();
      }

      usersMobile[userMobileIndex] = {
        ...usersMobile[userMobileIndex],
        avatar_url: avatar,
      };

      setUsersMobile([...usersMobile]);

      return usersMobile[userMobileIndex];
    },
    [usersMobile]
  );

  return (
    <StorageContext.Provider
      value={{
        users,
        usersMobile,
        appointments,
        authUser,
        forgotUser,
        resetUser,
        updateUserAvatar,
        authUserMobile,
        forgotUserMobile,
        resetUserMobile,
        updateUserMobileAvatar,
        addUser,
        updateUser,
        addUserMobile,
        updateUserMobile,
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
