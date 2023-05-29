import React, { useContext } from 'react';
import { Theme, ThemeContext, setLocalStorageTheme } from './ThemeContext';

interface useThemeResult {
     theme: Theme;
     toggleTheme: () => void;
}
const useTheme = (): useThemeResult => {
     const {theme, setTheme} = useContext(ThemeContext);

     const toggleTheme = () => {
          const value = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
          setTheme(value);
          setLocalStorageTheme(value)
     };

     return {
          theme,
          toggleTheme,
     }
};

export default useTheme;