import Typography from 'components/Typography';
import ButtonComponent from 'components/Button';
import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;

  ${(p) => p.theme.media.max('laptop')} {
    flex-flow: column wrap;
  }
`;

export const Wellcome = styled(Typography)`
  margin-bottom: 21px;

  ${(p) => p.theme.media.max('mobile')} {
    margin-bottom: 10px;
  }
`;

Wellcome.defaultProps = {
  variant: 'h1',
  color: 'white',
};

export const Description = styled(Typography)`
  margin-bottom: 16px;

  ${(p) => p.theme.media.max('mobile')} {
    width: 100%;
    max-width: 203px;
    margin-right: auto;
    margin-bottom: 14px;
    margin-left: auto;
  }
`;

Description.defaultProps = {
  variant: 'p1',
  color: 'white',
};

export const Text = styled.div`
  max-width: 430px;
  padding-top: 77px;
  padding-bottom: 100px;

  ${(p) => p.theme.media.max('laptop')} {
    margin-right: auto;
    margin-left: auto;
    padding-top: 50px;
    padding-bottom: 0;

    text-align: center;
  }

  ${(p) => p.theme.media.max('mobile')} {
    padding-top: 28px;
  }
`;

export const Joystick = styled.img`
  display: block;
  width: 394px;
  height: 398px;

  ${(p) => p.theme.media.max('laptop')} {
    margin-right: auto;
    margin-left: auto;
  }

  ${(p) => p.theme.media.max('mobile')} {
    width: 100%;
    max-width: 200px;
    height: auto;
    max-height: 200px;
  }
`;

export const Button = styled(ButtonComponent)`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  ${(p) => p.theme.media.max('laptop')} {
    margin-right: auto;
    margin-left: auto;
  }

  ${(p) => p.theme.media.max('mobile')} {
    width: 100%;
  }
`;

export const Ip = styled(Typography)`
  margin-right: 50px;

  ${(p) => p.theme.media.max('laptop')} {
    margin-right: 0;
  }
`;

Ip.defaultProps = {
  variant: 'p1',
  color: 'lime_2',
};

export const Data = styled.div`
  display: flex;
  margin-bottom: 23px;

  ${(p) => p.theme.media.max('laptop')} {
    justify-content: space-between;
    margin-bottom: 18px;
  }
`;
