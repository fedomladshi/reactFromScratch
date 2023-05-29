import React, { createContext } from 'react';

export enum Theme {
     LIGHT = 'light',
     DARK = 'dark',
}

export interface ThemeContext {
     theme?: Theme;
     setTheme?: (theme: Theme) => void;
}
export const ThemeContext = createContext<ThemeContext>({});

export const LOCAL_STORAGE_THEME = 'theme';

export const setLocalStorageTheme = (theme: Theme) => {
     localStorage.setItem(LOCAL_STORAGE_THEME, theme);
}

export const getLocalStorageTheme = () => {
     const theme = localStorage.getItem(LOCAL_STORAGE_THEME);
     return theme;
}