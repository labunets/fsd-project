import { classNames } from '6shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const { t } = useTranslation('article');

    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            {t('Articles page')}
        </div>
    );
};

export default memo(ArticlesPage);
