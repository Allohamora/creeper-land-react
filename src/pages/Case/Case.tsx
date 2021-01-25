import React, { useReducer } from 'react';
import Footer from 'sections/Footer';
import Content from './Content';
import Header from './Header';
import Roulette from './Roulette';
import { reducer, initialState, Types } from './reducer';

const Case: React.FC = () => {
  const [state, dispatch] = useReducer(
    reducer,
    initialState,
  );

  const buttonClickHandler = () =>
    dispatch({ type: Types.start });

  return (
    <>
      <Header onButtonClick={buttonClickHandler} />
      <Roulette state={state} dispatch={dispatch} />
      <Content />
      <Footer />
    </>
  );
};

export default Case;
