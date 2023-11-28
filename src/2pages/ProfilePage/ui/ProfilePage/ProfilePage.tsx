import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Page } from '@/3widgets/Page';
import { EditableProfileCard } from '@/4features/editableProfileCard';
import { VStack } from '@/6shared/ui/redesigned/Stack';
import { classNames } from '@/6shared/lib/classNames/classNames';
import { Text as TextDeprecated, TextSize } from '@/6shared/ui/deprecated/Text';
import { Text } from '@/6shared/ui/redesigned/Text';
import { ToggleFeatures } from '@/6shared/lib/features';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation('profile');
    const { id } = useParams<{ id: string }>();

    return (
        <Page className={classNames('', {}, [className])} data-testid="ProfilePage">
            <VStack>
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={<Text title={t('Profile')} size="l" />}
                    off={<TextDeprecated title={t('Profile')} size={TextSize.L} />}
                />

                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    );
};

export default ProfilePage;
