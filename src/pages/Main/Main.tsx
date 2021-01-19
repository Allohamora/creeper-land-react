import React from 'react';
import Header from 'sections/Header';
import About from 'sections/About';
import LatestBuys from 'sections/LatestBuys';
import Buy from 'sections/Buy';
import Description from 'sections/Description';
import Footer from 'sections/Footer';

const Main: React.FC = () => (
  <>
    <Header content lines="1" />
    <Buy />
    <LatestBuys />
    <About />
    <Description />
    <Footer />
  </>
);

export default Main;
