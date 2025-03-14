import type { Meta, StoryFn } from '@storybook/react';
import Button, { ButtonProps } from "./Button";
import { iconList } from "../_export-helpers"; 
// const ExampleIcon = () => <span role="img" aria-label="star">⭐</span>;


export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    children: { control: 'text' },
    variant: { control: 'radio', options: ['primary', 'secondary', 'tertiary'] },
    hasIcon: { control: 'object' }, 
    href: {
      control: "text",
      description: "URL for the link (only used when as='link')",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
    isBlock: {
      control: "boolean",
      defaultValue: false,
      description: "---- isBlock description ----",
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
  isBlock: false,
};

export const Medium = Template.bind({});
Medium.args = {
  children: "Commit without compromise",
  variant: 'primary',
  size: 'medium',
  isBlock: false,
};

export const Large = Template.bind({});
Large.args = {
  children: "Commit without compromise",
  variant: 'primary',
  size: 'large',
  isBlock: false,
};

// Updated to Incorporate Icon Story for Buttons
export const IconButton = Template.bind({});
IconButton.args = {
  as: 'icon button',
  hasIcon: Object.keys(iconList)[0] as keyof typeof iconList, 
};

IconButton.argTypes = {
  hasIcon: {
    control: { type: 'select' },
    options: Object.keys(iconList) as (keyof typeof iconList)[], 
  },
  children: { table: { disable: true } },
  variant: { table: { disable: true } }, 
  size: { table: { disable: true } }, 
  isBlock: { table: { disable: true } }, 
};

export const LinkButton = Template.bind({});
LinkButton.args = {
  children: "Test Link",
  as: "link",
  href: "https://www.google.com", 
  className: "custom-link-class", 
};

// export const ButtonWithIcon: Story = {
//   args: {
//     children: 'Button with Icon',
//     variant: 'primary',
//     icon: <ExampleIcon />, 
//   },
// };

