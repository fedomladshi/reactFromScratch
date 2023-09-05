import IconLight from 'shared/assets/icons/theme-light.svg';
import IconDark from 'shared/assets/icons/theme-dark.svg';
import { Theme, useTheme } from 'shared/contexts/theme';
import { Button } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button
            className={className}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <IconDark /> : <IconLight />}
        </Button>

    );
};
