import styled from 'styled-components';
import bg from 'assets/img/buys__bg.png';
import Typography from 'components/Typography';

export const Wrap = styled.div`
  overflow: hidden;

  background-image: url('${bg}');
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Title = styled(Typography)`
  padding-top: 36px;
  padding-bottom: 17px;

  ${(p) => p.theme.media.max('mobile')} {
    padding-top: 17px;
    padding-bottom: 8px;
  }
`;

Title.defaultProps = {
  variant: 'h2',
  weight: '500',
  color: 'white',
};

export const CardsWrap = styled.div`
  position: relative;

  width: 100%;
  padding-bottom: 17px;

  ${(p) => p.theme.media.max('mobile')} {
    padding-bottom: 27px;
  }
`;

export const Cards = styled.div`
  width: 3200px;

  margin-right: -10px;

  & > * {
    margin-right: 10px;
  }

  ${(p) => p.theme.media.max('mobile')} {
    margin-right: -5px;

    & > * {
      margin-right: 5px;
    }
  }
`;
