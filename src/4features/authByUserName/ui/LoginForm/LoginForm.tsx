import { classNames } from '6shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from '6shared/ui/Button/Button';
import { Input } from '6shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                type="text"
                className={cls.input}
                label={t('Username')}
                placeholder={t('John')}
                autoFocus
            />
            <Input
                type="text"
                className={cls.input}
                label={t('Password')}
                placeholder="123"
            />
            <Button className={cls.loginBtn}>
                {t('Login')}
            </Button>
        </div>
    );
};
