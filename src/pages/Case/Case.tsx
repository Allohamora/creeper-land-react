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
  Status,
  PrizeId,
  Sizes,
  Items,
  Item as CaseItem,
} from './shared';
import { useAudio, useMedia } from 'react-use';
import { ThemeContext } from 'styled-components';
import { getCardsCountInBlock } from './services/count';
import { renderBlocks } from './services/block';
import {
  isFirstHandler,
  startedStatusHandler,
  songHandler,
} from './services/handlers';
import { getAnimateByStatus } from './services/animate';

const BLOCKS_COUNT = 10;

const Case: React.FC = () => {
  const params = useParams<{ id: string }>();

  const [status, setStatus] = useState<Status>('loading');
  const [prizeId, setPrizeId] = useState<PrizeId>(null);
  const [item, setItem] = useState<CaseItem>(null);
  const [isFirst, setIsFirst] = useState(true);
  const [blocks, setBlocks] = useState<Items>([]);

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

  const cardCountInBlock = getCardsCountInBlock(
    sizes.roulette,
    isMobile,
  );
  const blocksCount = BLOCKS_COUNT;
  const animate = getAnimateByStatus(
    sizes,
    cardCountInBlock,
    blocksCount,
    status,
  );

  // render, useLayoutEffect because need sync update after render
  useLayoutEffect(() => {
    const render = () => {
      const renderBlocksContext = {
        items: item ? item.items : null,
        prizeId,
        cardCountInBlock,
        blocksCount,
        blocks,
        isFirst,
      };
      isFirstHandler(status, isFirst, setIsFirst);
      setBlocks(renderBlocks(status, renderBlocksContext));
      startedStatusHandler(status, setStatus);
      songHandler(status, controls);
    };

    render();
    window.addEventListener('resize', render);

    return () =>
      window.removeEventListener('resize', render);
  }, [status, cardCountInBlock]);

  useEffect(() => {
    setStatus('loading');

    (async () => {
      const caseItem = await caseService.getById(params.id);

      setItem(caseItem);
      setStatus('wait');
    })();
  }, [params]);

  const buttonClickHandler = () => {
    if (!item) return;

    setStatus('start');
    // TODO: add prize logic request
    setPrizeId(_.sample(item.items)?.id as PrizeId);
  };

  const transitionEndHandler = () => {
    setStatus('ended');
    setBlocks(
      blocks.slice(blocks.length - cardCountInBlock),
    );
  };

  return (
    <>
      {audio}
      <Header
        status={status}
        item={item}
        onButtonClick={buttonClickHandler}
      />
      <Roulette
        status={status}
        cardCountInBlock={cardCountInBlock}
        blocks={blocks}
        sizes={sizes}
        animate={animate}
        onTransitionEnd={transitionEndHandler}
      />
      <Content item={item} status={status} />
      <Footer />
    </>
  );
};

export default Case;
