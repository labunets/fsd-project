import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '3widgets/Page/Page';
import { Text, TextSize } from '6shared/ui/Text/Text';

const AboutPage = () => {
    const { t } = useTranslation('about');

    return (
        <Page>
            <Text title={t('About')} size={TextSize.L} />
        </Page>
    );
};

export default AboutPage;
