import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '3widgets/Page/Page';
import { Dropdown } from '6shared/ui/Dropdown/Dropdown';
import { Button, ButtonTheme } from '6shared/ui/Button/Button';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <Page>
            <h1>{t('Main')}</h1>
        </Page>
    );
};

export default MainPage;
