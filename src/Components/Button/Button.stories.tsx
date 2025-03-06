import type { Meta, StoryObj } from '@storybook/react';
import Button, { ButtonProps } from "./Button";

const ExampleIcon = () => <span role="img" aria-label="star">⭐</span>;


export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    children: { control: 'text' },
    variant: { control: 'radio', options: ['primary', 'secondary'] },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
    icon: { control: 'object' }, // 
    block: {
      control: "boolean",
      defaultValue: false,
      description: "---- block description ----",
      table: {
        type: { summary: "boolean" }, // Add type summary for documentation
        defaultValue: { summary: "false" }, // Optional: Show default value
      },
    },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => (
  <Button {...args}>{args.children}</Button>
);

export const Small = Template.bind({});
Small.args = {
  children: "Commit without compromise",
  variant: "primary",
  block: false,
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
