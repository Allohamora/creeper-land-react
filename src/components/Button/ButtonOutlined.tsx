import styled from 'styled-components';
import { color } from 'styles/helpers';
import { ButtonBase } from './ButtonBase';

export const ButtonOutlined = styled(ButtonBase)`
  color: ${color('white')};

  background-color: transparent;
  border: 2px solid ${color('lime')};

  &:hover {
    color: ${color('lime')};
  }
`;
