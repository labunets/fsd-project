import { memo } from 'react';
import { classNames } from '@/6shared/lib/classNames/classNames';
import cls from './Image.module.scss';
import ImageImg from './image.png';

export enum ImageAlign {
    CENTER = 'center',
    LEFT = 'left',
    RIGHT = 'right',
}

interface ImageProps {
    className?: string;
    src?: string;
    alt?: string;
    width?: number | string;
    align?: ImageAlign;
}

/**
 * Deprecated, using new components from redesigned folder
 * @deprecated
 */
export const Image = memo((props: ImageProps) => {
    const {
        className,
        src,
        alt = '',
        width,
        align = ImageAlign.CENTER,
    } = props;

    const mods = {
        [cls[align]]: true,
    };

    return (
        <div className={classNames(cls.Image, mods, [className])}>
            <img width={width} src={src || ImageImg} alt={alt} />
        </div>
    );
});
