import { classNames } from '6shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames('', {}, [className])}>
            <h1>{t('Profile')}</h1>
        </div>
    );
};

export default ProfilePage;
