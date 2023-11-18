import { ChangeEvent, useMemo } from 'react';
import { classNames, Mods } from '@/6shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption<T extends string> {
    value: T;
    content: string;
}

interface SelectProps<T extends string> {
    className?: string;
    label?: string;
    options?: SelectOption<T>[];
    value?: T;
    onChange?: (value: T) => void;
    readonly?: boolean;
}

/**
 * Deprecated, using new components from redesigned folder
 * @deprecated
 */
export const Select = <T extends string>(props: SelectProps<T>) => {
    const { className, label, options, value, onChange, readonly } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(e.target.value as T);
        }
    };

    const optionsList = useMemo(
        () =>
            options?.map((opt) => (
                <option value={opt.value} key={opt.value}>
                    {opt.content}
                </option>
            )),
        [options],
    );

    const mods: Mods = {};

    const selectId = `select-${Math.random().toString(36).substring(2, 9)}`;

    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && (
                <label className={cls.label} htmlFor={selectId}>
                    {label}
                </label>
            )}
            <select
                id={selectId}
                name={label}
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
                disabled={readonly}
            >
                {optionsList}
            </select>
        </div>
    );
};
