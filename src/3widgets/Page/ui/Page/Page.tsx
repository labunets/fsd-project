import { MutableRefObject, ReactNode, UIEvent, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUIScrollByPath, uiActions } from '@/4features/UI';
import { classNames } from '@/6shared/lib/classNames/classNames';
import { useInfiniteScroll } from '@/6shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from '@/6shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/6shared/lib/hooks/useInitialEffect/useInitialEffect';
import { StateSchema } from '@/1app/providers/StoreProvider';
import { useThrottle } from '@/6shared/lib/hooks/useThrottle/useThrottle';
import cls from './Page.module.scss';
import { TestProps } from '@/6shared/types/tests';
import { toggleFeatures } from '@/6shared/lib/features';

interface PageProps extends TestProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const PAGE_ID = 'PAGE_ID';

export const Page = (props: PageProps) => {
    const { className, children, onScrollEnd, ...otherProps } = props;
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const scrollPosition = useSelector((state: StateSchema) =>
        getUIScrollByPath(state, pathname),
    );

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(
            uiActions.setScrollPosition({
                position: e.currentTarget.scrollTop,
                path: pathname,
            }),
        );
    }, 500);

    const currentClass = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => cls.PageRedesigned,
        off: () => cls.Page,
    });

    return (
        <main
            ref={wrapperRef}
            className={classNames(currentClass, {}, [className])}
            onScroll={onScroll}
            id={PAGE_ID}
            data-testid={
                otherProps['data-testid'] != null
                    ? otherProps['data-testid']
                    : 'Page'
            }
        >
            {children}
            {onScrollEnd ? (
                <div ref={triggerRef} className={cls.trigger} />
            ) : null}
        </main>
    );
};
