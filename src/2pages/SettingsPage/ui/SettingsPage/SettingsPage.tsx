import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text } from '@/6shared/ui/redesigned/Text';
import { Page } from '@/3widgets/Page';
import { UiDesignSwitcher } from '@/4features/uiDesignSwitcher';
import { VStack } from '@/6shared/ui/redesigned/Stack';

const SettingsPage = memo((props) => {
    const { t } = useTranslation();

    return (
        <Page>
            <VStack gap="2">
                <Text title={t('Settings')} />
                <UiDesignSwitcher />
            </VStack>
        </Page>
    );
});

export default SettingsPage;
