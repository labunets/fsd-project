import React, { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { NotificationList } from '@/5entities/Notification';
import {
    Button as DeprecatedButton,
    ButtonTheme,
} from '@/6shared/ui/deprecated/Button';
import BellIcon from '@/6shared/assets/icons/outline-bell.svg';
import { Popover as DeprecatedPopover } from '@/6shared/ui/deprecated/Popups';
import { classNames } from '@/6shared/lib/classNames/classNames';
import { Drawer } from '@/6shared/ui/redesigned/Drawer';
import cls from './NotificationButton.module.scss';
import { ToggleFeatures } from '@/6shared/lib/features';
import { Button } from '@/6shared/ui/redesigned/Button';
import { Popover } from '@/6shared/ui/redesigned/Popups';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;

    const [isOpen, setIsOpen] = useState(false);

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, []);

    const trigger = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Button
                    variant="clear"
                    beforeIcon={<BellIcon className={cls.iconRedesigned} />}
                    onClick={onOpenDrawer}
                />
            }
            off={
                <DeprecatedButton
                    theme={ButtonTheme.TERTIARY}
                    beforeIcon={<BellIcon />}
                    onClick={onOpenDrawer}
                />
            }
        />
    );

    return (
        <div>
            <BrowserView>
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={
                        <Popover
                            className={classNames('', {}, [className])}
                            trigger={trigger}
                        >
                            <NotificationList className={cls.notifications} />
                        </Popover>
                    }
                    off={
                        <DeprecatedPopover
                            className={classNames('', {}, [className])}
                            trigger={trigger}
                        >
                            <NotificationList className={cls.notifications} />
                        </DeprecatedPopover>
                    }
                />
            </BrowserView>
            <MobileView>
                {trigger}
                <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                    <NotificationList />
                </Drawer>
            </MobileView>
        </div>
    );
});
