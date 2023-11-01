import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

type TextTheme = 'error';

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
}

export const Text = memo(({
    className,
    title,
    text,
    theme,
}: TextProps) => (
    <div className={classNames(cls.Text, {}, [className, cls[theme]])}>
        {!!title && <p className={cls.title}>{title}</p>}
        {!!text && <p className={cls.text}>{text}</p>}
    </div>
));
