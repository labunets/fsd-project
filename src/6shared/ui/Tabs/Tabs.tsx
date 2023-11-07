import { memo, ReactNode, useCallback } from 'react';
import { classNames } from '@/6shared/lib/classNames/classNames';
import { HStack, VStack } from '../Stack';
import { Button, ButtonTheme } from '../Button/Button';
import cls from './Tabs.module.scss';
import { Text, TextSize } from '../Text';

export interface TabItem {
    value: string;
    content: ReactNode;
}

interface TabsProps {
    className?: string;
    tabs: TabItem[];
    value: string;
    onTabClick: (tab: TabItem) => void;
    label?: string;
}

export const Tabs = memo((props: TabsProps) => {
    const {
        className,
        tabs,
        value,
        onTabClick,
        label = '',
    } = props;

    const clickHandler = useCallback((tab: TabItem) => () => {
        onTabClick(tab);
    }, [onTabClick]);

    return (
        <VStack gap="0" className={classNames('', {}, [className])}>
            {label && (
                <Text text={label} size={TextSize.S} className={cls.label} />
            )}
            <HStack className={cls.buttons}>
                {tabs.map((tab) => (
                    <Button
                        key={tab.value}
                        onClick={clickHandler(tab)}
                        active={tab.value === value}
                        theme={ButtonTheme.OTLINED}
                    >
                        {tab.content}
                    </Button>
                ))}
            </HStack>
        </VStack>
    );
});
