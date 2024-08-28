import type { Meta, StoryObj } from "@storybook/react";

import ProfileCard from "./ProfileCard";

const meta = {
  component: ProfileCard,
  title: "Profile Card",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ProfileCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
