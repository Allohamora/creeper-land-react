import React, { useEffect, useState } from 'react';
import Footer from 'sections/Footer';
import Content from './Content';
import Header from './Header';
import Roulette from './Roulette';
import caseMock from 'mock/case.json';
import _ from 'lodash';
import rollAudio from 'assets/audio/roll.mp3';
import { useParams } from 'react-router-dom';
import {
  Case as CaseType,
  Status,
  Result,
  CaseContext,
} from './shared';
import { useAudio } from 'react-use';

const Case: React.FC = () => {
  const params = useParams();

  const [status, setStatus] = useState<Status>('loading');
  const [result, setResult] = useState<Result>(null);
  const [item, setItem] = useState<CaseType | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [audio, state, controls] = useAudio({
    src: rollAudio,
  });

  useEffect(() => {
    setStatus('loading');

    (() => {
      // fetch mock
      setTimeout(() => {
        setItem(caseMock as CaseType);
        setStatus('wait');
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
      value={{
        status,
        result,
        item,
        controls,
        setResult,
        setStatus,
      }}
    >
      {audio}
      <Header onButtonClick={buttonClickHandler} />
      <Roulette />
      <Content />
      <Footer />
    </CaseContext.Provider>
  );
};

export default Case;
