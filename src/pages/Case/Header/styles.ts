import styled from 'styled-components';
import ButtonComponent from 'components/Button/Contained';
import { fontSize } from 'styles/helpers';

export const Wrap = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  padding-top: 55px;
`;

export const Icon = styled.img`
  width: 159px;
  height: 156px;
  margin-top: 12px;
`;

export const Button = styled(ButtonComponent)`
  ${fontSize({ fs: 18, ln: 21, mfs: 14, mln: 17 })}
  font-weight: 500;

  margin: 20px 0 27px;
  padding: 14px 94px;
`;
