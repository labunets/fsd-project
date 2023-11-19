import { ButtonHTMLAttributes, FC, ReactElement, ReactNode, memo } from 'react';
import { Mods, classNames } from '@/6shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export type ButtonVariant = 'clear' | 'outlined' | 'filled';

export type ButtonSize = 's' | 'm' | 'l';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonVariant;
    square?: boolean;
    size?: ButtonSize;
    beforeIcon?: ReactElement;
    afterIcon?: ReactElement;
    active?: boolean;
    disabled?: boolean;
    fullWidth?: boolean;
    children?: ReactNode;
}

export const Button: FC<ButtonProps> = memo((props: ButtonProps) => {
    const {
        className,
        children,
        variant = 'outlined',
        square,
        size = 'm',
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
                cls[variant],
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
