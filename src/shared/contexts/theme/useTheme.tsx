import { useContext } from 'react';
import { AppTheme, ThemeContext, setLocalStorageTheme } from './ThemeContext';

interface useThemeResult {
     theme: AppTheme;
     toggleTheme: () => void;
}
export const useTheme = (): useThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const value = theme === AppTheme.DARK ? AppTheme.LIGHT : AppTheme.DARK;
        setTheme?.(value);
        setLocalStorageTheme(value);
    };

    return {
        theme: theme || AppTheme.LIGHT,
        toggleTheme,
    };
};
