import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Icon from "./Icon";

export default {
  title: "Components/Icon",
  component: Icon,
  argTypes: {
    name: {
      control: { type: "select", options: ["chats-teardrop", "speaker-high", "megaphone", "caret-circle-right"] },
    },
    size: { control: { type: "number", min: 8, max: 100 } },
    color: { control: "color" },
  },
} as Meta;

const Template: StoryFn<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "chats-teardrop",
  size: 24,
  color: "#000",
};
