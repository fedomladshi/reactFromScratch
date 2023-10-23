import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export type ButtonTheme = 'clear' | 'clearInverted' | 'outline' | 'background' | 'backgroundInverted';

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
}

export const Button = (props: PropsWithChildren<ButtonProps>) => {
    const {
        children,
        className,
        theme = 'clear',
        square = false,
        size = ButtonSize.M,
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(cls.Button, { [cls.square]: square, [cls.disabled]: otherProps.disabled }, [className, cls[theme], cls[size]])}
            {...otherProps}
        >
            {' '}
            {children}
        </button>
    );
};
