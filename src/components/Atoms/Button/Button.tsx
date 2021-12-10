import React, { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';
import { ButtonVariant, ButtonTypes, ButtonColors } from './Button.types';
import { ButtonComponent } from './styles';
import Icon from '../Icon';
import { IconName } from '../Icon/Icon.types';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  type?: ButtonTypes;
  text?: string;
  color?: ButtonColors;
  disabled?: boolean;
  iconName?: IconName;
  iconPosition?: 'start' | 'end';
  iconSize?: number
}

const Button: React.FC<ButtonProps> = ({
  className,
  variant = 'default',
  color = 'primary',
  text,
  type = 'button',
  children,
  iconName,
  iconPosition = iconName ? 'start' : '',
  iconSize,
  ...props
}) => {
  const classes = clsx(
    className,
  );

  return (
      <ButtonComponent type={type} color={color} variant={variant} className={classes} {...props}>
        {iconPosition === 'start' ? <Icon name={iconName as IconName} /> : ''}
        {text || children}
        {iconPosition === 'end' ? <Icon name={iconName as IconName} /> : ''}
      </ButtonComponent>
  );
};

export default Button;
