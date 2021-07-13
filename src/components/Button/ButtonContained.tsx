import styled from 'styled-components';
import { color } from 'styles/helpers';
import { ButtonBase } from './ButtonBase';

export const ButtonContained = styled(ButtonBase)`
  color: ${color('white')};

  background-color: ${color('lime_3')};

  &:hover {
    color: ${color('black')};
  }
`;
