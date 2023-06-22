import { classNames } from '6shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from '6shared/ui/Button/Button';
import { Input } from '6shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import React, { memo, useCallback } from 'react';
import { Text, TextTheme } from '6shared/ui/Text/Text';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        username, password, error, isLoading,
    } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUserName({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Login by username')} theme={TextTheme.PRIMARY} />
            <Input
                type="text"
                className={cls.input}
                label={t('Username')}
                placeholder={t('John')}
                onChange={onChangeUsername}
                autoFocus
                value={username}
            />
            <Input
                type="text"
                className={cls.input}
                label={t('Password')}
                placeholder="123"
                onChange={onChangePassword}
                value={password}
            />
            <Button
                className={cls.loginBtn}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Login')}
            </Button>
            {error && <Text text={t('Invalid username or password')} theme={TextTheme.ERROR} />}
        </div>
    );
});
