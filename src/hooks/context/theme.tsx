import React, { createContext, useCallback, useContext, useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import light from '../../styles/themes/light';
import dark from '../../styles/themes/dark';

interface ThemeContextData {
  actualTheme(): string;
  toggleTheme(definedTheme?: DefaultTheme): void;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const ThemeToggleProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(light);

  const toggleTheme = useCallback(
    (definedTheme) => {
      setTheme(theme.title === 'light' ? dark : light);
      console.log('theme:' + theme.title);

      if (definedTheme) {
        console.log('definedTheme:' + definedTheme.title);
        setTheme(definedTheme);
      }
    },
    [theme]
  );

  const actualTheme = useCallback(() => {
    return theme.title;
  }, [theme]);

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
