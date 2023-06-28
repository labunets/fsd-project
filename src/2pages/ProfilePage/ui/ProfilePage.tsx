import { profileReducer } from '5entities/Profile';
import { classNames } from '6shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '6shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useTranslation } from 'react-i18next';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation();

    return (
        <DynamicModuleLoader reducers={reducers} removeOnUnmount>
            <div className={classNames('', {}, [className])}>
                <h1>{t('Profile')}</h1>
            </div>
        </DynamicModuleLoader>

    );
};

export default ProfilePage;
