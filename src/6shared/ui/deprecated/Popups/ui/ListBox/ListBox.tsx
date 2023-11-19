import React, { Fragment, ReactNode } from 'react';
import { Listbox as HListbox } from '@headlessui/react';
import CheckIcon from '@/6shared/assets/icons/outline-check.svg';
import { classNames, Mods } from '@/6shared/lib/classNames/classNames';
import { DropdownDirection } from '@/6shared/types/ui';
import popupCls from '../../styles/popup.module.scss';
import cls from './ListBox.module.scss';
import { mapDirectionClass } from '../../styles/consts';
import { HStack } from '../../../../redesigned/Stack';

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
    direction?: DropdownDirection;
}

/**
 * Deprecated, using new components from redesigned folder
 * @deprecated
 */
export function ListBox(props: ListBoxProps) {
    const {
        items = [],
        className,
        value,
        defaultValue,
        onChange,
        readonly,
        label,
        direction = 'bottom right',
    } = props;

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    const optionsClasses = [mapDirectionClass[direction]];

    return (
        <HListbox
            as="div"
            className={classNames(cls.ListBox, mods, [
                className,
                popupCls.popup,
            ])}
            value={value}
            onChange={onChange}
            disabled={readonly}
        >
            <HListbox.Label className={cls.label}>{label}</HListbox.Label>
            <HListbox.Button className={cls.trigger}>
                {value ?? defaultValue}
            </HListbox.Button>
            <HListbox.Options
                className={classNames(cls.options, {}, optionsClasses)}
            >
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
