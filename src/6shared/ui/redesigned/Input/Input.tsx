import React, {
    ChangeEvent,
    InputHTMLAttributes,
    memo,
    ReactNode,
    useEffect,
    useRef,
    useState,
} from 'react';
import { Mods, classNames } from '@/6shared/lib/classNames/classNames';
import cls from './Input.module.scss';
import { HStack, VStack } from '../Stack';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly'
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    label?: string;
    placeholder?: string;
    autoFocus?: boolean;
    readonly?: boolean;
    beforeIcon?: ReactNode;
    afterIcon?: ReactNode;
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
        beforeIcon,
        afterIcon,
        ...otherProps
    } = props;
    const ref = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        if (autoFocus) {
            ref.current?.focus();
        }
    }, [autoFocus]);

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const mods: Mods = {
        [cls.readonly]: readonly,
        [cls.focused]: isFocused,
        [cls.withBeforeIcon]: Boolean(beforeIcon),
        [cls.withAfterIcon]: Boolean(afterIcon),
    };

    const inputId = `search-${Math.random().toString(36).substring(2, 9)}`;

    return (
        <VStack gap="0">
            <label className={cls.label} htmlFor={inputId}>
                {label}
            </label>
            <HStack
                gap="0"
                className={classNames(cls.InputWrapper, mods, [className])}
            >
                {beforeIcon && (
                    <div className={cls.beforeIcon}>{beforeIcon}</div>
                )}
                <input
                    id={inputId}
                    ref={ref}
                    type={type}
                    value={value}
                    name={label}
                    placeholder={placeholder}
                    onChange={onChangeHandler}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    readOnly={readonly}
                    {...otherProps}
                />
                {afterIcon && <div className={cls.afterIcon}>{afterIcon}</div>}
            </HStack>
        </VStack>
    );
});
