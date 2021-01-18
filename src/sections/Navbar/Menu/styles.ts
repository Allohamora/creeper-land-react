import styled from 'styled-components';
import MenuComponent from 'components/Menu';

export const Menu = styled(MenuComponent)`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
`;

export const ListTitle = styled.h2`
  margin: 0 0 18px 0;

  font-weight: 500;
  font-size: 22px;
  line-height: 26px;
`;

export const Top = styled.div`
  > button {
    margin-top: 28px;
    margin-left: 0;
  }
`;

export const Bottom = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  margin-top: auto;
  padding-top: 100px;
  padding-bottom: 20px;

  > *:first-child {
    margin-bottom: 26px;
  }
`;
