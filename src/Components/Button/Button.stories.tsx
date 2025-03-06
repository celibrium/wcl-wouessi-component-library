import type { Meta, StoryFn } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    children: { control: "text" },
    variant: {
      control: "radio",
      options: ["primary", "secondary", "tertiary"],
    },
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
