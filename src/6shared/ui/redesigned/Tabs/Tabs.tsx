import { memo, ReactNode, useCallback } from 'react';
import { classNames } from '@/6shared/lib/classNames/classNames';
import { VStack } from '../../redesigned/Stack';
import { Button } from '../Button/Button';
import cls from './Tabs.module.scss';
import { Text } from '../Text';
import { Flex, FlexDirection } from '../Stack/Flex/Flex';

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
    direction?: FlexDirection;
}

export const Tabs = memo((props: TabsProps) => {
    const {
        className,
        tabs,
        value,
        onTabClick,
        label = '',
        direction = 'row',
    } = props;

    const clickHandler = useCallback(
        (tab: TabItem) => () => {
            onTabClick(tab);
        },
        [onTabClick],
    );

    return (
        <VStack gap="0" className={classNames('', {}, [className])}>
            {label && <Text text={label} size="s" bold />}
            <Flex
                direction={direction}
                className={cls.buttons}
                max={false}
                align="start"
            >
                {tabs.map((tab) => (
                    <Button
                        key={tab.value}
                        onClick={clickHandler(tab)}
                        active={tab.value === value}
                        variant={tab.value === value ? 'filled' : 'outlined'}
                        size="s"
                        className={tab.value === value ? cls.active : ''}
                    >
                        {tab.content}
                    </Button>
                ))}
            </Flex>
        </VStack>
    );
});
