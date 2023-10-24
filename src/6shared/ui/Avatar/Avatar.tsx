import { memo } from 'react';
import { Mods, classNames } from '@/6shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import AvatarImg from './avatar.png';

export enum AvatarSize {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
}

interface AvatarProps {
    className?: string;
    src?: string;
    alt?: string;
    size?: AvatarSize;
}

export const Avatar = memo((props: AvatarProps) => {
    const {
        className,
        src,
        alt = '',
        size = AvatarSize.MEDIUM,
    } = props;

    const mods: Mods = {
        [cls[size]]: true,
    };

    return (
        <div className={classNames(cls.Avatar, mods, [className])}>
            <img
                src={src || AvatarImg}
                alt={alt}
            />
        </div>
    );
});
