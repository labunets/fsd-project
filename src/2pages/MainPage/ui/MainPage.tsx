import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from '6shared/ui/Input/Input';

const MainPage = () => {
    const { t } = useTranslation('main');
    const [value, setValue] = useState('');

    const onChange = (value: string) => {
        setValue(value);
    };

    return (
        <div>
            <h1>{t('Main')}</h1>
            <Input
                label={t('Name')}
                placeholder={t('John')}
                onChange={onChange}
                value={value}
            />
            {value}
        </div>
    );
};

export default MainPage;
