import React from 'react';
import Header from 'blocks/Header';
import About from 'blocks/About';
import LatestBuys from 'blocks/LatestBuys';
import Buy from 'blocks/Buy';
import Description from 'blocks/Description';
import Footer from 'blocks/Footer';

const Main: React.FC = () => (
  <>
    <Header content lines />
    <Buy />
    <LatestBuys />
    <About />
    <Description />
    <Footer />
  </>
);

export default Main;
