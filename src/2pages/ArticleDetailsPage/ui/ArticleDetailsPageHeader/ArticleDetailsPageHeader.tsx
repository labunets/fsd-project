import { classNames } from '6shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '6shared/config/routeConfig/routeConfig';
import { Button, ButtonTheme } from '6shared/ui/Button/Button';
import ChevronLeftIcon from '6shared/assets/icons/chevron-left.svg';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from '5entities/Article/model/selectors/articleDetails';
import { HStack } from '6shared/ui/Stack';
import { getCanEditArticle } from '../../model/selectors/article';
import cls from './ArticleDetailsPageHeader.module.scss';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const navigate = useNavigate();
    const article = useSelector(getArticleDetailsData);
    const canEdit = useSelector(getCanEditArticle);

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        navigate(`${RoutePath.article_details}${article?.id}/edit`);
    }, [article?.id, navigate]);

    return (
        <HStack gap="1" justify="between" className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
            <Button
                theme={ButtonTheme.TERTIARY}
                beforeIcon={<ChevronLeftIcon />}
                className={cls.backButton}
                onClick={onBackToList}
            >
                {t('Back')}
            </Button>
            {canEdit && (
                <Button
                    theme={ButtonTheme.PRIMARY}
                    className={cls.editButton}
                    onClick={onEditArticle}
                >
                    {t('Edit')}
                </Button>
            )}
        </HStack>
    );
});
