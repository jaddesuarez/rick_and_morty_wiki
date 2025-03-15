import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { Mail, Loader2 } from "lucide-react";

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

const meta = {
  title: "Components/Button",
  component: ButtonMock,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ButtonMock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Delete",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "Small",
  },
};

export const DefaultSize: Story = {
  args: {
    size: "default",
    children: "Default",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Large",
  },
};

export const Loading: Story = {
  args: {
    children: (
      <>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </>
    ),
    disabled: true,
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  },
};

export const Link: StoryObj<typeof ButtonMock> = {
  render: () => <ButtonMock variant="link">Link Button</ButtonMock>,
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
