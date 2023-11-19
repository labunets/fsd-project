import { memo } from 'react';
import { classNames, Mods } from '@/6shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import AvatarImg from './avatar.png';
import { AppImage } from '../../redesigned/AppImage';
import { Skeleton } from '../Skeleton';

export type AvatarSize = 's' | 'm' | 'l';

interface AvatarProps {
    className?: string;
    src?: string;
    alt?: string;
    size?: AvatarSize;
}

export const Avatar = memo((props: AvatarProps) => {
    const { className, src, alt = '', size = 'm' } = props;

    const mods: Mods = {
        [cls[size]]: true,
    };

    return (
        <div className={classNames(cls.Avatar, mods, [className])}>
            <AppImage
                src={src || AvatarImg}
                alt={alt}
                fallback={<Skeleton border="100%" />}
            />
        </div>
    );
});
