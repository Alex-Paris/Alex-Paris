import React, { createContext, useCallback, useContext, useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import light from '../../styles/themes/light';
import dark from '../../styles/themes/dark';
import demo from '../../styles/themes/demo';

interface ThemeContextData {
  actualTheme(isTitle: string): boolean;
  toggleTheme(definedTheme?: DefaultTheme): void;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const ThemeToggleProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(demo);

  const toggleTheme = useCallback(
    (definedTheme) => {
      setTheme(theme.title === 'light' ? dark : light);

      if (definedTheme) {
        setTheme(definedTheme);
      }
    },
    [theme]
  );

  const actualTheme = useCallback(
    (isTitle: string) => {
      if (theme.title === isTitle) {
        return true;
      }
      return false;
    },
    [theme]
  );

  return (
    <ThemeContext.Provider value={{ actualTheme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeToggleProvider');
  }

  return context;
}
