import React from 'react';
import { Header } from './Header';

interface MainProps {}

export const Main: React.FC<MainProps> = () => (
  <>
    <Header />
    <div>Main</div>
  </>
);
