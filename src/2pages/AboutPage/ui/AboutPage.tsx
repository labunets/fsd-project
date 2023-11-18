import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/3widgets/Page';
import { Text, TextSize } from '@/6shared/ui/deprecated/Text';

const AboutPage = () => {
    const { t } = useTranslation('about');

    return (
        <Page data-testid="AboutPage">
            <Text title={t('About')} size={TextSize.L} />
        </Page>
    );
};

export default AboutPage;
