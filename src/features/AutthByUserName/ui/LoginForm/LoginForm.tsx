import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { loginByUsername } from 'features/AutthByUserName/model/services/loginByUsername/loginByUsername';
import { Text } from 'shared/ui/Text/Text';
import { ReducersList, useDynamicReducerLoader } from 'shared/hooks/useDynamicReducerLoader/useDynamicReducerLoader';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'shared/hooks/useAppSelector/useAppSelector';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginIsError } from '../../model/selectors/getLoginIsError/getLoginIsError';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
  className?: string;
  onLoginSuccess: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className, onLoginSuccess }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    useDynamicReducerLoader(initialReducers, true);

    const username = useAppSelector(getLoginUsername);
    const isLoading = useAppSelector(getLoginIsLoading);
    const error = useAppSelector(getLoginIsError);
    const password = useAppSelector(getLoginPassword);

    const onChangeUsername = useCallback((value) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ password, username }));
        if (result.meta.requestStatus === 'fulfilled') {
            onLoginSuccess();
        }
    }, [dispatch, password, username]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('authorization-form')} />
            {!!error && <Text theme="error" text={t(error)} />}
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

export default LoginForm;
