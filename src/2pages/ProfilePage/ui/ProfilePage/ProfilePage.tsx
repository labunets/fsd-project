import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Page } from '@/3widgets/Page';
import { EditableProfileCard } from '@/4features/editableProfileCard';
import { VStack } from '@/6shared/ui/Stack';
import { classNames } from '@/6shared/lib/classNames/classNames';
import { Text, TextSize } from '@/6shared/ui/Text';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation('profile');
    const { id } = useParams<{id: string}>();

    return (
        <Page
            className={classNames('', {}, [className])}
            data-testid="ProfilePage"
        >
            <VStack>
                <Text title={t('Profile')} size={TextSize.L} />
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    );
};

export default ProfilePage;
