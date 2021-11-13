import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect,
} from 'react';

interface ScrollContextData {
  scrolledX: number;
  scrolledY: number;
}

const ScrollContext = createContext<ScrollContextData>({} as ScrollContextData);

export const ScrollProvider: React.FC = ({ children }) => {
  const [windowScroll, setWindowScroll] = useState<ScrollContextData>({
    scrolledX: scrollX,
    scrolledY: scrollY,
  });

  const handleScroll = useCallback(() => {
    setWindowScroll({
      scrolledX: scrollX,
      scrolledY: scrollY,
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <ScrollContext.Provider
      value={{
        scrolledX: windowScroll.scrolledX,
        scrolledY: windowScroll.scrolledY,
      }}
    >
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
