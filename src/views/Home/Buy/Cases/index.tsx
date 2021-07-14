import React from 'react';
import shopCasesMock from 'mock/shopCases.json';
import { Title } from '../Title';
import { CardCase as Card } from 'components/Card/CardCase';
import { Wrap, CasesWrap } from './styles';
import { Link } from 'router';

export const Cases: React.FC = () => (
  <Wrap>
    <Title type="case">Кейсы</Title>

    <CasesWrap>
      {shopCasesMock.map(({ icon, ...rest }, i) => (
        <Link href="/case/123" key={i}>
          <Card icon={icon} {...rest} />
        </Link>
      ))}
    </CasesWrap>
  </Wrap>
);
