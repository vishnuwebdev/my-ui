import React, { useRef } from 'react';
import {
  circleSizeStyles,
  shapeStyles,
  sizeStyles,
  variantStyles,
  widthStyles,
} from './Button.styles';
import type { ButtonProps } from './Button.types';
import { Loader } from './Loader';
import { handleRipple } from './Ripple';

export const Button: React.FC<ButtonProps> = ({
  children,
  title,
  variant = 'primary',
  size = 'md',
  color,
  width = 'fixed',
  ripple = true,
  loading = false,
  loadingText,
  className = '',
  loaderColor,
  shape = 'rounded',
  style,
  ...props
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  if (!children && !title && !loading) return null;

  const finalSize = shape === 'circle' ? circleSizeStyles[size] : sizeStyles[size];

  return (
    <button
      ref={buttonRef}
      disabled={loading || props.disabled}
      className={`
        font-medium focus:outline-none focus:ring transition-colors duration-200 
        relative overflow-hidden cursor-pointer 
        active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed
        ${color || variantStyles[variant]} ${finalSize} ${widthStyles[width]} ${
          shapeStyles[shape]
        } ${className}
      `}
      style={{
        ...style,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      }}
      onClick={e => {
        if (!loading && ripple && buttonRef.current) {
          handleRipple(e, buttonRef.current, props.disabled || false);
          props.onClick?.(e);
        }
      }}
      {...props}
    >
      {loading ? (
        <Loader color={loaderColor || 'currentColor'} text={loadingText ?? ''} />
      ) : (
        title || children
      )}
    </button>
  );
};
