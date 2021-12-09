import React, { AnchorHTMLAttributes, useCallback, useState, useRef } from 'react';
import clsx from 'clsx';
import { IconName } from '../Icon/Icon.types';
import { TextFieldComponent } from './styles';

export interface TextFieldProps extends AnchorHTMLAttributes<HTMLInputElement> {
  variant?: 'outlined';
  multiline?: string;
  type: 'text' | 'number' | 'tel' | 'email' | 'password' | 'search';
  id: string;
  label?: string;
  errorText?: string;
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
  iconName,
  iconPosition = iconName ? 'end' : '',
  iconSize,
  errorText,
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
    className,
  );

  return (
    <>
      <TextFieldComponent
        className={classes} id={'_' + id}
        type={type}
      > 
        <input
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
          className={isFocused || isField ? 'caption' : 'placehold'}
        >
          {label}
        </label>
        {errorText && (
          <small className='error'>
            {errorText}
          </small>
        )}
      </TextFieldComponent>
    </>
  );
};

export default TextField;
