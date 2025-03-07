import { Meta, StoryFn } from "@storybook/react";
import { iconOptions } from "../_export-helpers";
import Icon from "./Icon";

export default {
  title: "Components/Icon",
  component: Icon,
  argTypes: {
    name: {
      control: {
        type: "select",
      },
      options: iconOptions,
      defaultValue: "ChatsTeardrop", // Ensure a default value is set
    },
    size: { control: { type: "number", min: 8, max: 100 } },
    color: { control: "color" },
  },
} as Meta;

const Template: StoryFn<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "ChatsTeardrop",
  size: 24,
  color: "#000",
};
