import React from 'react';
import { Meta, Story } from '@storybook/react';
import Paragraph, { ParagraphProps } from './Paragraph';

export default {
  title: 'Paragraph',
  component: Paragraph,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  argTypes: {
    weight: { control: 'boolean' },
    primary: { control: 'boolean' },
    small: { control: 'boolean' },
    big: { control: 'boolean' },
    children: { control: 'text' },
  },
} as Meta;

const lorem =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
const Template: Story<ParagraphProps> = (args) => (
  <Paragraph children={lorem} {...args} />
);

export const Basic = Template.bind({});
Basic.args = {};

export const Weight = Template.bind({});
Weight.args = {
  weight: true,
};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};

export const Small = Template.bind({});
Small.args = {
  small: true,
};

export const Big = Template.bind({});
Big.args = {
  big: true,
};
