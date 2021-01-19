import styled from 'styled-components';
import { Button } from '../styles';

const Contained = styled(Button)`
  color: ${(p) => p.theme.palette.white};

  background-color: ${(p) => p.theme.palette.lime};

  &:hover {
    color: ${(p) => p.theme.palette.black};
  }
`;

export default Contained;
