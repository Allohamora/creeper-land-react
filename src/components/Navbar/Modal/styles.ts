import styled, { css } from 'styled-components';
import { Button } from 'components/Button';
import { Modal as UiModal } from 'components/ui/Modal';

export const ListTitle = styled.h2`
  ${({ theme }) => css`
    margin: 0;

    font-weight: 500;
    font-size: ${theme.pxToRem(22)};
    line-height: ${theme.pxToRem(26)};
  `}
`;

export const Modal = styled(UiModal)`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
`;

export const Top = styled.div`
  ${({ theme }) => css`
    && > ${Button} {
      margin-top: 28px;
      margin-left: 0;
    }

    && > ${ListTitle} {
      margin-bottom: ${theme.pxToRem(18)};
    }
  `}
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
