import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps {
     className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const [isAuthOpen, setIsAuthOpen] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthOpen((i) => !i);
    }, []);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                theme="clearInverted"
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('login')}
            </Button>
            {/* eslint-disable-next-line */}
            <Modal isOpen={isAuthOpen} onClose={onToggleModal}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci fugiat dignissimos inventore.
            </Modal>
        </div>
    );
};
