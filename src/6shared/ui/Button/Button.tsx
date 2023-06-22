import { classNames } from '6shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC, ReactElement } from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
    BASE = 'base',
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    TERTIARY = 'tertiary',
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
}

export const Button: FC<ButtonProps> = (props) => {
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
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls.square]: square,
        [cls.active]: active,
        [cls.disabled]: disabled,
    };

    return (
        <button
            className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])}
            {...otherProps}
        >
            {beforeIcon}
            {children}
            {afterIcon}
        </button>
    );
};