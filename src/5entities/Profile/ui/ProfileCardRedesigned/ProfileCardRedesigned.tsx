import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Avatar } from '@/6shared/ui/redesigned/Avatar';
import { HStack, VStack } from '@/6shared/ui/redesigned/Stack';
import { Input } from '@/6shared/ui/redesigned/Input';
import { CurrencySelect } from '@/5entities/Currency';
import { CountrySelect } from '@/5entities/Country';
import { Card } from '@/6shared/ui/redesigned/Card';
import { ProfileCardProps } from '../ProfileCard/ProfileCard';
import { Skeleton } from '@/6shared/ui/redesigned/Skeleton';
import { Text } from '@/6shared/ui/redesigned/Text';

export const ProfileCardRedesignedSkeleton = () => {
    return (
        <Card max data-testid="ProfileCard">
            <HStack gap="3" max justify="center">
                <Skeleton border="50%" width="64px" height="64px" />
            </HStack>
            <HStack gap="3" max align="start">
                <VStack gap="1" max>
                    <Skeleton width="100%" height="40" />
                    <Skeleton width="100%" height="40" />
                    <Skeleton width="100%" height="40" />
                    <Skeleton width="100%" height="40" />
                </VStack>
                <VStack gap="1" max>
                    <Skeleton width="100%" height="40" />
                    <Skeleton width="100%" height="40" />
                    <Skeleton width="100%" height="40" />
                    <Skeleton width="100%" height="40" />
                </VStack>
            </HStack>
        </Card>
    );
};

export const ProfileCardRedesignedError = () => {
    const { t } = useTranslation('profile');

    return (
        <div>
            <Text
                title={t('Error')}
                text={t('Cannot load profile data')}
                variant="error"
                align="center"
            />
        </div>
    );
};

export const ProfileCardRedesigned = memo((props: ProfileCardProps) => {
    const {
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
        <Card max data-testid="ProfileCard">
            <HStack gap="3" max justify="center">
                <Avatar src={data?.avatar} size="l" alt={`${data?.firstname} ${data?.lastname}`} />
            </HStack>

            <HStack gap="3" max align="start">
                <VStack gap="1" max>
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
                </VStack>
                <VStack gap="1" max>
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
            </HStack>
        </Card>
    );
});
