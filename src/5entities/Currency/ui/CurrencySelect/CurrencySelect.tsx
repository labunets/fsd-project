import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ListBox } from '6shared/ui/ListBox/ListBox';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options = [
    { value: Currency.USD, content: Currency.USD },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.UAH, content: Currency.UAH },
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const {
        className,
        value,
        onChange,
        readonly,
    } = props;

    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <ListBox
            className={className}
            onChange={onChangeHandler}
            value={value}
            items={options}
            defaultValue={t('Select currency')}
            readonly={readonly}
            label={t('Currency')}
        />
    );
});
