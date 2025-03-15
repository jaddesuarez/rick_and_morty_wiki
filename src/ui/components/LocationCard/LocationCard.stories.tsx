import type { Meta, StoryObj } from "@storybook/react";
import { LocationCard } from "./LocationCard.component";

const meta = {
  title: "Components/LocationCard",
  component: LocationCard,
  parameters: {
    layout: "centered",
    nextjs: {
      appDirectory: true,
      navigation: {
        push: () => Promise.resolve(),
        back: () => Promise.resolve(),
        forward: () => Promise.resolve(),
        prefetch: () => Promise.resolve(),
      },
    },
  },
  argTypes: {
    id: {
      control: "number",
      description: "Location ID",
    },
    name: {
      control: "text",
      description: "Location name",
    },
    dimension: {
      control: "text",
      description: "Location dimension",
    },
  },
} satisfies Meta<typeof LocationCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 1,
    name: "Earth (C-137)",
    type: "Planet",
    dimension: "Dimension C-137",
    residents: [],
    url: "https://rickandmortyapi.com/api/location/1",
    created: "2017-11-10T12:42:04.162Z",
  },
};

export const WithLongName: Story = {
  args: {
    ...Default.args,
    name: "Super Long Location Name That Might Need Special Handling",
  },
};

export const WithLongDimension: Story = {
  args: {
    ...Default.args,
    dimension: "Really Long Dimension Name That Could Potentially Wrap",
  },
};
