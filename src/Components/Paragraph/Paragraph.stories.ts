import type { Meta, StoryObj } from '@storybook/react';

import Paragraph from '.';

const meta = {
  title: 'Components/Heading',
  component: Paragraph,
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Heading example'
  },
};