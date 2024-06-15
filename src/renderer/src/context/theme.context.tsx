import { PropsWithChildren, createContext, useState } from 'react';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

interface ThemeContext {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const initialState: ThemeContext = {
  theme: Theme.LIGHT,
  setTheme: () => {},
};

export const ThemeContext = createContext(initialState);

const THEME_STORAGE_KEY = 'THEME';

export const ThemeProvider = ({ children }: PropsWithChildren): JSX.Element => {
  const initTheme = (): Theme => {
    const htmlElement = document.querySelector('html') as HTMLElement;
    const storedTheme =
      (localStorage.getItem(THEME_STORAGE_KEY) as Theme) || Theme.LIGHT;
    if (storedTheme === Theme.LIGHT) {
      htmlElement.dataset.theme = Theme.LIGHT;
    } else {
      htmlElement.dataset.theme = Theme.DARK;
    }
    return storedTheme;
  };

  const [themeState, setThemeState] = useState<Theme>(initTheme());

  const setTheme = (theme: Theme): void => {
    const htmlElement = document.querySelector('html') as HTMLElement;
    if (theme === Theme.LIGHT) {
      htmlElement.dataset.theme = Theme.LIGHT;
      localStorage.setItem(THEME_STORAGE_KEY, Theme.LIGHT);
      setThemeState(Theme.LIGHT);
    } else {
      htmlElement.dataset.theme = Theme.DARK;
      localStorage.setItem(THEME_STORAGE_KEY, Theme.DARK);
      setThemeState(Theme.DARK);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: themeState,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
