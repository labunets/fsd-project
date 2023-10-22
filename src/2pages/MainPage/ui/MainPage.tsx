import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '3widgets/Page/Page';
import { Text, TextSize } from '6shared/ui/Text/Text';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <Page>
            <Text title={t('Main')} size={TextSize.L} />
        </Page>
    );
};

export default MainPage;
