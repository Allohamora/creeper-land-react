import React from 'react';
import Header from 'blocks/Header';
import About from 'blocks/About';
import LatestBuys from 'blocks/LatestBuys';
import Buy from 'blocks/Buy';

const Main: React.FC = () => (
  <>
    {/* header */}
    <Header content lines />

    {/* block 2 (shop, promo, cases) */}
    <Buy />

    {/* block 3 (latest buys) */}
    <LatestBuys />

    {/* block 4 (about, chart, benefits) */}
    <About />
  </>
);

export default Main;
