import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '5entities/User';
import { useAppDispatch } from '6shared/lib/hooks/useAppDispatch/useAppDispatch';
import { HStack } from '6shared/ui/Stack';
import { Button, ButtonTheme } from '6shared/ui/Button/Button';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import {
    getProfileReadonly,
} from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';

interface EditableProfileCardHeaderProps {
    className?: string;
}

export const EditableProfileCardHeader = memo(({ className }: EditableProfileCardHeaderProps) => {
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
        <HStack justify="between" className={className}>
            {canEdit && (
                readonly
                    ? (
                        <Button
                            theme={ButtonTheme.TERTIARY}
                            onClick={onEdit}
                            data-testid="EditableProfileCardHeader.EditButton"
                        >
                            {t('Edit')}
                        </Button>
                    )
                    : (
                        <>
                            <Button
                                theme={ButtonTheme.TERTIARY}
                                onClick={onCancelEdit}
                                data-testid="EditableProfileCardHeader.CancelButton"
                            >
                                {t('Cancel')}
                            </Button>
                            <Button
                                theme={ButtonTheme.PRIMARY}
                                onClick={onSave}
                                data-testid="EditableProfileCardHeader.SaveButton"
                            >
                                {t('Save')}
                            </Button>
                        </>
                    )
            )}
        </HStack>
    );
});
