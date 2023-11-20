import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ListBox as DeprecatedListBox } from '@/6shared/ui/deprecated/Popups';
import { Currency } from '../../model/types/currency';
import { ToggleFeatures } from '@/6shared/lib/features';
import { ListBox } from '@/6shared/ui/redesigned/Popups';

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
    const { className, value, onChange, readonly } = props;

    const { t } = useTranslation();

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Currency);
        },
        [onChange],
    );

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <ListBox
                    className={className}
                    onChange={onChangeHandler}
                    value={value}
                    items={options}
                    defaultValue={t('Select currency')}
                    readonly={readonly}
                    label={t('Currency')}
                    direction="top right"
                />
            }
            off={
                <DeprecatedListBox
                    className={className}
                    onChange={onChangeHandler}
                    value={value}
                    items={options}
                    defaultValue={t('Select currency')}
                    readonly={readonly}
                    label={t('Currency')}
                    direction="top right"
                />
            }
        />
    );
});
