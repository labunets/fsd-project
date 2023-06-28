import { classNames } from '6shared/lib/classNames/classNames';
import React, {
    ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef,
} from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    label?: string;
    placeholder?: string;
    autoFocus?: boolean;
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

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            <label className={cls.label} htmlFor={label}>
                {label}
            </label>
            <input
                ref={ref}
                type={type}
                value={value}
                name={label}
                placeholder={placeholder}
                onChange={onChangeHandler}
                {...otherProps}
            />
        </div>
    );
});
