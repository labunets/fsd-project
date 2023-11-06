import { useTranslation } from 'react-i18next';
import { Page } from '@/3widgets/Page';
import { Text, TextTheme } from '@/6shared/ui/Text';

const ForbiddenPage = () => {
    const { t } = useTranslation();

    return (
        <Page data-testid="ForbiddenPage">
            <Text
                theme={TextTheme.ERROR}
                title={t('You are not allowed to access this page')}
            />
        </Page>
    );
};

export default ForbiddenPage;
