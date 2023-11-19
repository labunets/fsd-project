import { Popover as HPopover } from '@headlessui/react';
import { ReactNode } from 'react';
import { classNames } from '@/6shared/lib/classNames/classNames';
import { DropdownDirection } from '@/6shared/types/ui';
import popupCls from '../../styles/popup.module.scss';
import cls from './Popover.module.scss';
import { mapDirectionClass } from '../../styles/consts';

interface PopoverProps {
    className?: string;
    direction?: DropdownDirection;
    trigger: ReactNode;
    children?: ReactNode;
}

export function Popover(props: PopoverProps) {
    const { className, direction = 'bottom left', trigger, children } = props;

    const menuClasses = [mapDirectionClass[direction], popupCls.items];

    return (
        <HPopover className={classNames('', {}, [className, popupCls.popup])}>
            <HPopover.Button as="div" className={popupCls.trigger}>
                {trigger}
            </HPopover.Button>

            <HPopover.Panel className={classNames(cls.panel, {}, menuClasses)}>
                {children}
            </HPopover.Panel>
        </HPopover>
    );
}
