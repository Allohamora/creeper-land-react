import React from 'react';
import Container from 'components/Container';
import Advantages from './Advantages';
import Chart from './Chart';
import Top from './Top';
import './About.scss';

const block = 'main-about';
const About: React.FC = () => {
  return (
    <div className={block}>
      <Container className={`${block}__container`}>
        <Top />
        <Chart />
        <Advantages />
      </Container>
    </div>
  );
};

export default About;
