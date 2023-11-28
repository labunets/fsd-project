import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Input as InputDeprecated } from '@/6shared/ui/deprecated/Input';
import { Input } from '@/6shared/ui/redesigned/Input';
import { Button as ButtonDeprecated, ButtonTheme } from '@/6shared/ui/deprecated/Button';
import { Button } from '@/6shared/ui/redesigned/Button';
import { useAppDispatch } from '@/6shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/6shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Text as TextDeprecated, TextTheme } from '@/6shared/ui/deprecated/Text';
import { Text } from '@/6shared/ui/redesigned/Text';
import { HStack, VStack } from '@/6shared/ui/redesigned/Stack';
import {
    addCommentFormActions,
    addCommentFormReducer,
} from '../../model/slices/addCommentFormSlice';
import {
    getAddCommentFormError,
    getAddCommentFormText,
} from '../../model/selectors/addCommentFormSelectors';
import { ToggleFeatures } from '@/6shared/lib/features';
import { Card } from '@/6shared/ui/redesigned/Card';

export interface AddCommentFormProps {
    onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo((props: AddCommentFormProps) => {
    const { onSendComment } = props;
    const { t } = useTranslation();
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback(
        (value?: string) => {
            dispatch(addCommentFormActions.setText(value || ''));
        },
        [dispatch],
    );

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [onCommentTextChange, onSendComment, text]);

    if (error) {
        return (
            <HStack align="center">
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={<Text text={t('Error loading comment form')} variant="error" />}
                    off={
                        <TextDeprecated
                            text={t('Error loading comment form')}
                            theme={TextTheme.ERROR}
                        />
                    }
                />
            </HStack>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <Card max>
                        <VStack align="end" data-testid="AddCommentForm">
                            <Input
                                placeholder={t('Enter your comment')}
                                value={text}
                                onChange={onCommentTextChange}
                                data-testid="AddCommentForm.Input"
                            />
                            <Button
                                variant="outlined"
                                onClick={onSendHandler}
                                disabled={!text}
                                data-testid="AddCommentForm.Button"
                            >
                                {t('Send')}
                            </Button>
                        </VStack>
                    </Card>
                }
                off={
                    <VStack align="end" data-testid="AddCommentForm">
                        <InputDeprecated
                            placeholder={t('Enter your comment')}
                            value={text}
                            onChange={onCommentTextChange}
                            data-testid="AddCommentForm.Input"
                        />
                        <ButtonDeprecated
                            theme={ButtonTheme.PRIMARY}
                            onClick={onSendHandler}
                            disabled={!text}
                            data-testid="AddCommentForm.Button"
                        >
                            {t('Send')}
                        </ButtonDeprecated>
                    </VStack>
                }
            />
        </DynamicModuleLoader>
    );
});

export default AddCommentForm;
