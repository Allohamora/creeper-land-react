import styled from 'styled-components';
import { media } from 'styles/helpers';
import { icon } from 'utils/images';

const Logo = styled.img.attrs({
  src: icon('logo.png'),
  alt: 'creeper land',
})`
  display: block;
  width: 34px;
  height: 34px;

  ${media.max('mobile')} {
    width: 24px;
    height: 24px;
  }
`;

export default Logo;
