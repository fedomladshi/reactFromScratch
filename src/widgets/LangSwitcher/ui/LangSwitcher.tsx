import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher = ({ className, short = false }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            theme="clear"
            className={classNames(cls.LangSwitcher, {}, [className])}
            onClick={toggleLang}
        >
            {t(short ? 'language-short' : 'language')}
        </Button>

    );
};
