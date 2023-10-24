import { useTranslation } from 'react-i18next';
import { Page } from '3widgets/Page/Page';
import { Text, TextTheme } from '6shared/ui/Text/Text';

const ForbiddenPage = () => {
    const { t } = useTranslation();

    return (
        <Page>
            <Text
                theme={TextTheme.ERROR}
                title={t('You are not allowed to access this page')}
            />
        </Page>
    );
};

export default ForbiddenPage;