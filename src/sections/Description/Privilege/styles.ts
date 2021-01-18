import Typography from 'components/Typography';
import styled from 'styled-components';

export const Wrap = styled.div`
  margin-top: 26px;
`;

export const Title = styled(Typography)`
  margin-bottom: 14px;

  ${(p) => p.theme.media.max('mobile')} {
    margin-bottom: 17px;
  }
`;

Title.defaultProps = {
  variant: 'h2',
  color: 'black',
};

export const DropDown = styled;
