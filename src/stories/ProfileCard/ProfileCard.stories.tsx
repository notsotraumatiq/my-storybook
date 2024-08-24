import type { Meta, StoryObj } from '@storybook/react';

import ProfileCard from './ProfileCard';

const meta = {
  component: ProfileCard,
} satisfies Meta<typeof ProfileCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};