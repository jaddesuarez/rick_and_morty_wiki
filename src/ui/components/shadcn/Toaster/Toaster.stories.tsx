import { Button } from "@components/shadcn/Button/Button";
import Toaster from "./Toaster";
import { toast } from "sonner";
import type { Meta, StoryObj } from "@storybook/react";

interface IToasterMockProps {
  variant?: "success" | "error" | "warning" | "info" | "loading" | "default";
  description?: string;
  action?: React.ReactNode;
  closeButton?: boolean;
  duration?: number;
}

const ToasterMock = ({
  variant = "success",
  description = "This is a toast",
  action,
  closeButton = false,
  duration = 3000,
}: IToasterMockProps) => {
  const toastFunctionOptions = {
    success: toast.success,
    error: toast.error,
    warning: toast.warning,
    info: toast.info,
    loading: toast.loading,
    default: toast,
  };

  const toastFunction =
    toastFunctionOptions[variant] || toastFunctionOptions.default;

  return (
    <div>
      <Button
        onClick={() =>
          toastFunction(description, { action, closeButton, duration })
        }
      >
        Open toast
      </Button>
      <Toaster />
    </div>
  );
};

export default {
  title: "Components/Toast",
  component: ToasterMock,
  decorators: [
    (Story) => (
      <>
        <Story />
        <Toaster />
      </>
    ),
  ],
} satisfies Meta<typeof ToasterMock>;

export const Default: StoryObj<typeof ToasterMock> = {
  render: () => <ToasterMock />,
};

export const Success: StoryObj<typeof ToasterMock> = {
  render: () => (
    <ToasterMock description="This is a success toast" variant="success" />
  ),
};

export const Error: StoryObj<typeof ToasterMock> = {
  render: () => (
    <ToasterMock description="This is an error toast" variant="error" />
  ),
};

export const Warning: StoryObj<typeof ToasterMock> = {
  render: () => (
    <ToasterMock description="This is a warning toast" variant="warning" />
  ),
};

export const Info: StoryObj<typeof ToasterMock> = {
  render: () => (
    <ToasterMock description="This is an info toast" variant="info" />
  ),
};

export const Loading: StoryObj<typeof ToasterMock> = {
  render: () => (
    <ToasterMock description="This is a loading toast" variant="loading" />
  ),
};

export const WithAction: StoryObj<typeof ToasterMock> = {
  render: () => (
    <ToasterMock
      description="This is an action toast"
      variant="success"
      action={<span>Click me</span>}
    />
  ),
};

export const WithCloseButton: StoryObj<typeof ToasterMock> = {
  render: () => (
    <ToasterMock
      description="This is a close button toast"
      variant="success"
      closeButton
    />
  ),
};

export const WithDuration: StoryObj<typeof ToasterMock> = {
  render: () => (
    <ToasterMock
      description="This is a duration toast"
      variant="success"
      duration={10000}
    />
  ),
};
