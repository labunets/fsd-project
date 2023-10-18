import React, { Fragment, ReactNode } from 'react';
import { Listbox as HListbox } from '@headlessui/react';
import CheckIcon from '6shared/assets/icons/outline-check.svg';
import { classNames, Mods } from '6shared/lib/classNames/classNames';
import { HStack } from '../Stack';
import { Button, ButtonTheme } from '../Button/Button';
import cls from './ListBox.module.scss';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps {
    items?: ListBoxItem[];
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange: (value: string) => void;
    readonly?: boolean;
    label?: string;
}

export function ListBox(props: ListBoxProps) {
    const {
        items = [],
        className,
        value,
        defaultValue,
        onChange,
        readonly,
        label,
    } = props;

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    return (
        <HListbox
            as="div"
            className={classNames(cls.ListBox, mods, [className])}
            value={value}
            onChange={onChange}
            disabled={readonly}
        >
            <HListbox.Label className={cls.label}>{label}</HListbox.Label>
            <HListbox.Button className={cls.trigger}>
                <Button theme={ButtonTheme.SECONDARY} disabled={readonly}>
                    {value ?? defaultValue}
                </Button>
            </HListbox.Button>
            <HListbox.Options className={cls.options}>
                {items?.map((item) => (
                    <HListbox.Option
                        key={item.value}
                        value={item.value}
                        disabled={item.disabled}
                        as={Fragment}
                    >
                        {({ active, selected }) => (
                            <li
                                className={classNames(cls.item, {
                                    [cls.active]: active,
                                    [cls.selected]: selected,
                                    [cls.disabled]: item.disabled,
                                })}
                            >
                                <HStack>
                                    {selected && <CheckIcon />}
                                    {item.content}
                                </HStack>
                            </li>
                        )}
                    </HListbox.Option>
                ))}
            </HListbox.Options>
        </HListbox>
    );
}
