import { memo } from 'react';
import { classNames } from '@/6shared/lib/classNames/classNames';
import { ArticleView } from '../../../model/consts/consts';
import cls from './ArticleListItemRedesigned.module.scss';
import { Card } from '@/6shared/ui/redesigned/Card';
import { Skeleton } from '@/6shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/6shared/ui/redesigned/Stack';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeleton = memo(
    (props: ArticleListItemSkeletonProps) => {
        const { className, view } = props;

        if (view === ArticleView.LIST) {
            return (
                <Card
                    max
                    data-testid="ArticleListItem"
                    className={classNames('', {}, [className, cls[view]])}
                >
                    <VStack gap="1">
                        <HStack gap="1">
                            <Skeleton height={32} width={32} border="50%" />
                            <Skeleton height={16} width={48} />
                            <Skeleton height={16} width={64} />
                        </HStack>
                        <VStack gap="1">
                            <Skeleton height={32} />
                            <Skeleton height={26} />
                        </VStack>
                        <Skeleton height={420} />
                        <Skeleton height={58} />
                        <HStack gap="1" max justify="between">
                            <Skeleton height={40} width={138} />
                            <HStack gap="1" max={false}>
                                <Skeleton height={24} width={24} border="50%" />
                                <Skeleton height={16} width={28} />
                                <Skeleton height={16} width={65} />
                            </HStack>
                        </HStack>
                    </VStack>
                </Card>
            );
        }

        return (
            <div className={classNames('', {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <VStack>
                        <Skeleton height={180} className={cls.img} />
                        <VStack gap="2" className={cls.detailsWrapper}>
                            <VStack gap="1">
                                <Skeleton height={32} />
                                <Skeleton height={16} />
                            </VStack>
                            <HStack justify="end">
                                <Skeleton height={16} width={16} border="50%" />
                                <Skeleton height={16} width={28} />
                                <Skeleton height={16} width={65} />
                            </HStack>
                        </VStack>
                    </VStack>
                </Card>
            </div>
        );
    },
);
