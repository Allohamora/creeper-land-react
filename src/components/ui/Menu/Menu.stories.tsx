import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import Button from '../Button';
import Menu, { ModalProps } from './Menu';

export default {
  title: 'Menu',
  component: Menu,
  argTypes: {
    onClose: { action: 'onClose' },
    children: { control: 'text' },
  },
} as Meta;

const Template: Story<ModalProps> = ({
  show: initialShow,
  ...args
}) => {
  const [show, setShow] = useState(!!initialShow);

  const closeHandler = () => setShow(false);
  const openHandler = () => setShow(true);

  return (
    <>
      <Button dark onClick={openHandler}>
        toggle
      </Button>
      <Menu
        children="Menu"
        show={show}
        {...args}
        onClose={closeHandler}
      />
    </>
  );
};

export const Primary = Template.bind({});
