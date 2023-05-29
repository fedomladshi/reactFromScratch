import { ReactNode, useMemo, useState } from 'react';
import { Theme, ThemeContext, getLocalStorageTheme, setLocalStorageTheme } from './ThemeContext';

const defaultTheme = getLocalStorageTheme() as Theme || Theme.LIGHT;

interface ThemeProvider {
children: ReactNode
}

const ThemeProvider = ({children}: ThemeProvider) => {
     const [theme, setTheme] = useState<Theme>(defaultTheme);

     const defaulrProps = useMemo(() => ({theme, setTheme}), [theme]);

     return (
          <ThemeContext.Provider value={defaulrProps}>
               {children}
          </ThemeContext.Provider>
     );
};

export default ThemeProvider;