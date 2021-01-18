import Typography from 'components/Typography';
import styled from 'styled-components';

export const Wrap = styled.div`
  padding-top: 41px;

  ${(p) => p.theme.media.max('mobile')} {
    padding-top: 25px;
  }
`;

export const Title = styled(Typography)`
  padding-bottom: 17px;
`;

Title.defaultProps = {
  variant: 'h2',
  color: 'black',
};
