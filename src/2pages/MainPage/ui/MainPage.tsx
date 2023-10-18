import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from '6shared/ui/Input/Input';
import { Page } from '3widgets/Page/Page';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <Page>
            <h1>{t('Main')}</h1>
        </Page>
    );
};

export default MainPage;
