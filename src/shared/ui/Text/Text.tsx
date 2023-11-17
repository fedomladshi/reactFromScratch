import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

type TextTheme = 'default' | 'error';

type TextAlign = 'start' | 'center' | 'end';

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
}

export const Text = memo(({
    className,
    title,
    text,
    theme = 'default',
    align = 'start',
}: TextProps) => (
    <div className={classNames(cls.Text, {}, [className, cls[theme], cls[align]])}>
        {!!title && <p className={cls.title}>{title}</p>}
        {!!text && <p className={cls.text}>{text}</p>}
    </div>
));
