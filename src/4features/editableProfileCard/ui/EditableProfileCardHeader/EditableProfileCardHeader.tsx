import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/5entities/User';
import { useAppDispatch } from '@/6shared/lib/hooks/useAppDispatch/useAppDispatch';
import { HStack } from '@/6shared/ui/redesigned/Stack';
import { Button as ButtonDeprecated, ButtonTheme } from '@/6shared/ui/deprecated/Button';
import { Button } from '@/6shared/ui/redesigned/Button';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { profileActions } from '../../model/slices/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { ToggleFeatures } from '@/6shared/lib/features';

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
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <HStack justify="between" className={className}>
                    {canEdit &&
                        (readonly ? (
                            <Button
                                variant="outlined"
                                onClick={onEdit}
                                data-testid="EditableProfileCardHeader.EditButton"
                            >
                                {t('Edit')}
                            </Button>
                        ) : (
                            <>
                                <Button
                                    variant="outlined"
                                    onClick={onCancelEdit}
                                    data-testid="EditableProfileCardHeader.CancelButton"
                                >
                                    {t('Cancel')}
                                </Button>
                                <Button
                                    variant="outlined"
                                    onClick={onSave}
                                    data-testid="EditableProfileCardHeader.SaveButton"
                                >
                                    {t('Save')}
                                </Button>
                            </>
                        ))}
                </HStack>
            }
            off={
                <HStack justify="between" className={className}>
                    {canEdit &&
                        (readonly ? (
                            <ButtonDeprecated
                                theme={ButtonTheme.TERTIARY}
                                onClick={onEdit}
                                data-testid="EditableProfileCardHeader.EditButton"
                            >
                                {t('Edit')}
                            </ButtonDeprecated>
                        ) : (
                            <>
                                <ButtonDeprecated
                                    theme={ButtonTheme.TERTIARY}
                                    onClick={onCancelEdit}
                                    data-testid="EditableProfileCardHeader.CancelButton"
                                >
                                    {t('Cancel')}
                                </ButtonDeprecated>
                                <ButtonDeprecated
                                    theme={ButtonTheme.PRIMARY}
                                    onClick={onSave}
                                    data-testid="EditableProfileCardHeader.SaveButton"
                                >
                                    {t('Save')}
                                </ButtonDeprecated>
                            </>
                        ))}
                </HStack>
            }
        />
    );
});
