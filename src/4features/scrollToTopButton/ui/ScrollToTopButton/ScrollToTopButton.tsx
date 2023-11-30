import { memo } from 'react';
import { classNames } from '@/6shared/lib/classNames/classNames';
import cls from './ScrollToTopButton.module.scss';
import ArrowIcon from '@/6shared/assets/icons/chevron-left.svg';
import { Button } from '@/6shared/ui/redesigned/Button';

interface ScrollToTopButtonProps {
    className?: string;
}

export const ScrollToTopButton = memo((props: ScrollToTopButtonProps) => {
    const { className } = props;

    const onCLick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <Button
            onClick={onCLick}
            variant="clear"
            beforeIcon={<ArrowIcon />}
            className={classNames(cls.ScrollToTopButton, {}, [className])}
        />
    );
});
