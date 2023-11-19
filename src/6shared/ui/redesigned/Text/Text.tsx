import { memo } from 'react';
import { classNames } from '@/6shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export type TextVariant = 'primary' | 'error' | 'success' | 'warning' | 'info';

export type TextAlign = 'left' | 'center' | 'right';

export type TextSize = 's' | 'm' | 'l';

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    variant?: TextVariant;
    align?: TextAlign;
    size?: TextSize;

    'data-testid'?: string;
}

type HeaderTagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const mapSizeToClass: Record<TextSize, string> = {
    s: 'size_s',
    m: 'size_m',
    l: 'size_l',
};

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    s: 'h3',
    m: 'h2',
    l: 'h1',
};

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        variant = 'primary',
        align = 'left',
        size = 'm',
        'data-testid': dataTestId = 'Text',
    } = props;

    const HeaderTag = mapSizeToHeaderTag[size];
    const sizeClass = mapSizeToClass[size];

    const additionalClasses = [className, cls[variant], cls[align], sizeClass];

    return (
        <div className={classNames('', {}, additionalClasses)}>
            {title && (
                <HeaderTag
                    className={cls.title}
                    data-testid={`${dataTestId}.Header`}
                >
                    {title}
                </HeaderTag>
            )}
            {text && (
                <p className={cls.text} data-testid={`${dataTestId}.Paragraph`}>
                    {text}
                </p>
            )}
        </div>
    );
});
