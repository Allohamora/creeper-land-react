import styled from 'styled-components';
import { Typography } from 'components/Typography';

interface TitleProps {
  type?: 'case' | 'shop';
}

export const Title = styled(Typography).attrs({
  variant: 'h2',
  color: 'black',
})<TitleProps>`
  padding-bottom: 19px;

  ${(p) => p.type === 'case' && 'padding-bottom: 12px;'}
`;
