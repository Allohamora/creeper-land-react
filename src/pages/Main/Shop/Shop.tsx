import React from 'react';
import Container from 'components/Container';
import ShopBlock from './ShopBlock';
import Promo from './Promo';
import Cases from './Cases';
import './Shop.scss';

const block = 'main-shop';

const Shop: React.FC = () => {
  return (
    <div className={`${block}__bg`}>
      <Container className={block}>
        <ShopBlock />
        <Promo />
        <Cases />
      </Container>
    </div>
  );
};

export default Shop;
