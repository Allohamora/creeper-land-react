import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';
import Footer from 'sections/Footer';
import Content from './Content';
import Header from './Header';
import Roulette from './Roulette';
import _ from 'lodash';
import rollAudio from 'assets/audio/roll.mp3';
import caseService from 'services/caseService';
import { useParams } from 'react-router-dom';
import {
  Case as CaseType,
  Status,
  Result,
  CaseContext,
  Context,
  Sizes,
  Items,
} from './shared';
import { useAudio, useMedia } from 'react-use';
import { ThemeContext } from 'styled-components';
import { getAnimate, getCount } from './size';
import {
  renderLine,
  isFirstHandler,
  startStatusHandler,
} from './line';
import { renderRollSong } from './song';

const MODIFIER = 18;

const Case: React.FC = () => {
  const params = useParams();

  const [status, setStatus] = useState<Status>('loading');
  const [result, setResult] = useState<Result>(null);
  const [item, setItem] = useState<CaseType | null>(null);
  const [isFirst, setIsFirst] = useState(true);
  const [line, setLine] = useState<Items>([]);

  const theme = useContext(ThemeContext);
  const isMobile = useMedia(
    `(max-width: ${theme.breakpoints.mobile})`,
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [audio, state, controls] = useAudio({
    src: rollAudio,
  });

  const cardWidth = isMobile ? 56 : 110;
  const cardMarginRight = isMobile ? 5 : 10;
  const cardFullWidth = cardWidth + cardMarginRight;

  const containerHorizontalPadding = isMobile ? 25 : 44;

  const sizes: Sizes = {
    roulette: {
      cardWidth,
      cardMarginRight,
      cardFullWidth,
      containerHorizontalPadding,
    },
  };

  const count = getCount(sizes);
  const modifier = MODIFIER;

  const context: Context = {
    count,
    modifier,

    animate: getAnimate(sizes, count, modifier, status),
    isFirst,

    status,
    result,
    item,
    line,

    sizes,
  };

  // render, useLayoutEffect because need sync update after render
  useLayoutEffect(() => {
    isFirstHandler(context, setIsFirst);
    setLine(renderLine(context));
    startStatusHandler(status, setStatus);
    renderRollSong(status, controls);
  }, [status]);

  useEffect(() => {
    setStatus('loading');

    (async () => {
      const caseItem = await caseService.getById();

      setItem(caseItem);
      setStatus('wait');
    })();
  }, [params]);

  const buttonClickHandler = () => {
    if (!item) return;

    setStatus('start');
    setResult(_.sample(item.items)?.id as Result);
  };

  const transitionEndHandler = () => setStatus('ended');

  return (
    <CaseContext.Provider value={context}>
      {audio}
      <Header onButtonClick={buttonClickHandler} />
      <Roulette onTransitionEnd={transitionEndHandler} />
      <Content />
      <Footer />
    </CaseContext.Provider>
  );
};

export default Case;
