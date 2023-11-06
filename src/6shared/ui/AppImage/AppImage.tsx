import {
    ImgHTMLAttributes, memo, ReactElement, useLayoutEffect, useState,
} from 'react';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement>{
    className?: string;
    fallback?: ReactElement;
    errorFallback?: ReactElement;
}

export const AppImage = memo((props: AppImageProps) => {
    const {
        className,
        src,
        alt = 'image',
        fallback,
        errorFallback,
        ...otherProps
    } = props;
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useLayoutEffect(() => {
        const image = new Image();
        image.src = src ?? '';
        image.onload = () => {
            setIsLoading(false);
        };
        image.onerror = () => {
            setHasError(true);
        };
    }, [src]);

    if (isLoading && fallback) {
        return {
            ...fallback,
            props: {
                ...fallback.props,
                className: className ?? fallback.props.className,
            },
        };
    }

    if (hasError && errorFallback) {
        return errorFallback;
    }

    return (
        <img className={className} src={src} alt={alt} {...otherProps} />
    );
});
