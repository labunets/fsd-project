import { classNames } from '6shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from '6shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { memo, useCallback, useEffect } from 'react';
import { useAppDispatch } from '6shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
    Text, TextAlign, TextSize, TextTheme,
} from '6shared/ui/Text/Text';
import { Skeleton } from '6shared/ui/Skeleton/Skeleton';
import { Image, ImageAlign } from '6shared/ui/Image/Image';
import EyeIcon from '6shared/assets/icons/outline-eye.svg';
import CalendarIcon from '6shared/assets/icons/outline-calendar.svg';
import { HStack, VStack } from '6shared/ui/Stack';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import cls from './ArticleDetails.module.scss';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';

interface ArticleDetailsProps {
    className?: string;
    id: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const {
        className,
        id,
    } = props;
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const article = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.TEXT:
            return (
                <ArticleTextBlockComponent
                    block={block}
                    key={block.id}
                />
            );
        case ArticleBlockType.IMAGE:
            return (
                <ArticleImageBlockComponent
                    block={block}
                    key={block.id}
                />
            );
        case ArticleBlockType.CODE:
            return (
                <ArticleCodeBlockComponent
                    block={block}
                    key={block.id}
                />
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
                <Image
                    src={article?.img}
                    alt={article?.title}
                    align={ImageAlign.LEFT}
                />
                <Text
                    title={article?.title}
                    text={article?.subtitle}
                    size={TextSize.L}
                    align={TextAlign.LEFT}
                    theme={TextTheme.PRIMARY}
                />
                <VStack gap="0">
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
                <VStack gap="2">
                    {article?.blocks.map(renderBlock)}
                </VStack>
            </VStack>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
});
