import styled from 'styled-components';
import logo from 'assets/img/logo.png';

const Logo = styled.img`
  display: block;
  width: 34px;
  height: 34px;

  ${(p) => p.theme.media.max('mobile')} {
    width: 24px;
    height: 24px;
  }
`;

Logo.defaultProps = {
  src: logo,
  alt: 'creeper land',
};

export default Logo;
