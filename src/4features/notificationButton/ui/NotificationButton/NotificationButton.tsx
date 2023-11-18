import React, { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { NotificationList } from '@/5entities/Notification';
import { Button, ButtonTheme } from '@/6shared/ui/deprecated/Button';
import BellIcon from '@/6shared/assets/icons/outline-bell.svg';
import { Popover } from '@/6shared/ui/deprecated/Popups';
import { classNames } from '@/6shared/lib/classNames/classNames';
import { Drawer } from '@/6shared/ui/deprecated/Drawer';
import cls from './NotificationButton.module.scss';

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
        <Button
            theme={ButtonTheme.TERTIARY}
            beforeIcon={<BellIcon />}
            onClick={onOpenDrawer}
        />
    );

    return (
        <div>
            <BrowserView>
                <Popover
                    className={classNames('', {}, [className])}
                    trigger={trigger}
                >
                    <NotificationList className={cls.notifications} />
                </Popover>
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
