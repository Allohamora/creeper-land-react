import ButtonComponent from 'components/Button/Outlined';
import styled, { css } from 'styled-components';
import { media } from 'styles/helpers';
import { Wrap as Content } from './Content/styles';

export const Wrap = styled.div<{ footer?: boolean }>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  ${(p) =>
    p.footer &&
    css`
      ${media.max('mobile')} {
        flex-flow: column wrap;

        > ${Content} {
          margin-top: 25px;
        }
      }
    `}
`;

export const Button = styled(ButtonComponent)`
  margin-left: 54px;
`;
