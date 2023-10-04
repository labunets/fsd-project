import { classNames } from '6shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './ArticleDetailsPage.module.scss';

interface ArticlesDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = ({ className }: ArticlesDetailsPageProps) => {
    const { t } = useTranslation('article');

    return (
        <div className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
            {t('Article details')}
        </div>
    );
};

export default memo(ArticleDetailsPage);
