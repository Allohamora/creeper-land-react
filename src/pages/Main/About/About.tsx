import Container from 'components/Container';
import React from 'react';
import './About.scss';
import Top from './Top';

const block = 'main-about';
const About: React.FC = () => {
  return (
    <div className={block}>
      <Container>
        <Top />
      </Container>
    </div>
  );
};

export default About;
