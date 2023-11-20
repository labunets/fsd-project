import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/6shared/lib/classNames/classNames';
import cls from './ProfileCardDeprecated.module.scss';
import { HStack, VStack } from '@/6shared/ui/redesigned/Stack';
import {
    Avatar as DeprecatedAvatar,
    AvatarSize,
} from '@/6shared/ui/deprecated/Avatar';
import { Input as DeprecatedInput } from '@/6shared/ui/deprecated/Input';
import { CurrencySelect } from '@/5entities/Currency';
import { CountrySelect } from '@/5entities/Country';
import { ProfileCardProps } from '../ProfileCard/ProfileCard';
import { Loader } from '@/6shared/ui/deprecated/Loader';
import {
    Text as DeprecatedText,
    TextAlign,
    TextTheme,
} from '@/6shared/ui/deprecated/Text';

export const ProfileCardDeprecatedLoader = () => {
    return (
        <HStack
            max
            justify="center"
            className={classNames(cls.ProfileCard, {}, [cls.loading])}
        >
            <Loader />
        </HStack>
    );
};

export const ProfileCardDeprecatedError = () => {
    const { t } = useTranslation('profile');

    return (
        <div className={classNames(cls.ProfileCard, {}, [cls.error])}>
            <DeprecatedText
                title={t('Error')}
                text={t('Cannot load profile data')}
                theme={TextTheme.ERROR}
                align={TextAlign.CENTER}
            />
        </div>
    );
};

export const ProfileCardDeprecated = memo((props: ProfileCardProps) => {
    const {
        className,
        data,
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

    return (
        <VStack
            gap="2"
            data-testid="ProfileCard"
            className={classNames(cls.ProfileCard, {}, [className, cls.data])}
        >
            <DeprecatedAvatar
                src={data?.avatar}
                size={AvatarSize.LARGE}
                alt={`${data?.firstname} ${data?.lastname}`}
                className={cls.avatar}
            />
            <DeprecatedInput
                value={data?.firstname}
                label={t('Firstname')}
                onChange={onChangeFirstname}
                readonly={readonly}
                data-testid="ProfileCard.firstname"
            />
            <DeprecatedInput
                value={data?.lastname}
                label={t('Lastname')}
                onChange={onChangeLastname}
                readonly={readonly}
                data-testid="ProfileCard.lastname"
            />
            <DeprecatedInput
                value={data?.age}
                label={t('Age')}
                onChange={onChangeAge}
                readonly={readonly}
            />
            <DeprecatedInput
                value={data?.city}
                label={t('City')}
                onChange={onChangeCity}
                readonly={readonly}
            />
            <DeprecatedInput
                value={data?.username}
                label={t('Username')}
                onChange={onChangeUsername}
                readonly={readonly}
            />
            <DeprecatedInput
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
});
