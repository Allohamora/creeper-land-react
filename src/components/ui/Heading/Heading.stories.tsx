import React from 'react';
import { Meta, Story } from '@storybook/react';
import Heading, { HeadingProps } from './Heading';

export default {
  title: 'Heading',
  component: Heading,
} as Meta;

const text = 'Heading';

const Template: Story<HeadingProps> = (args) => <Heading {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: `${text} Basic`,
};

export const H1 = Template.bind({});
H1.args = {
  children: `${text} H1`,
  variant: 'h1',
};

export const H2 = Template.bind({});
H2.args = {
  children: `${text} H2`,
  variant: 'h2',
};

export const H3 = Template.bind({});
H3.args = {
  children: `${text} H3`,
  variant: 'h3',
};

export const H4 = Template.bind({});
H4.args = {
  children: `${text} H4`,
  variant: 'h4',
};
