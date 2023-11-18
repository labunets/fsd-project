import { ButtonHTMLAttributes, FC, ReactElement, ReactNode, memo } from 'react';
import { Mods, classNames } from '@/6shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
    BASE = 'base',
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    TERTIARY = 'tertiary',
    TERTIARY_INVERTED = 'tertiary-inverted',
    OTLINED = 'outlined',
}

export enum ButtonSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    beforeIcon?: ReactElement;
    afterIcon?: ReactElement;
    active?: boolean;
    disabled?: boolean;
    fullWidth?: boolean;
    children?: ReactNode;
}

/**
 * Deprecated, using new components from redesigned folder
 * @deprecated
 */
export const Button: FC<ButtonProps> = memo((props: ButtonProps) => {
    const {
        className,
        children,
        theme = ButtonTheme.BASE,
        square,
        size = ButtonSize.M,
        beforeIcon,
        afterIcon,
        active,
        disabled,
        fullWidth,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.square]: square,
        [cls.active]: active,
        [cls.disabled]: disabled,
        [cls.fullWidth]: fullWidth,
    };

    return (
        <button
            className={classNames(cls.Button, mods, [
                className,
                cls[theme],
                cls[size],
            ])}
            disabled={disabled}
            {...otherProps}
        >
            {beforeIcon}
            {children}
            {afterIcon}
        </button>
    );
});
