import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "./Skeleton";

const meta = {
  title: "Components/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CharacterCard: Story = {
  render: () => (
    <div className="w-[280px] h-[430px] rounded-xl overflow-hidden">
      <div className="relative h-[250px]">
        <Skeleton className="h-full w-full" />
        <div className="absolute bottom-4 right-4">
          <Skeleton className="h-12 w-12 rounded-full" />
        </div>
      </div>
      <div className="bg-green-300 p-4 h-[calc(420px-192px)]">
        <Skeleton className="h-8 w-3/4 mb-4" />
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Skeleton className="h-5 w-5" />
            <Skeleton className="h-5 w-24" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="h-5 w-5" />
            <Skeleton className="h-5 w-32" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="h-5 w-5" />
            <Skeleton className="h-5 w-28" />
          </div>
        </div>
      </div>
    </div>
  ),
};

export const Default: Story = {
  args: {
    className: "w-[100px] h-[20px]",
  },
};

export const Circle: Story = {
  args: {
    className: "w-12 h-12 rounded-full",
  },
};
