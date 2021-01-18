import IconButton from 'components/IconButton';
import styled from 'styled-components';

// for `${Wrap}` in Navbar Wrap
export const Wrap = styled.div``;

export const Hidden = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${(p) => p.theme.media.min('$navbar')} {
    display: none;
  }
`;

export const BurgerButton = styled(IconButton)`
  path {
    transition: ${(p) => p.theme.transtions.primary};
  }

  &:hover path {
    stroke: ${(p) => p.theme.palette.lime};
  }
`;

export const Nav = styled.nav`
  display: flex;

  ${(p) => p.theme.media.max('$navbar')} {
    display: none;
  }
`;
