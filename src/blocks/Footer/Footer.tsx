import React from 'react';
import Navbar from 'blocks/Navbar';
import Container from 'components/Container';
import Typography from 'components/Typography';
import { cn } from 'utils/bem';
import { ReactComponent as WebFocus } from 'assets/WebFocus.svg';
import './Footer.scss';

const footer = cn('Footer');

const Footer: React.FC = () => {
  return (
    <div className={footer()}>
      <Container className={footer('container')}>
        <Navbar footer />

        <div className={footer('hidden')}>
          <div className={footer('bottom')}>
            <Typography variant="p2" color="white">
              Copyright 2020
            </Typography>

            <div className={footer('design')}>
              <WebFocus />
              <Typography variant="p2" color="white">
                Designed by WebFocus
              </Typography>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
