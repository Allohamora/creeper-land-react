import React from 'react';
import { Header } from 'components/Header';
import { About } from './About';
import { LatestBuys } from './LatestBuys';
import { Buy } from './Buy';
import { Description } from './Description';
import { Footer } from 'components/Footer';

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
