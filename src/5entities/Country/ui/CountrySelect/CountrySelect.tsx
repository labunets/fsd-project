import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ListBox as ListBoxDeprecated } from '@/6shared/ui/deprecated/Popups';
import { Country } from '../../model/types/country';
import { ToggleFeatures } from '@/6shared/lib/features';
import { ListBox } from '@/6shared/ui/redesigned/Popups';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    {
        value: Country.UA,
        content: Country.UA,
    },
    {
        value: Country.UK,
        content: Country.UK,
    },
    {
        value: Country.USA,
        content: Country.USA,
    },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
    const { className, value, onChange, readonly } = props;

    const { t } = useTranslation();

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Country);
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
                    defaultValue={t('Select country')}
                    readonly={readonly}
                    label={t('Country')}
                    direction="top right"
                />
            }
            off={
                <ListBoxDeprecated
                    className={className}
                    onChange={onChangeHandler}
                    value={value}
                    items={options}
                    defaultValue={t('Select country')}
                    readonly={readonly}
                    label={t('Country')}
                    direction="top right"
                />
            }
        />
    );
});
