import React, { AnchorHTMLAttributes, useCallback, useState, useRef, useEffect } from 'react';
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
  iconSize?: number;
  required?: boolean;
  pattern?: string;
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
  required = false,
  pattern,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isField, setIsField] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const handleError = inputRef.current?.validity.valid
  const validationMessage = inputRef.current?.validationMessage

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsField(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    if (inputRef.current?.value) setIsField(true)   
  })

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
          className={!handleError && isField ? 'invalid' : ''}
          type={type}
          id={id}
          disabled={disabled}
          ref={inputRef}
          {...props}
          required={required}
          pattern={pattern}
        />

        <label
          htmlFor={id}
          className={isFocused || isField ? 'caption' : 'placehold'}
        >
          {label}
        </label>
        {(!handleError && isField) && (
          <small className='error'>
            {errorText || validationMessage}
          </small>
        )}
      </TextFieldComponent>
    </>
  );
};

export default TextField;
