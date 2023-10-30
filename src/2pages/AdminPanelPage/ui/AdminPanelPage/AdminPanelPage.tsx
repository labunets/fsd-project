import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/3widgets/Page';
import { Text, TextSize } from '@/6shared/ui/Text';

const AdminPanelPage = () => {
    const { t } = useTranslation('admin');

    return (
        <Page>
            <Text title={t('Admin Panel')} size={TextSize.L} />
        </Page>
    );
};

export default AdminPanelPage;
