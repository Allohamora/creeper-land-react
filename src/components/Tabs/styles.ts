import styled from 'styled-components';
import { fontSize } from 'styles/helpers';

interface Active {
  active?: boolean;
}

export const ContentWrap = styled.div`
  padding-top: 26px;
`;

export const Content = styled.div<Active>`
  height: ${(p) => (p.active ? 'auto' : '0')};
  overflow: hidden;

  opacity: ${(p) => (p.active ? '1' : '0')};

  transition: ${(p) => p.theme.transtions.primary};
`;

export const Tab = styled.button<Active>`
  ${fontSize({ fs: 16, ln: 19, mfs: 11, mln: 12 })}

  padding: 10px 17px;

  color: ${(p) =>
    p.active
      ? p.theme.palette.white
      : p.theme.palette.black};
  font-weight: ${(p) => (p.active ? '500' : 'normal')};

  transition: all ${(p) => p.theme.transtions.primary},
    font-weight 0s;

  background: ${(p) =>
    p.active
      ? p.theme.palette.black
      : p.theme.palette.white_3};
  border-radius: 5px;

  &:hover {
    opacity: 0.7;
  }

  ${(p) => p.theme.media.max('mobile')} {
    padding: 8px 10px;
  }
`;

export const TabsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -20px;
  margin-bottom: -20px;

  > ${Tab} {
    margin-right: 20px;
    margin-bottom: 20px;
  }

  ${(p) => p.theme.media.max('mobile')} {
    margin-right: -12px;
    margin-bottom: -12px;

    > ${Tab} {
      margin-right: 12px;
      margin-bottom: 12px;
    }
  }
`;
