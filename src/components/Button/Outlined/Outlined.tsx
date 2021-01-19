import styled from 'styled-components';
import { Button } from '../styles';

const Outlined = styled(Button)`
  color: ${(p) => p.theme.palette.white};

  background-color: transparent;
  border: 2px solid ${(p) => p.theme.palette.lime};

  &:hover {
    color: ${(p) => p.theme.palette.lime};
  }
`;

export default Outlined;
