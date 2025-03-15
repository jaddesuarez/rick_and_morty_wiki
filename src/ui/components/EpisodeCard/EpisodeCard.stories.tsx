import type { Meta, StoryObj } from "@storybook/react";
import { EpisodeCard } from "./EpisodeCard.component";

const meta = {
  title: "Components/EpisodeCard",
  component: EpisodeCard,
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
      description: "Episode ID",
    },
    name: {
      control: "text",
      description: "Episode name",
    },
    air_date: {
      control: "text",
      description: "Episode air date",
    },
    episode: {
      control: "text",
      description: "Episode code (e.g., S01E01)",
    },
    characters: {
      control: "object",
      description: "List of characters in the episode",
    },
    url: {
      control: "text",
      description: "Episode URL",
    },
    created: {
      control: "text",
      description: "Episode creation date",
    },
  },
} satisfies Meta<typeof EpisodeCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 1,
    name: "Pilot",
    air_date: "December 2, 2013",
    episode: "S01E01",
    characters: [],
    url: "https://rickandmortyapi.com/api/episode/1",
    created: "2017-11-10T12:56:33.798Z",
  },
};

export const WithLongTitle: Story = {
  args: {
    ...Default.args,
    name: "The Incredibly Long Title of This Episode That Might Wrap",
  },
};
