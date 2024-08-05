import type { Meta, StoryObj } from "@storybook/react";

import Accordion from "./Accordion";

const meta = {
  component: Accordion,
  tags: ["autodocs"],
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    multiple: false,
    contents: [
      {
        summary: "First Item",
        active: false,
      },
      {
        summary: "Second Item",
        active: false,
      },
    ],
  },
};
export const Second: Story = {
  args: {
    multiple: true,
    contents: [
      {
        summary: "First Item",
        active: true,
      },
      {
        summary: "Second Item",
        active: true,
      },
    ],
  },
};
