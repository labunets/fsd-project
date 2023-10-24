import { classNames } from '6shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from '6shared/ui/Select/Select';
import { memo, useCallback, useMemo } from 'react';
import { ListBox } from '6shared/ui/Popups/ui/ListBox/ListBox';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    { value: Country.UA, content: Country.UA },
    { value: Country.UK, content: Country.UK },
    { value: Country.USA, content: Country.USA },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
    const {
        className,
        value,
        onChange,
        readonly,
    } = props;

    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <ListBox
            className={className}
            onChange={onChangeHandler}
            value={value}
            items={options}
            defaultValue={t('Select currency')}
            readonly={readonly}
            label={t('Country')}
            direction="top right"
        />
    );
});
