import React, { useEffect, useReducer } from 'react';
import Footer from 'sections/Footer';
import Content from './Content';
import Header from './Header';
import Roulette from './Roulette';
import caseMock from 'mock/case.json';
import { reducer, initialState, Types } from './reducer';
import { useParams } from 'react-router-dom';

const Case: React.FC = () => {
  const params = useParams();

  const [state, dispatch] = useReducer(
    reducer,
    initialState,
  );

  useEffect(() => {
    dispatch({ type: Types.loading });

    (() => {
      setTimeout(() => {
        dispatch({
          type: Types.setCase,
          payload: caseMock,
        });
        dispatch({ type: Types.wait });
      }, 3000);
    })();
  }, [params]);

  const buttonClickHandler = () =>
    dispatch({ type: Types.start });

  return (
    <>
      <Header
        state={state}
        dispatch={dispatch}
        onButtonClick={buttonClickHandler}
      />
      <Roulette state={state} dispatch={dispatch} />
      <Content state={state} dispatch={dispatch} />
      <Footer />
    </>
  );
};

export default Case;
