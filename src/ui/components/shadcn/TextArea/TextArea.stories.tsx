import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./TextArea";

const meta = {
  title: "Components/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Type your message here...",
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <label htmlFor="message">Message</label>
      <Textarea
        id="message"
        placeholder="Type your message here..."
        className="min-h-[100px]"
      />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    placeholder: "Disabled textarea",
    disabled: true,
  },
};

export const WithRows: Story = {
  args: {
    placeholder: "Fixed number of rows",
    rows: 5,
  },
};

export const WithMaxLength: Story = {
  args: {
    placeholder: "Limited to 100 characters",
    maxLength: 100,
  },
};
