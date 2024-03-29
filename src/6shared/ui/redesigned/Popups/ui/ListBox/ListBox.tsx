import React, { Fragment, ReactNode, useMemo } from 'react';
import { Listbox as HListbox } from '@headlessui/react';
import { classNames, Mods } from '@/6shared/lib/classNames/classNames';
import { DropdownDirection } from '@/6shared/types/ui';
import popupCls from '../../styles/popup.module.scss';
import cls from './ListBox.module.scss';
import { mapDirectionClass } from '../../styles/consts';
import { HStack, VStack } from '../../../../redesigned/Stack';
import { Button } from '../../../Button';
import ChevronRightIcon from '@/6shared/assets/icons/chevron-right.svg';

export interface ListBoxItem<T extends string> {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

type ListBoxSize = 's' | 'm' | 'l';

interface ListBoxProps<T extends string> {
    items?: ListBoxItem<T>[];
    className?: string;
    value?: T;
    defaultValue?: string;
    onChange: (value: T) => void;
    readonly?: boolean;
    label?: string;
    direction?: DropdownDirection;
    size?: ListBoxSize;
}

export function ListBox<T extends string>(props: ListBoxProps<T>) {
    const {
        items = [],
        className,
        value,
        defaultValue,
        onChange,
        readonly,
        label,
        direction = 'bottom right',
        size = 'm',
    } = props;

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    const optionsClasses = [mapDirectionClass[direction], popupCls.items];

    const selectedItem = useMemo(() => {
        return items?.find((item) => item.value === value);
    }, [items, value]);

    return (
        <HListbox
            as="div"
            className={classNames(cls.ListBox, mods, [className, popupCls.popup])}
            value={value}
            onChange={onChange}
            disabled={readonly}
        >
            <VStack gap="0">
                <HListbox.Label className={cls.label}>{label}</HListbox.Label>
                <HListbox.Button
                    as={Button}
                    className={cls.trigger}
                    afterIcon={<ChevronRightIcon className={cls.icon} />}
                    variant="filled"
                    size={size}
                >
                    {selectedItem?.content ?? defaultValue}
                </HListbox.Button>
            </VStack>
            <HListbox.Options className={classNames(cls.options, {}, optionsClasses)}>
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
                                <HStack>{item.content}</HStack>
                            </li>
                        )}
                    </HListbox.Option>
                ))}
            </HListbox.Options>
        </HListbox>
    );
}
