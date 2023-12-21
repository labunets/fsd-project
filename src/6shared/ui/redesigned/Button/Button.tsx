import { ButtonHTMLAttributes, FC, ForwardedRef, forwardRef, ReactElement, ReactNode } from 'react';
import { classNames, Mods } from '@/6shared/lib/classNames/classNames';
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

export const Button: FC<ButtonProps> = forwardRef(
    (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
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
                className={classNames(cls.Button, mods, [className, cls[variant], cls[size]])}
                disabled={disabled}
                {...otherProps}
                ref={ref}
            >
                {beforeIcon}
                {children}
                {afterIcon}
            </button>
        );
    },
);
