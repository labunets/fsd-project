import { classNames } from '6shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileData } from '5entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileIsLoading } from '5entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from '5entities/Profile/model/selectors/getProfileError/getProfileError';
import { Text } from '6shared/ui/Text/Text';
import { Button, ButtonTheme } from '6shared/ui/Button/Button';
import { Input } from '6shared/ui/Input/Input';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={data?.firstname && `${data?.firstname} ${data?.lastname}`} />
                <Button
                    className={cls.editBtn}
                    theme={ButtonTheme.PRIMARY}
                >
                    {t('Edit')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input
                    value={data?.firstname}
                    label={t('Firstname')}
                    className={cls.input}
                />
                <Input
                    value={data?.lastname}
                    label={t('Lastname')}
                    className={cls.input}
                />
            </div>
        </div>
    );
};
