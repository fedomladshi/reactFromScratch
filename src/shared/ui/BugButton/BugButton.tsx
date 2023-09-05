import {
    ButtonHTMLAttributes, PropsWithChildren, useEffect, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from '../Button/Button.module.scss';

export type ThemeButton = 'clear';

interface BugButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const BugButton = (props: PropsWithChildren<BugButtonProps>) => {
    const {
        children, className, theme = 'clear',
    } = props;

    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        if (hasError) {
            throw new Error();
        }
    }, [hasError]);
    return (
        <button
            type="button"
            className={classNames(cls.Button, {}, [])}
            onClick={() => setHasError(true)}
        >
            {children}
        </button>
    );
};
