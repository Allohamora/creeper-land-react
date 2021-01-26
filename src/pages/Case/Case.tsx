import React, { useEffect, useState } from 'react';
import Footer from 'sections/Footer';
import Content from './Content';
import Header from './Header';
import Roulette from './Roulette';
import caseMock from 'mock/case.json';
import _ from 'lodash';
import { useParams } from 'react-router-dom';
import {
  Case as CaseType,
  Status,
  Result,
  CaseContext,
} from './shared';

const Case: React.FC = () => {
  const params = useParams();

  const [status, setStatus] = useState<Status>('loading');
  const [result, setResult] = useState<Result>(null);
  const [item, setItem] = useState<CaseType | null>(null);

  useEffect(() => {
    setStatus('loading');

    (() => {
      setTimeout(() => {
        setStatus('wait');

        setItem(caseMock as Case);
      }, 3000);
    })();
  }, [params]);

  const buttonClickHandler = () => {
    if (!item) return;

    setStatus('start');
    setResult(_.sample(item.items)?.id as Result);
  };

  return (
    <CaseContext.Provider
      value={{ status, result, item, setResult, setStatus }}
    >
      <Header onButtonClick={buttonClickHandler} />
      <Roulette />
      <Content />
      <Footer />
    </CaseContext.Provider>
  );
};

export default Case;
