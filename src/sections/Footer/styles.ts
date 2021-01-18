import styled from 'styled-components';
import ContainerComponent from 'components/Container';

export const Wrap = styled.div`
  background-color: ${(p) => p.theme.palette.black};
`;

export const Container = styled(ContainerComponent)`
  padding-top: 36px;
  padding-bottom: 33px;

  ${(p) => p.theme.media.max('mobile')} {
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;

export const MobileHidden = styled.div`
  ${(p) => p.theme.media.max('mobile')} {
    display: none;
  }
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 17px;
`;

export const Design = styled.div`
  display: flex;

  svg {
    margin-right: 10px;
  }
`;
