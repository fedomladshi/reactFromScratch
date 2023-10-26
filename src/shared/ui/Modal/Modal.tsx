import {
    MouseEvent, PropsWithChildren, useCallback, useEffect, useRef, useState,
} from 'react';
import { useTheme } from 'shared/contexts/theme';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from '../Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
  className?: string;
  isOpen?: boolean;
  lazy?: boolean;
  onClose?: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: PropsWithChildren<ModalProps>) => {
    const {
        className,
        children,
        isOpen,
        lazy = false,
        onClose,
    } = props;
    const { theme } = useTheme();
    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    const closeHandler = useCallback((e?: MouseEvent) => {
        e?.stopPropagation();

        setIsClosing(true);
        timerRef.current = setTimeout(() => {
            setIsClosing(false);
            if (onClose) {
                onClose();
            }
        }, ANIMATION_DELAY);
    }, [onClose]);

    const onContentClick = (e: MouseEvent) => {
        e.stopPropagation();
    };

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className, theme])}>
                <div
                    className={cls.overlay}
                    onClick={closeHandler}
                >
                    <div className={classNames(cls.content, { [cls.isContentClosing]: isClosing }, [className])} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
