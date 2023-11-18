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
    Text,
    TextAlign,
    TextSize,
    TextTheme,
} from '@/6shared/ui/deprecated/Text';
import { Skeleton } from '@/6shared/ui/deprecated/Skeleton';
import EyeIcon from '@/6shared/assets/icons/outline-eye.svg';
import CalendarIcon from '@/6shared/assets/icons/outline-calendar.svg';
import { HStack, VStack } from '@/6shared/ui/deprecated/Stack';
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
import { ArticleBlockType } from '../../model/consts/consts';
import { AppImage } from '@/6shared/ui/deprecated/AppImage';
import { articleDetailsReducer } from '../../model/slices/articleDetailsSlice';

interface ArticleDetailsProps {
    className?: string;
    id?: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
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
                return (
                    <ArticleTextBlockComponent block={block} key={block.id} />
                );
            case ArticleBlockType.IMAGE:
                return (
                    <ArticleImageBlockComponent block={block} key={block.id} />
                );
            case ArticleBlockType.CODE:
                return (
                    <ArticleCodeBlockComponent block={block} key={block.id} />
                );
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
        content = (
            <VStack>
                <Skeleton className={cls.image} width={200} height={200} />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
            </VStack>
        );
    } else if (error) {
        content = (
            <Text
                align={TextAlign.CENTER}
                title={t('Error occurred while loading article')}
                theme={TextTheme.ERROR}
            />
        );
    } else {
        content = (
            <VStack gap="2">
                <AppImage
                    src={article?.img}
                    alt={article?.title}
                    fallback={<Skeleton width={300} height={200} />}
                />
                <Text
                    title={article?.title}
                    text={article?.subtitle}
                    size={TextSize.L}
                    align={TextAlign.LEFT}
                    theme={TextTheme.PRIMARY}
                />
                <VStack
                    data-testid="ArticleDetails.Info"
                    gap="0"
                    className={cls.articleInfo}
                >
                    <HStack>
                        <EyeIcon className={cls.icon} />
                        <Text
                            title={String(article?.views)}
                            align={TextAlign.LEFT}
                            theme={TextTheme.PRIMARY}
                            size={TextSize.S}
                        />
                    </HStack>
                    <HStack>
                        <CalendarIcon className={cls.icon} />
                        <Text
                            title={article?.createdAt}
                            align={TextAlign.LEFT}
                            theme={TextTheme.PRIMARY}
                            size={TextSize.S}
                        />
                    </HStack>
                </VStack>
                <VStack gap="2">{article?.blocks.map(renderBlock)}</VStack>
            </VStack>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div
                data-testid="ArticleDetails"
                className={classNames(cls.ArticleDetails, {}, [className])}
            >
                {content}
            </div>
        </DynamicModuleLoader>
    );
});
