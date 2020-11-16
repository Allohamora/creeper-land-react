import React from 'react';

interface BurgerProps {}

export const Burger: React.FC<BurgerProps> = () => (
  <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 13H17M1 1H17H1ZM1 7H17H1Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);