import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/3widgets/Page';
import { Text, TextSize } from '@/6shared/ui/Text';
import { Counter } from '@/5entities/Counter';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <Page>
            <Counter />
            <Text title={t('Main')} size={TextSize.L} />
        </Page>
    );
};

export default MainPage;
