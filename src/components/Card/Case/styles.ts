import styled from 'styled-components';
import caseLights from 'assets/img/case_lights.png';
import Typography from 'components/Typography';

export const Wrap = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  width: 218px;
  height: 194px;

  background-color: ${(p) => p.theme.palette.white_3};
  background-image: url('${caseLights}');
  border-radius: 5px;
  cursor: pointer;

  transition: ${(p) => p.theme.transtions.primary};

  &:hover {
    background-color: ${(p) => p.theme.palette.white};
  }

  ${(p) => p.theme.media.max('mobile')} {
    width: 130px;
    height: 114px;

    background-size: cover;
  }
`;

export const Title = styled(Typography)`
  padding-top: 22px;
  padding-bottom: 13px;

  ${(p) => p.theme.media.max('mobile')} {
    padding-top: 12px;
    padding-bottom: 10px;
  }
`;

Title.defaultProps = {
  variant: 'h4',
  color: 'black',
};

export const Value = styled(Typography)`
  padding-top: 9px;
  padding-bottom: 15px;

  ${(p) => p.theme.media.max('mobile')} {
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

Value.defaultProps = {
  variant: 'h4',
  color: 'black',
};

export const Icon = styled.img`
  width: 94px;
  height: 94px;

  ${(p) => p.theme.media.max('mobile')} {
    width: 38px;
    height: 38px;
  }
`;
