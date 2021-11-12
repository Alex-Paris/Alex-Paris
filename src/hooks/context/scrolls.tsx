import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect,
} from 'react';

interface ScrollContextData {
  scrolled(moreThan: number): boolean;
}

const ScrollContext = createContext<ScrollContextData>({} as ScrollContextData);

export const ScrollProvider: React.FC = ({ children }) => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = useCallback(() => {
    setScroll(scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const scrolled = useCallback(
    (moreThan: number) => {
      if (scroll > moreThan) {
        return true;
      }
      return false;
    },
    [scroll]
  );

  return (
    <ScrollContext.Provider value={{ scrolled }}>
      {children}
    </ScrollContext.Provider>
  );
};

export function useScroll(): ScrollContextData {
  const context = useContext(ScrollContext);

  if (!context) {
    throw new Error('useScroll must be used within a ScrollProvider');
  }

  return context;
}
