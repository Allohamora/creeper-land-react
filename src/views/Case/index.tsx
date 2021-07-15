import React, { useContext, useEffect, useState } from 'react';
import _ from 'lodash';
import caseService from 'services/caseService';
import { Footer } from 'components/Footer';
import { Content } from './Content';
import { Header } from './Header';
import { Roulette } from './Roulette';
import { ModalWin } from 'components/Modal/ModalWin';
import {
  Status,
  Prize,
  Sizes,
  Items,
  Item as CaseItem,
  Query,
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
import {
  removeOneRollFromLocation,
  setRollsToLocation,
} from './services/location';
import { audio } from 'utils/files';
import { useRouter } from 'next/router';

const rollAudio = audio('roll.mp3');

const BLOCKS_COUNT = 10;

export const Case: React.FC = () => {
  const router = useRouter();

  const query = router.query as unknown as Query;
  const { rolls = null, id } = query;

  const [status, setStatus] = useState<Status>('loading');
  const [prize, setPrize] = useState<Prize>(null);
  const [item, setItem] = useState<CaseItem>(null);
  const [isFirst, setIsFirst] = useState(true);
  const [blocks, setBlocks] = useState<Items>([]);
  const [show, setShow] = useState(false);

  const theme = useContext(ThemeContext);
  const isMobile = useMedia(
    `(max-width: ${theme.breakpoints.mobile})`,
  );

  const [audioTag, , controls] = useAudio({
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
  useEffect(() => {
    const render = () => {
      const renderBlocksContext = {
        items: item ? item.items : null,
        prize,
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

    return () => window.removeEventListener('resize', render);
  }, [status, cardCountInBlock]);

  useEffect(() => {
    setStatus('loading');

    (async () => {
      const caseItem = await caseService.getById(id);

      setItem(caseItem);
      setStatus('wait');
    })();
  }, [id]);

  const rollButtonClickHandler = () => {
    if (!item) return;

    setStatus('start');
    // TODO: add prize logic request
    setPrize(_.sample(item.items) as Prize);
  };

  const buyButtonClickHandler = () => {
    // TODO add buy logic
    router.push(setRollsToLocation(query, 5));
  };

  const transitionEndHandler = () => {
    setStatus('ended');
    setBlocks(blocks.slice(blocks.length - cardCountInBlock));
    setShow(true);

    router.replace(removeOneRollFromLocation(query));
  };

  const modalCloseHandler = () => {
    setShow(false);
  };

  return (
    <>
      {audioTag}
      <Header
        status={status}
        item={item}
        onRollButtonClick={rollButtonClickHandler}
        onBuyButtonClick={buyButtonClickHandler}
        rolls={rolls}
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
      {prize && (
        <ModalWin
          rarity={prize.rarity}
          description={prize.title}
          card={prize}
          show={show}
          onClose={modalCloseHandler}
        />
      )}
    </>
  );
};
