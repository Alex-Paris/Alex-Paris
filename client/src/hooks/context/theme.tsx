import React, { createContext, useCallback, useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import light from '../../styles/themes/light';
import dark from '../../styles/themes/dark';
import demo from '../../styles/themes/demo';

interface ThemesProps {
  themes: 'light' | 'dark' | 'demo';
}

interface ThemeContextData {
  actualTheme(isTitle: string): boolean;
  toggleTheme(definedTheme?: ThemesProps['themes']): void;
  demoTheme(isActive: boolean): void;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const ThemeToggleProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(light);
  const [lastTheme, setLastTheme] = useState(light);

  const toggleTheme = useCallback(
    (definedTheme) => {
      if (!definedTheme) {
        setTheme(theme.title === 'light' ? dark : light);
        return;
      }

      if (definedTheme === 'light') {
        setTheme(light);
      }
      if (definedTheme === 'dark') {
        setTheme(dark);
      }
      if (definedTheme === 'demo') {
        setTheme(demo);
      }
    },
    [theme]
  );

  const demoTheme = useCallback(
    (isActive) => {
      console.log('active?' + theme.title);
      if (
        (theme.title === 'demo' && isActive) ||
        (theme.title !== 'demo' && !isActive)
      ) {
        return;
      }

      if (isActive) {
        setLastTheme(theme);
        setTheme(demo);
        return;
      }

      setTheme(lastTheme);
    },
    [theme, lastTheme]
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
    <ThemeContext.Provider value={{ actualTheme, toggleTheme, demoTheme }}>
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
