import React from 'react';
import Container from 'components/Container';
import HowToStart from './HowToStart';
import Privilege from './Privilege';
import Rules from './Rules';
import { description } from './shared';
import './Description.scss';

const Description: React.FC = () => {
  return (
    <div className={description()}>
      <Container className={description('container')}>
        <HowToStart />
        <Rules />
        <Privilege />
      </Container>
    </div>
  );
};

export default Description;
