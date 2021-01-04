import React from 'react';
import Container from 'components/Container';
import Advantages from './Advantages';
import Chart from 'components/Chart';
import Top from './Top';
import { about } from './shared';
import './About.scss';

const About: React.FC = () => {
  return (
    <div className={about()}>
      <Container className={about('container')}>
        <Top />
        <Chart />
        <Advantages />
      </Container>
    </div>
  );
};

export default About;
