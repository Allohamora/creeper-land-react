import React from 'react';
import { Header } from './Header';

interface MainProps {};

export const Main: React.FC<MainProps> = (props) => {

  return (
    <>
      <Header />
      <div>Main</div>
    </>
  );
};
