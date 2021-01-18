import React from 'react';
import Title from '../Title';
import shopCasesMock from 'mock/shopCases.json';
import Card from 'components/Card';
import { IconType } from 'components/Card/icons';
import { Wrap, CasesWrap } from './styles';

const Cases: React.FC = () => (
  <Wrap>
    <Title type="case">Кейсы</Title>

    <CasesWrap>
      {shopCasesMock.map(({ icon, ...rest }, i) => (
        <Card
          variant="case"
          key={i}
          icon={icon as IconType}
          {...rest}
        />
      ))}
    </CasesWrap>
  </Wrap>
);

export default Cases;
