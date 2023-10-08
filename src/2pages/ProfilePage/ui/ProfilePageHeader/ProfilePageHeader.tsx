import { classNames } from '6shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from '6shared/ui/Text/Text';
import { Button, ButtonTheme } from '6shared/ui/Button/Button';
import { Profile } from '5entities/Profile/model/types/profile';
import { useSelector } from 'react-redux';
import {
    getProfileData, getProfileReadonly, profileActions, updateProfileData,
} from '5entities/Profile';
import { useAppDispatch } from '6shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback } from 'react';
import { getUserAuthData } from '5entities/User';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
    data?: Profile;
}

export const ProfilePageHeader = ({ className, data }: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile');
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={data?.firstname && `${data?.firstname} ${data?.lastname}`} />
            {canEdit && (
                <div className={cls.editBtns}>
                    { readonly
                        ? (
                            <Button
                                theme={ButtonTheme.PRIMARY}
                                onClick={onEdit}
                            >
                                {t('Edit')}
                            </Button>
                        )
                        : (
                            <>
                                <Button
                                    theme={ButtonTheme.PRIMARY}
                                    onClick={onSave}
                                >
                                    {t('Save')}
                                </Button>
                                <Button
                                    theme={ButtonTheme.SECONDARY}
                                    onClick={onCancelEdit}
                                >
                                    {t('Cancel')}
                                </Button>
                            </>

                        )}
                </div>
            )}
        </div>
    );
};
