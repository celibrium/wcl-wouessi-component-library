import type { Meta, StoryObj } from '@storybook/react';
import Button, { ButtonProps } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: { control: 'text' },
    variant: { control: 'radio', options: ['primary', 'secondary'] },
  },
};

export default meta;
type Story = StoryObj<ButtonProps>;

export const Small: Story = {
  args: {
    children: 'Commit without compromise',
    variant: 'primary',
  },
};

export const Medium: Story = {
  args: {
    children: 'Commit without compromise',
    variant: 'primary',
  },
};

export const Large: Story = {
  args: {
    children: 'Commit without compromise',
    variant: 'primary',
  },
};
