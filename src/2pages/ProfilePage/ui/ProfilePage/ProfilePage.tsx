import { classNames } from '6shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Page } from '3widgets/Page/Page';
import { VStack } from '6shared/ui/Stack';
import { EditableProfileCard } from '4features/editableProfileCard';
import { useParams } from 'react-router-dom';
import { Text, TextSize } from '6shared/ui/Text/Text';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation('profile');
    const { id } = useParams<{id: string}>();

    return (
        <Page className={classNames('', {}, [className])}>
            <VStack>
                <Text title={t('Profile')} size={TextSize.L} />
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    );
};

export default ProfilePage;
