import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { ButtonProps } from "./Button.types";

const meta: Meta<ButtonProps> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
    color: { control: "color" },
    loaderColor: { control: "color" },
  },
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj<ButtonProps>;

/** ---------- Default Variants ---------- */
export const Primary: Story = {
  args: {
    title: "Primary",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    title: "Secondary",
    variant: "secondary",
  },
};

export const Danger: Story = {
  args: {
    title: "Danger",
    variant: "danger",
  },
};

export const Outline: Story = {
  args: {
    title: "Outline",
    variant: "outline",
  },
};

export const Bordered: Story = {
  args: {
    title: "Bordered",
    variant: "bordered",
  },
};

/** ---------- Sizes ---------- */
export const Small: Story = {
  args: {
    title: "Small Button",
    size: "sm",
    variant: "primary",
  },
};

export const Medium: Story = {
  args: {
    title: "Medium Button",
    size: "md",
    variant: "primary",
  },
};

export const Large: Story = {
  args: {
    title: "Large Button",
    size: "lg",
    variant: "primary",
  },
};

/** ---------- Shapes ---------- */
export const Rounded: Story = {
  args: {
    title: "Rounded",
    shape: "rounded",
  },
};

export const Pill: Story = {
  args: {
    title: "Pill",
    shape: "pill",
  },
};

export const Square: Story = {
  args: {
    title: "Square",
    shape: "square",
  },
};

export const Circle: Story = {
  args: {
    children: "✓",
    shape: "circle",
  },
};

/** ---------- Widths ---------- */
export const Fixed: Story = {
  args: {
    title: "Fixed Width",
    width: "fixed",
  },
};

export const Free: Story = {
  args: {
    title: "Free Width",
    width: "free",
  },
};

export const Full: Story = {
  args: {
    title: "Full Width",
    width: "full",
  },
};

/** ---------- Ripple Control ---------- */
export const WithRipple: Story = {
  args: {
    title: "Click Me (Ripple)",
    ripple: true,
  },
};

export const WithoutRipple: Story = {
  args: {
    title: "No Ripple",
    ripple: false,
  },
};

/** ---------- Loading States ---------- */
export const LoadingWithText: Story = {
  args: {
    loading: true,
    loadingText: "Loading...",
  },
};

export const LoadingWithoutText: Story = {
  args: {
    loading: true,
  },
};

/** ---------- Custom Colors ---------- */
export const CustomButtonColor: Story = {
  args: {
    title: "Custom Button",
    color: "bg-purple-600 hover:bg-purple-700 text-white",
  },
};

export const CustomLoaderColor: Story = {
  args: {
    title: "Custom Loader",
    loading: true,
    loaderColor: "orange",
  },
};
