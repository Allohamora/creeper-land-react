import Typography from 'components/Typography';
import styled from 'styled-components';

export const Point = styled.div`
  margin-bottom: 27px;

  ${(p) => p.theme.media.max('mobile')} {
    margin-bottom: 14px;
  }
`;

export const PointTitle = styled(Typography)`
  margin-bottom: 7px;

  ${(p) => p.theme.media.max('mobile')} {
    margin-bottom: 5px;
  }
`;

PointTitle.defaultProps = {
  variant: 'h3',
  color: 'black',
};

export const Points = styled.div`
  margin-top: 31px;
  margin-bottom: -27px;

  ${(p) => p.theme.media.max('mobile')} {
    margin-top: 14px;
    margin-bottom: -14px;
  }
`;
