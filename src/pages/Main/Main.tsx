import React from 'react';
import Header from 'components/Header';
import About from './About';
import LatestBuys from './LatestBuys';
import Shop from './Shop';

const Main: React.FC = () => (
  <>
    {/* header */}
    <Header content lines />

    {/* block 2 (shop, promo, cases) */}
    <Shop />

    {/* block 3 (latest buys) */}
    <LatestBuys />

    {/* block 4 (about, chart, benefits) */}
    <About />
  </>
);

export default Main;
