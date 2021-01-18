import PeopleCard from 'components/PeopleCard';
import Typography from 'components/Typography';
import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;

  ${(p) => p.theme.media.max('tablet')} {
    flex-flow: column wrap;
    align-items: center;
  }
`;

export const Left = styled.div`
  max-width: 411px;
  padding-top: 45px;

  ${(p) => p.theme.media.max('tablet')} {
    padding-top: 24px;
  }
`;

export const LeftTitle = styled(Typography)`
  padding-bottom: 12px;
`;

LeftTitle.defaultProps = {
  variant: 'h2',
  color: 'white',
  weight: '500',
};

export const Ip = styled.div`
  display: flex;
  padding-top: 15px;

  > *:first-child {
    margin-right: 37px;
  }

  ${(p) => p.theme.media.max('tablet')} {
    justify-content: center;
  }
`;

export const Right = styled.div`
  display: flex;
  margin-right: -26px;

  padding-top: 90px;

  ${(p) => p.theme.media.max('tablet')} {
    justify-content: space-around;

    width: 100%;
    margin-right: 0;
    padding-top: 25px;
  }
`;

export const RightCard = styled(PeopleCard)`
  margin-right: 26px;

  &:last-child {
    padding-right: 19px;
  }

  ${(p) => p.theme.media.max('tablet')} {
    margin-right: 0;
  }
`;
