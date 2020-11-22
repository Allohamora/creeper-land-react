import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  argTypes: {
    children: { control: 'text' },
  },
} as Meta;

const text = 'Button';

const Template: Story = (args) => (
  <Button children={text} {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

export const Dark = Template.bind({});
Dark.args = { dark: true };
Dark.parameters = {
  backgrounds: {
    default: 'light',
  },
};
