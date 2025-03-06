import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const ExampleIcon = () => <span role="img" aria-label="star">⭐</span>;

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: { control: 'text' },
    variant: { control: 'radio', options: ['primary', 'secondary'] },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
    icon: { control: 'object' }, // 
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
};

export const ButtonWithIcon: Story = {
  args: {
    children: 'Button with Icon',
    variant: 'primary',
    icon: <ExampleIcon />, 
  },
};

export const Small: Story = {
  args: {
    children: 'Small Button',
    variant: 'primary',
    size: 'small',
    icon: <ExampleIcon />, 
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    variant: 'primary',
    size: 'large',
    icon: <ExampleIcon />,
  },
};
