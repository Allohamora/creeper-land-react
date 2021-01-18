import styled from 'styled-components';
import ComponentContainer from 'components/Container';
import aboutLines from 'assets/img/about__lines.svg';

export const Wrap = styled.div`
  position: relative;

  margin-bottom: 20px;

  background-color: ${(p) => p.theme.palette.black};
  box-shadow: 0 4px 4px
    ${(p) => p.theme.palette.$aboutShadow};

  ${(p) => p.theme.media.max('laptop')} {
    margin-bottom: 0;
  }
`;

export const Container = styled(ComponentContainer)`
  background-image: url('${aboutLines}');
  background-repeat: repeat;

  ${(p) => p.theme.media.max('laptop')} {
    background-image: none;
  }
`;
