import {
  ButtonVariant,
  ButtonSize,
  ButtonShape,
  ButtonWidth,
} from "./Button.types";

// Variants
export const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  danger: "bg-red-600 text-white hover:bg-red-700",
  bordered: "border border-gray-400 text-gray-800 hover:bg-gray-100",
  outline:
    "border border-blue-600 text-blue-600 bg-transparent hover:bg-blue-50 hover:text-blue-700",
};

// Normal sizes
export const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-2 py-1 text-sm min-w-[64px]",
  md: "px-4 py-2 text-base min-w-[96px]",
  lg: "px-6 py-3 text-lg min-w-[128px]",
};

// Circle-only sizes
export const circleSizeStyles: Record<ButtonSize, string> = {
  sm: "w-8 h-8 text-sm",
  md: "w-10 h-10 text-base",
  lg: "w-12 h-12 text-lg",
};

// Shapes
export const shapeStyles: Record<ButtonShape, string> = {
  rounded: "rounded-lg",
  pill: "rounded-full",
  circle: "rounded-full flex items-center justify-center",
  square: "rounded-none",
};

// Width control
export const widthStyles: Record<ButtonWidth, string> = {
  fixed: "inline-block max-w-max",
  free: "w-auto max-w-full",
  full: "w-full",
};
