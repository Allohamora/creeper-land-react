import styled from 'styled-components';
import cardLights from 'assets/img/card_lights.png';
import Typography from 'components/Typography';

export const Wrap = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  width: 218px;
  height: 194px;

  background-color: ${(p) => p.theme.palette.gray};
  background-image: url('${cardLights}');
  border-radius: 5px;

  ${(p) => p.theme.media.max('mobile')} {
    width: 130px;
    height: 116px;

    background-size: cover;
  }
`;

export const IconWrap = styled.div`
  margin-top: auto;

  ${(p) => p.theme.media.max('mobile')} {
    transform: scale(0.6);
  }
`;

export const Title = styled(Typography)`
  max-width: 129px;
  margin-top: 18px;
  margin-bottom: 22px;

  text-align: center;

  ${(p) => p.theme.media.max('mobile')} {
    max-width: 70px;
    margin-top: 11px;
    margin-bottom: 14px;

    font-size: ${(p) => p.theme.pxToRem(10)};
    line-height: ${(p) => p.theme.pxToRem(11)};
  }
`;

Title.defaultProps = {
  variant: 'h4',
  weight: '500',
  color: 'white',
};
