import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';

import { TButton } from '@components/button/button.types';

export const Button: FC<TButton> = (props: TButton) => {
  const {
    text,
    className,
    icon,
    variant = 'primary',
    disabled,
    size = 'full',
  } = props;

  const bgColor = {
    primary: 'bg-primary',
    white: 'bg-white',
    success: 'bg-success',
    warning: 'bg-warning',
    danger: 'bg-danger',
    transparent: 'bg-transparent',
  };

  const bgHoverColor = {
    primary: 'hover:bg-primary-800',
    white: 'hover:bg-white-800',
    success: 'hover:bg-success-700',
    warning: 'hover:bg-warning-700',
    danger: 'hover:bg-danger-700',
    transparent: 'hover:bg-transparent',
  };

  const btnSize = {
    xs: 'w-10',
    s: 'w-24',
    sm: 'w-32',
    md: 'w-48',
    lg: 'w-64',
    full: 'w-full',
  };

  return (
    <button
      {...props}
      className={`${className || ''} ${bgColor[variant]} ${
        bgHoverColor[variant]
      } dark:text-white font-bold py-2 px-4 w- rounded-lg ${
        btnSize[size]
      } dark:disabled:bg-dark-lighter disabled:bg-white`}
    >
      <div className="flex gap-2 justify-center items-center">
        {icon && (
          <FontAwesomeIcon
            icon={icon.icon}
            color={icon.color}
            size={icon.size}
          />
        )}
        <p
          className={`${
            (disabled && 'text-neutral-200 dark:text-dark-mid') ||
            ((variant === 'warning' || variant === 'white') && 'text-black')
          }`}
        >
          {text ?? 'Button'}
        </p>
      </div>
    </button>
  );
};
