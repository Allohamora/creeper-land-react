import React from 'react';
import WebFocus from 'assets/icons/WebFocus.svg';
import { Navbar } from 'components/Navbar';
import { Typography } from 'components/Typography';
import {
  Wrap,
  Container,
  MobileHidden,
  Bottom,
  Design,
} from './styles';

export const Footer: React.FC = () => (
  <Wrap>
    <Container>
      <Navbar footer />

      <MobileHidden>
        <Bottom>
          <Typography variant="p2" color="white">
            Copyright 2020
          </Typography>

          <Design>
            <WebFocus />
            <Typography variant="p2" color="white">
              Designed by WebFocus
            </Typography>
          </Design>
        </Bottom>
      </MobileHidden>
    </Container>
  </Wrap>
);
