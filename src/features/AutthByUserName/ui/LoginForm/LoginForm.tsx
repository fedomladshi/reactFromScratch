import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { loginByUsername } from 'features/AutthByUserName/model/services/loginByUsername/loginByUsername';
import { useAppDispatch, useAppSelector } from 'app/hooks/redux';
import { Text } from 'shared/ui/Text/Text';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const {
        username, password, isLoading, error,
    } = useAppSelector(getLoginState);

    const onChangeUsername = useCallback((value) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ password, username }));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('authorization-form')} />
            {!!error && <Text theme="error" text={error} />}
            <Input
                value={username}
                onChange={onChangeUsername}
                placeholder={t('input-username')}
                className={cls.input}
                type="text"
            />
            <Input
                value={password}
                onChange={onChangePassword}
                placeholder={t('input-password')}
                className={cls.input}
                type="text"
            />
            <Button disabled={isLoading} theme="outline" className={cls.loginBtn} onClick={onLoginClick}>
                {t('login')}
            </Button>
        </div>
    );
});
