import { useEffect, useState, createContext } from 'react';

export enum Theme {
  Light = 'light',
  Dark = 'dark'
}

const DEFAULT_THEME = Theme.Light;

type ThemeContextType = {
  theme: string;
  toggleTheme: (code: string) => void;
};

export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType
);

export function ThemeProvider({ children }: { children: React.ReactElement }) {
  const [theme, setTheme] = useState(
    localStorage.getItem('app-theme') || DEFAULT_THEME
  );

  const toggleTheme = (code: string) => setTheme(code);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('app-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
