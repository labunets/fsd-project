import { classNames } from '6shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from '6shared/ui/Button/Button';
import { Input } from '6shared/ui/Input/Input';
import { useDispatch, useSelector, useStore } from 'react-redux';
import React, { memo, useCallback, useEffect } from 'react';
import { Text, TextTheme } from '6shared/ui/Text/Text';
import { ReduxStoreWithManager } from '1app/providers/StoreProvider';
import { DynamicModuleLoader, ReducersList } from '6shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginLoading } from '../../model/selectors/getLoginLoading/getLoginLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';

export interface LoginFormProps {
    className?: string;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginLoading);
    const error = useSelector(getLoginError);

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
        <DynamicModuleLoader
            reducers={initialReducers}
            removeOnUnmount
        >
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
        </DynamicModuleLoader>
    );
});

export default LoginForm;
