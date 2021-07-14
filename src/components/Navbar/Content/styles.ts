import styled from 'styled-components';
import { IconButton } from 'components/IconButton';
import { media, transition, color } from 'styles/helpers';

// for `${Wrap}` in Navbar Wrap
export const Wrap = styled.div``;

export const Hidden = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.min('$navbar')} {
    display: none;
  }
`;

export const BurgerButton = styled(IconButton)`
  path {
    transition: ${transition('primary')};
  }

  &:hover path {
    stroke: ${color('lime')};
  }
`;

export const Nav = styled.nav`
  display: flex;

  ${media.max('$navbar')} {
    display: none;
  }
`;
