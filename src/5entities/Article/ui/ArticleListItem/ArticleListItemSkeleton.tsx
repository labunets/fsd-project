import { classNames } from '6shared/lib/classNames/classNames';
import { memo } from 'react';
import { Card } from '6shared/ui/Card/Card';
import { Skeleton } from '6shared/ui/Skeleton/Skeleton';
import { ArticleView } from '../../model/consts/consts';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
    const {
        className,
        view,
    } = props;

    if (view === ArticleView.LIST) {
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <Skeleton className={cls.imageWrapper} />
                    <div className={cls.detailsWrapper}>
                        <div className={cls.infoWrapper}>
                            <Skeleton width={32} height={32} border="50%" />
                            <Skeleton width={70} height={16} className={cls.username} />
                        </div>
                        <Skeleton width={300} height={32} className={cls.title} />
                        <div className={cls.infoWrapper}>
                            <div className={cls.viewsWrapper}>
                                <Skeleton width={16} height={16} className={cls.icon} />
                                <Skeleton width={30} height={16} className={cls.views} />
                            </div>
                            <Skeleton width={70} height={16} className={cls.types} />
                            <Skeleton width={60} height={16} className={cls.date} />
                        </div>
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleListItemSkeleton, {}, [className, cls[view]])}>
            <Card className={cls.card}>
                <Skeleton className={cls.imageWrapper} />
                <Skeleton width={200} height={16} className={cls.title} />
                <div className={cls.infoWrapper}>
                    <Skeleton width={70} height={16} className={cls.types} />
                    <Skeleton width={60} height={16} className={cls.date} />
                    <div className={cls.viewsWrapper}>
                        <Skeleton width={16} height={16} className={cls.icon} />
                        <Skeleton width={30} height={16} className={cls.views} />
                    </div>
                </div>
            </Card>
        </div>
    );
});
