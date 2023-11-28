import { useContext } from 'react';
import { AppTheme, ThemeContext, setLocalStorageTheme } from './ThemeContext';

interface useThemeResult {
     theme: AppTheme;
     toggleTheme: () => void;
}
export const useTheme = (): useThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        let newTheme: AppTheme;

        switch (theme) {
        case AppTheme.DARK:
            newTheme = AppTheme.LIGHT;
            break;
        case AppTheme.LIGHT:
            newTheme = AppTheme.ORANGE;
            break;
        case AppTheme.ORANGE:
            newTheme = AppTheme.DARK;
            break;
        default:
            newTheme = AppTheme.LIGHT;
        }
        setTheme?.(newTheme);
        setLocalStorageTheme(newTheme);
    };

    return {
        theme: theme || AppTheme.LIGHT,
        toggleTheme,
    };
};
