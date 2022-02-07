import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect,
} from 'react';

interface UnityPlayerContextData {
  startPlayer(): void;
}

const UnityPlayerContext = createContext<UnityPlayerContextData>(
  {} as UnityPlayerContextData
);

export const UnityPlayerProvider: React.FC = ({ children }) => {
  // Defined to be used in hook
  const startPlayer = useCallback(() => {
    console.log('a');
  }, []);

  return (
    <UnityPlayerContext.Provider value={{ startPlayer }}>
      {children}
    </UnityPlayerContext.Provider>
  );
};

export function useUnityPlayer(): UnityPlayerContextData {
  const context = useContext(UnityPlayerContext);

  if (!context) {
    throw new Error('useUnityPlayer must be used within a UnityPlayerProvider');
  }

  return context;
}
