import React from 'react';
import Button, { ButtonProps } from './Button';
import { Meta, Story } from '@storybook/react';

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

const text = (secondary: string) => `Button ${secondary}`;

const Template: Story<ButtonProps> = (args) => (
  <Button {...args} />
);

export const Base = Template.bind({});
Base.args = {
  children: text('Base'),
};

export const Outlined = Template.bind({});
Outlined.args = {
  children: text('Outlined'),
  variant: 'outlined',
};

export const Contained = Template.bind({});
Contained.args = {
  children: text('Contained'),
  variant: 'contained',
};

export const Lime = Template.bind({});
Lime.args = {
  children: text('Lime'),
  color: 'lime',
};
