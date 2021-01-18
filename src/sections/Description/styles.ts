import styled from 'styled-components';
import DropdownListComponent from 'components/DropdownList';

export const DropdownList = styled(DropdownListComponent)`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Wrap = styled.div`
  padding-top: 78px;
  padding-bottom: 65px;

  background-color: ${(p) => p.theme.palette.white_2};

  ${(p) => p.theme.media.max('mobile')} {
    padding-top: 31px;
    padding-bottom: 32px;
  }
`;
