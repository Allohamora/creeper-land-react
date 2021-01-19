import React from 'react';
import Button from '.';
import ContainedButton from './Contained';
import OutlinedButton from './Outlined';
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

interface Props {
  children: string;
}

const BaseTemplate: Story<Props> = (args) => (
  <Button {...args} />
);

const OutlinedTemplate: Story<Props> = (args) => (
  <OutlinedButton {...args} />
);

const ContainedTemplate: Story<Props> = (args) => (
  <ContainedButton {...args} />
);

export const Base = BaseTemplate.bind({});
Base.args = {
  children: text('Base'),
};

export const Outlined = OutlinedTemplate.bind({});
Outlined.args = {
  children: text('Outlined'),
};

export const Contained = ContainedTemplate.bind({});
Contained.args = {
  children: text('Contained'),
};
