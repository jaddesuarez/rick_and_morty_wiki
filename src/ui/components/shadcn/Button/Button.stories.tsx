import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { Mail } from "lucide-react";

interface IButtonProps {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
  children?: React.ReactNode;
  disabled?: boolean;
  asChild?: boolean;
}

const ButtonMock = ({
  variant = "default",
  size = "default",
  children = "Button",
  disabled = false,
  asChild = false,
}: IButtonProps) => {
  return (
    <Button variant={variant} size={size} disabled={disabled} asChild={asChild}>
      {children}
    </Button>
  );
};

export default {
  title: "Components/Button",
  component: ButtonMock,
  decorators: [
    (Story) => (
      <div className="min-h-screen flex items-center justify-center">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ButtonMock>;

export const Default: StoryObj<typeof ButtonMock> = {
  render: () => <ButtonMock>Default Button</ButtonMock>,
};

export const Destructive: StoryObj<typeof ButtonMock> = {
  render: () => (
    <ButtonMock variant="destructive">Destructive Button</ButtonMock>
  ),
};

export const Outline: StoryObj<typeof ButtonMock> = {
  render: () => <ButtonMock variant="outline">Outline Button</ButtonMock>,
};

export const Secondary: StoryObj<typeof ButtonMock> = {
  render: () => <ButtonMock variant="secondary">Secondary Button</ButtonMock>,
};

export const Ghost: StoryObj<typeof ButtonMock> = {
  render: () => <ButtonMock variant="ghost">Ghost Button</ButtonMock>,
};

export const Link: StoryObj<typeof ButtonMock> = {
  render: () => <ButtonMock variant="link">Link Button</ButtonMock>,
};

export const Small: StoryObj<typeof ButtonMock> = {
  render: () => <ButtonMock size="sm">Small Button</ButtonMock>,
};

export const Large: StoryObj<typeof ButtonMock> = {
  render: () => <ButtonMock size="lg">Large Button</ButtonMock>,
};

export const WithIcon: StoryObj<typeof ButtonMock> = {
  render: () => (
    <ButtonMock>
      <Mail className="mr-2 h-4 w-4" /> Login with Email
    </ButtonMock>
  ),
};

export const IconOnly: StoryObj<typeof ButtonMock> = {
  render: () => (
    <ButtonMock size="icon">
      <Mail className="h-4 w-4" />
    </ButtonMock>
  ),
};

export const Disabled: StoryObj<typeof ButtonMock> = {
  render: () => <ButtonMock disabled>Disabled Button</ButtonMock>,
};
