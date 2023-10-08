import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly,
    getProfileValidateErrors,
    profileActions,
    profileReducer, ValidateProfileError,
} from '5entities/Profile';
import { ProfileCard } from '5entities/Profile/ui/ProfileCard/ProfileCard';
import { classNames } from '6shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '6shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '6shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Currency } from '5entities/Currency';
import { Country } from '5entities/Country';
import { Text, TextTheme } from '6shared/ui/Text/Text';
import { useInitialEffect } from '6shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useParams } from 'react-router-dom';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);
    const { id } = useParams<{ id: string }>();

    const validateErrorTranslations = {
        [ValidateProfileError.NO_DATA]: t('No data provided'),
        [ValidateProfileError.SERVER_ERROR]: t('Server error'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('Invalid username or password'),
        [ValidateProfileError.INCORRECT_AGE]: t('Incorrect age'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Invalid country'),
    };

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });

    const onChangeFirstname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ firstname: value || '' }));
    }, [dispatch]);

    const onChangeFLastname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ lastname: value || '' }));
    }, [dispatch]);

    const onChangeAge = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ age: Number(value) || 0 }));
    }, [dispatch]);

    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ city: value || '' }));
    }, [dispatch]);

    const onChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ username: value || '' }));
    }, [dispatch]);

    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ avatar: value || '' }));
    }, [dispatch]);

    const onChangeCurrency = useCallback((currency?: Currency) => {
        dispatch(profileActions.updateProfile({ currency }));
    }, [dispatch]);

    const onChangeCountry = useCallback((country?: Country) => {
        dispatch(profileActions.updateProfile({ country }));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeOnUnmount>
            <div className={classNames('', {}, [className])}>
                <h1>{t('Profile')}</h1>
            </div>
            <ProfilePageHeader
                data={formData}
            />
            {validateErrors?.length && validateErrors.map((err) => (
                <Text
                    theme={TextTheme.ERROR}
                    text={validateErrorTranslations[err]}
                    key={err}
                />
            ))}
            <ProfileCard
                data={formData}
                isLoading={isLoading}
                error={error}
                readonly={readonly}
                onChangeFirstname={onChangeFirstname}
                onChangeLastname={onChangeFLastname}
                onChangeAge={onChangeAge}
                onChangeCity={onChangeCity}
                onChangeUsername={onChangeUsername}
                onChangeAvatar={onChangeAvatar}
                onChangeCurrency={onChangeCurrency}
                onChangeCountry={onChangeCountry}
            />
        </DynamicModuleLoader>

    );
};

export default ProfilePage;
