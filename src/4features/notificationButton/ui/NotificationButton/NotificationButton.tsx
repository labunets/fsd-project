import React, { memo } from 'react';
import { Button, ButtonTheme } from '6shared/ui/Button/Button';
import BellIcon from '6shared/assets/icons/outline-bell.svg';
import { NotificationList } from '5entities/Notification';
import { Popover } from '6shared/ui/Popups';
import { classNames } from '6shared/lib/classNames/classNames';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;

    return (
        <Popover
            className={classNames('', {}, [className])}
            trigger={(
                <Button
                    theme={ButtonTheme.TERTIARY}
                    beforeIcon={<BellIcon />}
                />
            )}
        >
            <NotificationList className={cls.notifications} />
        </Popover>
    );
});
