import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Theme } from 'app/providers/ThemeProvider';

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
            theme={ThemeButton.OUTLINE}
            onClick={toggleError}
        >
            {t('Throw error')}
        </Button>
    );
};
