import {
    ReactNode, createContext, useMemo, useState,
} from 'react';

export enum Theme {
     LIGHT = 'light',
     DARK = 'dark',
}

interface IThemeContext {
     theme?: Theme;
     setTheme?: (theme: Theme) => void;
}
export const ThemeContext = createContext<IThemeContext>({});

export const LOCAL_STORAGE_THEME = 'theme';

export const setLocalStorageTheme = (theme: Theme) => {
    localStorage.setItem(LOCAL_STORAGE_THEME, theme);
};

export const getLocalStorageTheme = () => {
    const theme = localStorage.getItem(LOCAL_STORAGE_THEME);
    return theme;
};

const defaultTheme = getLocalStorageTheme() as Theme || Theme.LIGHT;

interface IThemeProvider {
children: ReactNode
}

const ThemeProvider = ({ children }: IThemeProvider) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);
    const defaulrProps = useMemo(() => ({ theme, setTheme }), [theme]);

    return (
        <ThemeContext.Provider value={defaulrProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
