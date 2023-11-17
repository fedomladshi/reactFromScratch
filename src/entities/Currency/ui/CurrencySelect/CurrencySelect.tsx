import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import {
    memo, useCallback,
} from 'react';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  readOnly?: boolean;
  onChange?:(value: Currency) => void;
}

const currencyOptions: {value: Currency, content: Currency}[] = [
    { content: 'EUR', value: 'EUR' },
    { content: 'RUB', value: 'RUB' },
    { content: 'USD', value: 'USD' },
];

export const CurrencySelect = memo(({
    className, value, onChange, readOnly,
}: CurrencySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <Select
            className={className}
            label={t('select-currency')}
            value={value}
            readOnly={readOnly}
            options={currencyOptions}
            onChange={onChangeHandler}
        />
    );
});
