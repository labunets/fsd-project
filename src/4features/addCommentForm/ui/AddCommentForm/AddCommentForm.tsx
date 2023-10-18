import { classNames } from '6shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Input } from '6shared/ui/Input/Input';
import { Button, ButtonTheme } from '6shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '6shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from '6shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Text, TextTheme } from '6shared/ui/Text/Text';
import { HStack, VStack } from '6shared/ui/Stack';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slices/addCommentFormSlice';
import { getAddCommentFormError, getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors';

export interface AddCommentFormProps {
    onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo((props: AddCommentFormProps) => {
    const {
        onSendComment,
    } = props;
    const { t } = useTranslation();
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback((value?: string) => {
        dispatch(addCommentFormActions.setText(value || ''));
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [onCommentTextChange, onSendComment, text]);

    if (error) {
        return (
            <HStack align="center">
                <Text
                    text={t('Error loading comment form')}
                    theme={TextTheme.ERROR}
                />
            </HStack>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <VStack>
                <Input
                    placeholder={t('Enter your comment')}
                    value={text}
                    onChange={onCommentTextChange}
                />
                <Button
                    theme={ButtonTheme.PRIMARY}
                    onClick={onSendHandler}
                >
                    {t('Send')}
                </Button>
            </VStack>
        </DynamicModuleLoader>
    );
});

export default AddCommentForm;
