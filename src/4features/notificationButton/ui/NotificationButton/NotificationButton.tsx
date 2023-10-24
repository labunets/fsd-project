import React, { memo, useCallback, useState } from 'react';
import { Button, ButtonTheme } from '6shared/ui/Button/Button';
import BellIcon from '6shared/assets/icons/outline-bell.svg';
import { NotificationList } from '5entities/Notification';
import { Popover } from '6shared/ui/Popups';
import { classNames } from '6shared/lib/classNames/classNames';
import { Drawer } from '6shared/ui/Drawer/Drawer';
import { BrowserView, MobileView } from 'react-device-detect';
import { AnimationProvider } from '6shared/lib/components/AnimationProvider';
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
                <AnimationProvider>
                    <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                        <NotificationList />
                    </Drawer>
                </AnimationProvider>
            </MobileView>
        </div>
    );
});
