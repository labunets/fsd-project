import { useTranslation } from 'react-i18next';
import { Currency, CurrencySelect } from '@/5entities/Currency';
import { Country, CountrySelect } from '@/5entities/Country';
import { classNames } from '@/6shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from '@/6shared/ui/deprecated/Text';
import { Input } from '@/6shared/ui/deprecated/Input';
import { Loader } from '@/6shared/ui/deprecated/Loader';
import { Avatar, AvatarSize } from '@/6shared/ui/deprecated/Avatar';
import { VStack } from '@/6shared/ui/redesigned/Stack';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeFirstname?: (value?: string) => void;
    onChangeLastname?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
    } = props;
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div
                className={classNames(cls.ProfileCard, {}, [
                    className,
                    cls.loading,
                ])}
            >
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div
                className={classNames(cls.ProfileCard, {}, [
                    className,
                    cls.error,
                ])}
            >
                <Text
                    title={t('Error')}
                    text={t('Cannot load profile data')}
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    return (
        <VStack
            gap="2"
            data-testid="ProfileCard"
            className={classNames(cls.ProfileCard, {}, [className, cls.data])}
        >
            <Avatar
                src={data?.avatar}
                size={AvatarSize.LARGE}
                alt={`${data?.firstname} ${data?.lastname}`}
                className={cls.avatar}
            />
            <Input
                value={data?.firstname}
                label={t('Firstname')}
                onChange={onChangeFirstname}
                readonly={readonly}
                data-testid="ProfileCard.firstname"
            />
            <Input
                value={data?.lastname}
                label={t('Lastname')}
                onChange={onChangeLastname}
                readonly={readonly}
                data-testid="ProfileCard.lastname"
            />
            <Input
                value={data?.age}
                label={t('Age')}
                onChange={onChangeAge}
                readonly={readonly}
            />
            <Input
                value={data?.city}
                label={t('City')}
                onChange={onChangeCity}
                readonly={readonly}
            />
            <Input
                value={data?.username}
                label={t('Username')}
                onChange={onChangeUsername}
                readonly={readonly}
            />
            <Input
                value={data?.avatar}
                label={t('Avatar')}
                onChange={onChangeAvatar}
                readonly={readonly}
            />
            <CurrencySelect
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readonly}
            />
            <CountrySelect
                value={data?.country}
                onChange={onChangeCountry}
                readonly={readonly}
            />
        </VStack>
    );
};
