import React, {
    ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef,
} from 'react';
import { Mods, classNames } from '@/6shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    label?: string;
    placeholder?: string;
    autoFocus?: boolean;
    readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        label,
        placeholder,
        autoFocus,
        readonly,
        ...otherProps
    } = props;
    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autoFocus) {
            ref.current?.focus();
        }
    }, [autoFocus]);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    const inputId = `search-${Math.random().toString(36).substring(2, 9)}`;

    return (
        <div className={classNames(cls.InputWrapper, mods, [className])}>
            <label className={cls.label} htmlFor={inputId}>
                {label}
            </label>
            <input
                id={inputId}
                ref={ref}
                type={type}
                value={value}
                name={label}
                placeholder={placeholder}
                onChange={onChangeHandler}
                readOnly={readonly}
                {...otherProps}
            />
        </div>
    );
});
