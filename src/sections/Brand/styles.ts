import Typography from 'components/Typography';
import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
`;

export const Data = styled.div`
  margin-left: 10px;
`;

export const Title = styled(Typography)`
  ${(p) => p.theme.media.max('mobile')} {
    font-size: ${(p) => p.theme.pxToRem(12)};
    line-height: ${(p) => p.theme.pxToRem(13)};
  }
`;

Title.defaultProps = {
  variant: 'p2',
  weight: '500',
  color: 'white',
};

export const Ip = styled(Typography)`
  ${(p) => p.theme.media.max('mobile')} {
    font-size: ${(p) => p.theme.pxToRem(10)};
    line-height: ${(p) => p.theme.pxToRem(12)};
  }
`;

Ip.defaultProps = {
  variant: 'p3',
  color: 'lime',
};
