import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import {
    memo, useCallback,
} from 'react';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  readOnly?: boolean;
  onChange?:(value: Country) => void;
}

const currencyOptions: {value: Country, content: Country}[] = [
    { content: 'Armenia', value: 'Armenia' },
    { content: 'Belarus', value: 'Belarus' },
    { content: 'Kazakhstan', value: 'Kazakhstan' },
    { content: 'Russia', value: 'Russia' },
    { content: 'Ukraine', value: 'Ukraine' },
];

export const CountrySelect = memo(({
    className, value, onChange, readOnly,
}: CountrySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <Select
            className={className}
            label={t('select-country')}
            value={value}
            readOnly={readOnly}
            options={currencyOptions}
            onChange={onChangeHandler}
        />
    );
});
