import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
// eslint-disable-next-line rel-path-check/layer-imports
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line rel-path-check/layer-imports
import { ArticleAdditionalInfo } from '@/3widgets/ArticleAdditionalInfo';
import { Card } from '@/6shared/ui/redesigned/Card';
import { getArticleDetailsData } from '../..';
import cls from './AdditionalInfoContainer.module.scss';
import { getRouteArticleEdit } from '@/6shared/const/router';

export const AdditionalInfoContainer = memo(() => {
    const article = useSelector(getArticleDetailsData);
    const navigate = useNavigate();

    const onEditArticle = useCallback(() => {
        if (article) {
            navigate(getRouteArticleEdit(article?.id));
        }
    }, [article, navigate]);

    if (!article) {
        return null;
    }

    return (
        <Card className={cls.card} max>
            <ArticleAdditionalInfo
                onEdit={onEditArticle}
                author={article.user}
                createdAt={article.createdAt}
                views={article.views}
            />
        </Card>
    );
});
