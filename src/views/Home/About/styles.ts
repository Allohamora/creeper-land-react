import styled from 'styled-components';
import { Container as ComponentContainer } from 'components/Container';
import { color, media } from 'styles/helpers';
import { background } from 'utils/images';

const aboutLines = background('about__lines.svg');

export const Wrap = styled.div`
  position: relative;

  margin-bottom: 20px;

  background-color: ${color('black')};
  box-shadow: 0 4px 4px ${color('$aboutShadow')};

  ${media.max('laptop')} {
    margin-bottom: 0;
  }
`;

export const Container = styled(ComponentContainer)`
  background-image: url('${aboutLines}');
  background-repeat: repeat;

  ${media.max('laptop')} {
    background-image: none;
  }
`;
