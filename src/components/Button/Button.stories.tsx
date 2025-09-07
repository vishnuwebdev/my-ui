// src/components/Button/Button.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

const meta: Meta<ButtonProps> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"], // auto-generates Docs tab
  argTypes: {
    variant: { control: "radio", options: ["primary", "secondary", "danger"] },
    size: { control: "radio", options: ["sm", "md", "lg"] },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<ButtonProps>;

// Default primary button
export const Primary: Story = {
  args: { children: "Primary Button", variant: "primary" },
};

// Secondary button
export const Secondary: Story = {
  args: { children: "Secondary Button", variant: "secondary" },
};

// Danger button
export const Danger: Story = {
  args: { children: "Danger Button", variant: "danger" },
};

// Disabled button
export const Disabled: Story = {
  args: { children: "Disabled Button", disabled: true },
};

// Large button
export const Large: Story = {
  args: { children: "Large Button", size: "lg" },
};
