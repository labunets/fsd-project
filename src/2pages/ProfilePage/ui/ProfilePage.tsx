import { fetchProfileData, profileReducer } from '5entities/Profile';
import { ProfileCard } from '5entities/Profile/ui/ProfileCard/ProfileCard';
import { classNames } from '6shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '6shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '6shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeOnUnmount>
            <div className={classNames('', {}, [className])}>
                <h1>{t('Profile')}</h1>
            </div>
            <ProfileCard />
        </DynamicModuleLoader>

    );
};

export default ProfilePage;
