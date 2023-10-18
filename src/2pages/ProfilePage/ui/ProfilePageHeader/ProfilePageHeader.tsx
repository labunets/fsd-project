import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from '6shared/ui/Button/Button';
import { Profile } from '5entities/Profile/model/types/profile';
import { useSelector } from 'react-redux';
import {
    getProfileData, getProfileReadonly, profileActions, updateProfileData,
} from '5entities/Profile';
import { useAppDispatch } from '6shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback } from 'react';
import { getUserAuthData } from '5entities/User';
import { HStack } from '6shared/ui/Stack';

interface ProfilePageHeaderProps {
    data?: Profile;
}

export const ProfilePageHeader = ({ data }: ProfilePageHeaderProps) => {
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
        <HStack>
            {canEdit && (
                readonly
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
                    )
            )}
        </HStack>
    );
};
