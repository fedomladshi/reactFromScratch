import { getAuthUserData, userActions } from 'entities/User';
import { LoginModal } from 'features/AutthByUserName';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'shared/hooks/useAppSelector/useAppSelector';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
     className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const authData = useAppSelector(getAuthUserData);
    const dispatch = useAppDispatch();
    const [isAuthOpen, setIsAuthOpen] = useState(false);

    const handleModalToggle = useCallback(() => {
        setIsAuthOpen((i) => !i);
    }, []);

    const onLogout = () => {
        dispatch(userActions.logout());
    };

    if (authData?.username) {
        return (
            <div className={classNames(cls.navbar, {}, [className])}>
                <Button
                    theme="clearInverted"
                    className={cls.links}
                    onClick={onLogout}
                >
                    {t('logout')}
                </Button>
            </div>
        );
    }
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                theme="clearInverted"
                className={cls.links}
                onClick={handleModalToggle}
            >
                {t('login')}
            </Button>
            {isAuthOpen && <LoginModal isOpen={isAuthOpen} onClose={handleModalToggle} />}
        </div>
    );
});
