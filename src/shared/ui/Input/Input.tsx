import {
    ChangeEvent, forwardRef, InputHTMLAttributes, memo, SyntheticEvent, useImperativeHandle, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>;

export interface CustomInput {
    focus(): void;
    blur(): void;
  }
interface InputProps extends HTMLInputProps{
  className?: string;
  value?: string | number;
  readOnly?: boolean;
  onChange?: (value: string) => void;
}

const ForwardedRefInput = forwardRef<CustomInput, InputProps>((props, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const {
        className,
        type = 'text',
        value,
        placeholder,
        readOnly,
        onChange,
        ...otherProps
    } = props;
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const onSelect = (event: SyntheticEvent<HTMLDivElement, Event>) => {
        const target = event.target as HTMLInputElement;
        if (!readOnly) {
            setIsFocused(true);
            setCaretPosition(target.selectionStart || 0);
        }
    };

    useImperativeHandle(
        ref,
        () => ({
            focus() {
                inputRef?.current?.focus();
                setIsFocused(true);
            },
            blur() {
                inputRef?.current?.blur();
                setIsFocused(false);
            },
        }),
        [],
    );

    return (
        <div className={classNames(cls.InputWrapper, { [cls.readonly]: readOnly }, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder}>`}
                </div>
            )}
            <div className={cls.caretWrapper}>
                <input
                    ref={inputRef}
                    value={value}
                    readOnly={readOnly}
                    className={cls.input}
                    type={type}
                    onChange={handleChange}
                    onBlur={onBlur}
                    disabled={readOnly}
                    onSelect={onSelect}
                    {...otherProps}
                />
                <span style={{ left: `${caretPosition}ch` }} className={classNames(cls.caret, { [cls.caretShown]: isFocused }, [className])} />
            </div>

        </div>
    );
});

export const Input = memo(ForwardedRefInput);
