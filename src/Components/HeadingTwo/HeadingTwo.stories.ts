import type { Meta, StoryObj } from '@storybook/react';

import HeadingTwo from '.';

const meta = {
  title: 'Components/Heading',
  component: HeadingTwo,
} satisfies Meta<typeof HeadingTwo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Heading example'
  },
};