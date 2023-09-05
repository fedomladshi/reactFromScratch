import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { PropsWithChildren } from 'react';

import cls from './AppLink.module.scss';

type AppLinkTheme = 'inverted' | 'primary';

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink = (props: PropsWithChildren<AppLinkProps>) => {
    const {
        className,
        children,
        theme = 'primary',
        to,
    } = props;

    return (
        <Link to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]])}>
            {children}
        </Link>
    );
};
