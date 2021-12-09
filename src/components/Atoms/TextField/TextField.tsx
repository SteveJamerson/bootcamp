import React, { AnchorHTMLAttributes, useCallback, useState, useRef } from 'react';
import clsx from 'clsx';
import Icon from '../Icon';
import { IconName } from '../Icon/Icon.types';
import { TextFieldComponent } from './styles';

export interface TextFieldProps extends AnchorHTMLAttributes<HTMLInputElement> {
  variant?: 'outlined';
  multiline?: string;
  type: 'text' | 'number' | 'tel' | 'email' | 'password' | 'search';
  id: string;
  label?: string;
  error?: boolean;
  helperText?: string;
  disabled?: boolean;
  iconPosition?: 'start' | 'end';
  iconName?: IconName;
  iconSize?: number
}

const TextField: React.FC<TextFieldProps> = ({
  className,
  variant = 'outlined',
  type = 'text',
  id,
  label,
  iconPosition,
  iconName,
  iconSize,
  error,
  helperText,
  disabled,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isField, setIsField] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsField(!!inputRef.current?.value);
  }, []);

  const classes = clsx(
    `textfield`,
    variant && `textfield--${variant}`,
    error && `textfield--${variant}--error`,
    disabled && `textfield--${variant}--disabled`,
    isFocused && `textfield--${variant}--focus`,
    className,
  );

  return (
    <>
      <TextFieldComponent className={classes} id={'_' + id} type={type}>
        {iconPosition === 'start' && iconName && <Icon size={iconSize} name={iconName} />}
        <input
          className='ds-textfield__input'
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          type={type}
          id={id}
          disabled={disabled}
          ref={inputRef}
          {...props}
        />

        <label
          htmlFor={id}
        >
          {label}
        </label>
        {iconPosition === 'end' && iconName && <Icon size={iconSize} name={iconName} />}
      </TextFieldComponent>
      {helperText && (
        <p>
          {helperText}
        </p>
      )}
    </>
  );
};

export default TextField;
