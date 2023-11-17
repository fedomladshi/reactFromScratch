import { classNames } from 'shared/lib/classNames/classNames';
import {
    ChangeEvent,
    memo, PropsWithChildren, useCallback, useMemo,
} from 'react';

import cls from './Select.module.scss';

interface SelectOption {
    value: string | number;
    content: string | number;
}

interface SelectProps {
  className?: string;
  label?: string;
  options: SelectOption[];
  value?: string;
  readOnly?: boolean;
  onChange?: (value: string) => void;
}

export const Select = memo((props: PropsWithChildren<SelectProps>) => {
    const {
        className,
        label,
        options,
        readOnly,
        value,
        onChange,
    } = props;

    const optionsList = useMemo(
        () => options.map(({ value, content }) => <option value={value} className={cls.option}>{content}</option>),
        [options],
    );

    const onChangeHandler = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
        const { value } = event.target;
        onChange?.(value);
    }, [onChange]);

    return (
        <div
            className={classNames(cls.Wrapper, {}, [className])}
        >
            {label && (
                <span className={classNames(cls.label, { [cls.disabled]: readOnly }, [])}>
                    {`${label} >`}
                </span>
            )}
            <select disabled={readOnly} value={value} className={cls.select} onChange={onChangeHandler}>{optionsList}</select>
        </div>
    );
});
