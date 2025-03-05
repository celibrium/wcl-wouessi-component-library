import type { Meta, StoryObj } from '@storybook/react';
import Button, { ButtonProps } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: { control: 'text' },
    variant: { control: 'radio', options: ['primary', 'secondary'] },
    block: { control: 'radio', options: [true, false] }
  },
};

export default meta;
type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
    block: false
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
    block: false
  },
};
