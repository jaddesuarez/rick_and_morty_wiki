import type { Meta, StoryObj } from "@storybook/react";
import { Loading } from "./Loader.component";

const meta: Meta<typeof Loading> = {
  title: "Components/Loading",
  component: Loading,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Loading>;

export const Default: Story = {
  render: () => <Loading />,
};
