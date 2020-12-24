import React from 'react';
import Header from './Header';
import LatestBuys from './LatestBuys';
import Shop from './Shop';

const Main: React.FC = () => (
  <>
    {/* header */}
    <Header />

    {/* block 2 (shop) */}
    <Shop />

    {/* block 3 (latest buys) */}
    <LatestBuys />
  </>
);

export default Main;
