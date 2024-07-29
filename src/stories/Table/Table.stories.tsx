import type { Meta, StoryObj } from '@storybook/react';

import Table from './Table';

const meta = {
  component: Table,
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};