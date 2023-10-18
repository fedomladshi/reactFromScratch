import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Portal.module.scss';

interface PortalProps {
  className?: string;
  element?: Element | DocumentFragment;
}

export const Portal = (props: PropsWithChildren<PortalProps>) => {
    const { children, className, element = document.body } = props;

    return (
        <div className={classNames(cls.Portal, {}, [className])}>
            {createPortal(children, element)}
        </div>
    );
};
