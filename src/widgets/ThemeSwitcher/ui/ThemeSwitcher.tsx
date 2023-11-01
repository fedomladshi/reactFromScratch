import IconLight from 'shared/assets/icons/theme-light.svg';
import IconDark from 'shared/assets/icons/theme-dark.svg';
import { AppTheme, useTheme } from 'shared/contexts/theme';
import { Button } from 'shared/ui/Button/Button';
import { memo } from 'react';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button
            className={className}
            onClick={toggleTheme}
        >
            {theme === AppTheme.DARK ? <IconDark /> : <IconLight />}
        </Button>

    );
});
