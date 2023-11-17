import {
    createContext, useMemo, useState, PropsWithChildren,
} from 'react';

export enum AppTheme {
     LIGHT = 'app_light_theme',
     DARK = 'app_dark_theme',
}

interface IThemeContext {
     theme?: AppTheme;
     setTheme?: (theme: AppTheme) => void;
}
export const ThemeContext = createContext<IThemeContext>({});

export const LOCAL_STORAGE_THEME = 'theme';

export const setLocalStorageTheme = (theme: AppTheme) => {
    localStorage.setItem(LOCAL_STORAGE_THEME, theme);
};

export const getLocalStorageTheme = () => {
    const theme = localStorage.getItem(LOCAL_STORAGE_THEME);
    return theme;
};

const defaultTheme = getLocalStorageTheme() as AppTheme || AppTheme.LIGHT;

interface IThemeProviderProps {
initialTheme?: AppTheme;
}

const ThemeProvider = (props: PropsWithChildren<IThemeProviderProps>) => {
    const {
        children,
        initialTheme,
    } = props;
    const [theme, setTheme] = useState<AppTheme>(initialTheme || defaultTheme);
    const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
