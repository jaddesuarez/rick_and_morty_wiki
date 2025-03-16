import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@components/shadcn/Button/Button";
import { toast } from "sonner";
import { Toaster } from "./Sonner";

const meta = {
  title: "Components/Sonner",
  component: Toaster,
  decorators: [
    (Story) => (
      <>
        <Story />
        <Toaster />
      </>
    ),
  ],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Button onClick={() => toast("Default notification")}>Show Toast</Button>
    </div>
  ),
};

export const Success: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Button onClick={() => toast.success("Success notification")}>
        Show Success
      </Button>
    </div>
  ),
};

export const Error: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Button onClick={() => toast.error("Error notification")}>
        Show Error
      </Button>
    </div>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Button
        onClick={() =>
          toast("Notification with description", {
            description:
              "This is a more detailed description of the notification.",
          })
        }
      >
        Show With Description
      </Button>
    </div>
  ),
};

export const WithAction: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Button
        onClick={() =>
          toast("Notification with action", {
            action: {
              label: "Undo",
              onClick: () => console.log("Undo clicked"),
            },
          })
        }
      >
        Show With Action
      </Button>
    </div>
  ),
};
