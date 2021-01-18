import styled from 'styled-components';
import cardLights from 'assets/img/card_lights.png';
import Typography from 'components/Typography';

export const Title = styled(Typography)`
  padding-top: 19px;
  padding-bottom: 19px;

  ${(p) => p.theme.media.max('mobile')} {
    padding-top: 15px;
    padding-bottom: 10px;

    font-size: 9px;
    line-height: 11px;
  }
`;

Title.defaultProps = {
  variant: 'h4',
};

export const Value = styled(Typography)`
  padding-top: 19px;
  padding-bottom: 19px;

  ${(p) => p.theme.media.max('mobile')} {
    padding-top: 10px;
    padding-bottom: 11px;

    font-size: 9px;
    line-height: 11px;
  }
`;

Value.defaultProps = {
  variant: 'h4',
};

export const Icon = styled.img`
  display: block;
  width: 75px;
  height: 75px;

  ${(p) => p.theme.media.max('mobile')} {
    width: 44px;
    height: 44px;
  }
`;

export const Wrap = styled.div`
  position: relative;

  display: flex;
  flex-flow: column wrap;
  align-items: center;
  width: 220px;

  color: ${(p) => p.theme.palette.black};

  background-color: ${(p) => p.theme.palette.white_3};
  border-radius: 5px;
  cursor: pointer;

  transition: ${(p) => p.theme.transtions.primary};

  &:hover {
    top: -2px;

    color: ${(p) => p.theme.palette.white};

    background-color: ${(p) => p.theme.palette.black};
    background-image: url('${cardLights}');
    box-shadow: -2px -3px 6px rgba(91, 246, 79, 0.5),
      2px 3px 7px rgba(91, 246, 79, 0.5);

    ${Title},
    ${Value} {
      color: ${(p) => p.theme.palette.white};
    }
  }

  ${(p) => p.theme.media.max('mobile')} {
    width: 130px;
    height: 114px;

    background-size: cover;
  }
`;
