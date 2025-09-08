import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { classNames } from '@/6shared/lib/classNames/classNames';
import { Button as ButtonDeprecated, ButtonTheme } from '@/6shared/ui/deprecated/Button';
import { Button } from '@/6shared/ui/redesigned/Button';
import { Input as InputDeprecated } from '@/6shared/ui/deprecated/Input';
import { Input } from '@/6shared/ui/redesigned/Input';
import { Text as TextDeprecated, TextTheme } from '@/6shared/ui/deprecated/Text';
import { Text } from '@/6shared/ui/redesigned/Text';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/6shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/6shared/lib/hooks/useAppDispatch/useAppDispatch';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { loginActions, loginReducer } from '../../model/slices/loginSlice';
import cls from './LoginForm.module.scss';
import { ToggleFeatures } from '@/6shared/lib/features';
import { VStack } from '@/6shared/ui/redesigned/Stack';
import { useForceUpdate } from '@/6shared/lib/render/forceUpdate';

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);
    const forceUpdate = useForceUpdate();

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
            forceUpdate();
        }
    }, [dispatch, username, password, onSuccess, forceUpdate]);

    return (
        <DynamicModuleLoader removeOnUnmount reducers={initialReducers}>
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <VStack
                        gap="2"
                        className={classNames(cls.LoginFormRedesigned, {}, [className])}
                    >
                        <Text title={t('Login by username')} />
                        <Input
                            type="text"
                            className={cls.input}
                            label={t('Username')}
                            placeholder={t('admin')}
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
                            variant="outlined"
                        >
                            {t('Login')}
                        </Button>
                        {error && <Text text={t('Invalid username or password')} variant="error" />}
                    </VStack>
                }
                off={
                    <div className={classNames(cls.LoginForm, {}, [className])}>
                        <TextDeprecated title={t('Login by username')} theme={TextTheme.PRIMARY} />
                        <InputDeprecated
                            type="text"
                            className={cls.input}
                            label={t('Username')}
                            placeholder={t('admin')}
                            onChange={onChangeUsername}
                            autoFocus
                            value={username}
                        />
                        <InputDeprecated
                            type="text"
                            className={cls.input}
                            label={t('Password')}
                            placeholder="123"
                            onChange={onChangePassword}
                            value={password}
                        />
                        <ButtonDeprecated
                            className={cls.loginBtn}
                            onClick={onLoginClick}
                            disabled={isLoading}
                            theme={ButtonTheme.PRIMARY}
                        >
                            {t('Login')}
                        </ButtonDeprecated>
                        {error && (
                            <TextDeprecated
                                text={t('Invalid username or password')}
                                theme={TextTheme.ERROR}
                            />
                        )}
                    </div>
                }
            />
        </DynamicModuleLoader>
    );
});

export default LoginForm;
