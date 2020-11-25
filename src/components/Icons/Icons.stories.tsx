import { Meta } from '@storybook/react';
import React from 'react';
import BurgerIcon from './Burger';
import DiscordIcon from './Discord';
import VkIcon from './Vk';
import XIcon from './XIcon';

export default {
  title: 'Icons',
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Discord = () => <DiscordIcon />;
export const Vk = () => <VkIcon />;
export const XMark = () => <XIcon />;
export const Burger = () => <BurgerIcon />;
