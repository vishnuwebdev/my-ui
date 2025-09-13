import type React from 'react';

// Variants
export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'bordered' | 'outline';

// Sizes
export type ButtonSize = 'sm' | 'md' | 'lg';

// Shapes
export type ButtonShape = 'rounded' | 'pill' | 'circle' | 'square';

// Width control
export type ButtonWidth = 'fixed' | 'free' | 'full';

// Props
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loaderColor?: string;
  color?: string;
  width?: ButtonWidth;
  ripple?: boolean;
  title?: string;
  loading?: boolean;
  loadingText?: string;
  shape?: ButtonShape;
}
