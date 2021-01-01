import React from 'react';
import Container from 'components/Container';
import Shop from './Shop';
import Sale from './Sale';
import Cases from './Cases';
import { buy } from './shared';
import './Buy.scss';

const Buy: React.FC = () => {
  return (
    <div className={buy('bg')}>
      <Container className={buy()}>
        <Shop />
        <Sale />
        <Cases />
      </Container>
    </div>
  );
};

export default Buy;
