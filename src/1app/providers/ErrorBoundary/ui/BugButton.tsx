import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
    Button,
    ButtonSize,
    ButtonTheme,
} from '@/6shared/ui/deprecated/Button';

export const BugButton = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation('main');

    const toggleError = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button
            theme={ButtonTheme.BASE}
            onClick={toggleError}
            size={ButtonSize.S}
        >
            {t('Throw error')}
        </Button>
    );
};
