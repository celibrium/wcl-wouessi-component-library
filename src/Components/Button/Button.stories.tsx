import type { Meta, StoryFn } from '@storybook/react';
import Button, { ButtonProps } from "./Button";

// const ExampleIcon = () => <span role="img" aria-label="star">⭐</span>;


export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    children: { control: 'text' },
    variant: { control: 'radio', options: ['primary', 'secondary', 'tertiary'] },
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
  size: 'small',
  block: false,
};

export const Medium = Template.bind({});
Medium.args = {
  children: "Commit without compromise",
  variant: 'primary',
  size: 'medium',
  block: false,
};

export const Large = Template.bind({});
Large.args = {
  children: "Commit without compromise",
  variant: 'primary',
  size: 'large',
  block: false,
};

// export const ButtonWithIcon: Story = {
//   args: {
//     children: 'Button with Icon',
//     variant: 'primary',
//     icon: <ExampleIcon />, 
//   },
// };