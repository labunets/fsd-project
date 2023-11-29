import { useTranslation } from 'react-i18next';
import { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/6shared/lib/classNames/classNames';
import { ListBox } from '@/6shared/ui/redesigned/Popups';
import { getFeatureFlag, updateFeatureFlag } from '@/6shared/lib/features';
import { useAppDispatch } from '@/6shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from '@/5entities/User';
import { VStack } from '@/6shared/ui/redesigned/Stack';
import { Skeleton } from '@/6shared/ui/redesigned/Skeleton';
import { useForceUpdate } from '@/6shared/lib/render/forceUpdate';

interface UiDesignSwitcherProps {
    className?: string;
}

export const UiDesignSwitcher = memo((props: UiDesignSwitcherProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const authData = useSelector(getUserAuthData);
    const [isLoading, setIsLoading] = useState(false);
    const forceUpdate = useForceUpdate();

    const isAppRedesigned = getFeatureFlag('isAppRedesigned');

    const items = [
        {
            content: t('New'),
            value: 'new',
        },
        {
            content: t('Old'),
            value: 'old',
        },
    ];

    const onChange = async (value: string) => {
        if (authData) {
            setIsLoading(true);
            await dispatch(
                updateFeatureFlag({
                    userId: authData.id,
                    newFeatures: {
                        isAppRedesigned: value === 'new',
                    },
                }),
            ).unwrap();
            setIsLoading(false);
            forceUpdate();
        }
    };

    return (
        <VStack gap="2">
            {isLoading ? (
                <Skeleton width={100} height={40} />
            ) : (
                <ListBox
                    value={isAppRedesigned ? 'new' : 'old'}
                    items={items}
                    onChange={onChange}
                    label={t('UI Design')}
                    className={classNames('', {}, [className])}
                />
            )}
        </VStack>
    );
});
