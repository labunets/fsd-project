import { useTranslation } from 'react-i18next';
import { Page } from '@/3widgets/Page';
import { classNames } from '@/6shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();
    return (
        <Page
            className={classNames(cls.NotFoundPage, {}, [className])}
            data-testid="NotFoundPage"
        >
            {t('Page not found')}
        </Page>
    );
};
