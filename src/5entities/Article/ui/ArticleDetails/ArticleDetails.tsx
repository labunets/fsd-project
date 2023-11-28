import { useTranslation } from 'react-i18next';
import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/6shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/6shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/6shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    Text as TextDeprecated,
    TextAlign,
    TextSize,
    TextTheme,
} from '@/6shared/ui/deprecated/Text';
import { Text } from '@/6shared/ui/redesigned/Text';
import { Skeleton as SkeletonDeprecated } from '@/6shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/6shared/ui/redesigned/Skeleton';
import EyeIcon from '@/6shared/assets/icons/outline-eye.svg';
import CalendarIcon from '@/6shared/assets/icons/outline-calendar.svg';
import { HStack, VStack } from '@/6shared/ui/redesigned/Stack';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import cls from './ArticleDetails.module.scss';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { ArticleBlock } from '../../model/types/article';
import { ArticleBlockType } from '../../model/consts/articleConsts';
import { AppImage } from '@/6shared/ui/redesigned/AppImage';
import { articleDetailsReducer } from '../../model/slices/articleDetailsSlice';
import { ToggleFeatures } from '@/6shared/lib/features';
import { renderArticleBlock } from './renderBlock';

interface ArticleDetailsProps {
    className?: string;
    id?: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

const Deprecated = () => {
    const article = useSelector(getArticleDetailsData);
    return (
        <>
            <AppImage
                src={article?.img}
                alt={article?.title}
                fallback={<SkeletonDeprecated width={300} height={200} />}
            />
            <TextDeprecated
                title={article?.title}
                text={article?.subtitle}
                size={TextSize.L}
                align={TextAlign.LEFT}
                theme={TextTheme.PRIMARY}
            />
            <VStack data-testid="ArticleDetails.Info" gap="0" className={cls.articleInfo}>
                <HStack>
                    <EyeIcon className={cls.icon} />
                    <TextDeprecated
                        title={String(article?.views)}
                        align={TextAlign.LEFT}
                        theme={TextTheme.PRIMARY}
                        size={TextSize.S}
                    />
                </HStack>
                <HStack>
                    <CalendarIcon className={cls.icon} />
                    <TextDeprecated
                        title={article?.createdAt}
                        align={TextAlign.LEFT}
                        theme={TextTheme.PRIMARY}
                        size={TextSize.S}
                    />
                </HStack>
            </VStack>
            <VStack gap="2">{article?.blocks.map(renderArticleBlock)}</VStack>
        </>
    );
};

const Redesigned = () => {
    const article = useSelector(getArticleDetailsData);

    return (
        <>
            <VStack gap="0">
                <Text title={article?.title} size="l" bold />
                <Text title={article?.subtitle} />
            </VStack>
            <AppImage
                fallback={<SkeletonRedesigned width="100%" height={420} border="16px" />}
                src={article?.img}
                className={cls.img}
            />
            {article?.blocks.map(renderArticleBlock)}
        </>
    );
};

const ArticleDetailsSkeleton = () => {
    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <VStack gap="2">
                    <VStack gap="0">
                        <SkeletonRedesigned className={cls.title} width={300} height={32} />
                        <SkeletonRedesigned className={cls.skeleton} width={600} height={24} />
                    </VStack>
                    <SkeletonRedesigned className={cls.skeleton} width="100%" height={420} />
                    <VStack gap="0">
                        <SkeletonRedesigned className={cls.title} width={300} height={32} />
                        <SkeletonRedesigned className={cls.skeleton} width="100%" height={200} />;
                    </VStack>
                </VStack>
            }
            off={
                <VStack
                    max
                    gap="2"
                    data-testid="ArticleDetails"
                    className={classNames(cls.ArticleDetails, {}, [])}
                >
                    <SkeletonDeprecated
                        className={cls.avatar}
                        width={200}
                        height={200}
                        border="50%"
                    />
                    <SkeletonDeprecated className={cls.title} width={300} height={32} />
                    <SkeletonDeprecated className={cls.skeleton} width={600} height={24} />
                    <SkeletonDeprecated className={cls.skeleton} width="100%" height={200} />
                    <SkeletonDeprecated className={cls.skeleton} width="100%" height={200} />
                </VStack>
            }
        />
    );
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { className, id } = props;
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const article = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
            case ArticleBlockType.TEXT:
                return <ArticleTextBlockComponent block={block} key={block.id} />;
            case ArticleBlockType.IMAGE:
                return <ArticleImageBlockComponent block={block} key={block.id} />;
            case ArticleBlockType.CODE:
                return <ArticleCodeBlockComponent block={block} key={block.id} />;
            default:
                return null;
        }
    }, []);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id));
        }
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = <ArticleDetailsSkeleton />;
    } else if (error) {
        content = <TextDeprecated align={TextAlign.CENTER} title={t('Error loading article')} />;
    } else {
        content = (
            <ToggleFeatures feature="isAppRedesigned" on={<Redesigned />} off={<Deprecated />} />
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeOnUnmount>
            <VStack
                max
                gap="2"
                data-testid="ArticleDetails"
                className={classNames(cls.ArticleDetails, {}, [className])}
            >
                {content}
            </VStack>
        </DynamicModuleLoader>
    );
});
