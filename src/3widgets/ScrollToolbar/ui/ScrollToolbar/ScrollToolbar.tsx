import { memo } from 'react';
import { classNames } from '@/6shared/lib/classNames/classNames';
import cls from './ScrollToolbar.module.scss';
import { VStack } from '@/6shared/ui/redesigned/Stack';
import { ScrollToTopButton } from '@/4features/scrollToTopButton';

interface ScrollToolbarProps {
    className?: string;
}

export const ScrollToolbar = memo((props: ScrollToolbarProps) => {
    const { className } = props;

    return (
        <VStack
            justify="center"
            align="center"
            max
            className={classNames(cls.ScrollToolbar, {}, [className])}
        >
            <ScrollToTopButton />
        </VStack>
    );
});
