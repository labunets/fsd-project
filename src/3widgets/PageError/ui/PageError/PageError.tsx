import { useTranslation } from 'react-i18next';
import { classNames } from '@/6shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from '@/6shared/ui/Button/Button';
import { useTheme } from '@/1app/providers/ThemeProvider';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <h1>{t('Something went wrong')}</h1>
            <Button
                onClick={reloadPage}
                size={ButtonSize.S}
                theme={ButtonTheme.BASE}
            >
                {t('Reload page')}
            </Button>

        </div>
    );
};
