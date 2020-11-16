import styled from 'styled-components';
import { Container, ContainerWithWrap } from 'components/Container';
import { MAIN_IMG_PATH } from 'const/path';

export const Root = styled(ContainerWithWrap)`
  padding-top: 60px;

  position: relative;

  background-color: #2e2e2e;

  min-height: 100vh;

  &::after {
    content: '';

    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;

    height: 100%;
    width: 100%;

    transform: translate(-50%, -50%);

    background-image: url('${MAIN_IMG_PATH}/lines.svg');
    background-size: cover;
    background-repeat: no-repeat;
  }

  ${Container} {
    position: relative;
    z-index: 2;
  }
`;
