import type { Meta, StoryObj } from "@storybook/react";
import { CharacterCard } from "./CharacterCard.component";

const meta = {
  title: "Components/CharacterCard",
  component: CharacterCard,
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
  decorators: [
    (Story) => (
      <div className="p-4 bg-black">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    id: {
      control: "number",
      description: "Character ID",
    },
    name: {
      control: "text",
      description: "Character name",
    },
    status: {
      control: "text",
      description: "Character status",
    },
    species: {
      control: "text",
      description: "Character species",
    },
    type: {
      control: "text",
      description: "Character type",
    },
    gender: {
      control: "text",
      description: "Character gender",
    },
    origin: {
      control: "object",
      description: "Character origin",
    },
    location: {
      control: "object",
      description: "Character location",
    },
    image: {
      control: "text",
      description: "Character image",
    },
    episode: {
      control: "object",
      description: "Character episodes",
    },
    url: {
      control: "text",
      description: "Character URL",
    },
    created: {
      control: "text",
      description: "Character creation date",
    },
  },
} satisfies Meta<typeof CharacterCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    origin: {
      name: "Earth",
      url: "https://rickandmortyapi.com/api/location/1",
    },
    location: {
      name: "Earth",
      url: "https://rickandmortyapi.com/api/location/1",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    episode: ["https://rickandmortyapi.com/api/episode/1"],
    url: "https://rickandmortyapi.com/api/character/1",
    created: "2017-11-04T18:48:46.250Z",
  },
};
