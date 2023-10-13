import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '3widgets/Page/Page';

const AboutPage = () => {
    const { t } = useTranslation('about');

    return (
        <Page>
            <h1>{t('About')}</h1>
        </Page>
    );
};

export default AboutPage;
