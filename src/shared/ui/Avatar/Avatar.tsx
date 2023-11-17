import { classNames } from 'shared/lib/classNames/classNames';
import {
    CSSProperties, memo, PropsWithChildren, useMemo,
} from 'react';

import cls from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  size?: number;
  alt: string;
  src: string;
}

export const Avatar = memo((props: PropsWithChildren<AvatarProps>) => {
    const {
        className,
        size,
        src,
        alt,
        ...otherProps
    } = props;

    const styles = useMemo<CSSProperties>(() => ({
        width: size,
        height: size,
    }), [size]);

    return (
        <img
            src={src}
            style={styles}
            className={classNames(cls.Avatar, {}, [className])}
            alt={alt}
            {...otherProps}
        />
    );
});
