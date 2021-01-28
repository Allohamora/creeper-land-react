import { createContext } from 'react';
import { Animate } from './Roulette/styles';
import { Case, Items } from 'services/caseService';

export type Status =
  | 'loading'
  | 'wait'
  | 'start'
  | 'started'
  | 'ended';

export type Result = null | 'string';

export interface Sizes {
  roulette: {
    cardFullWidth: number;
    cardMarginRight: number;
    cardWidth: number;

    containerHorizontalPadding: number;
  };
}

export interface ContextProperties {
  count: number;
  modifier: number;

  animate: Animate;
  isFirst: boolean;

  status: Status;
  result: Result;
  item: Case | null;
  line: Items;

  sizes: Sizes;
}

export type Context = ContextProperties;

export const CaseContext = createContext<Context>({
  count: 9,
  modifier: 17,

  animate: null,
  isFirst: true,

  status: 'loading',
  result: null,
  item: null,
  line: [],

  sizes: {
    roulette: {
      cardFullWidth: 120,
      cardMarginRight: 10,
      cardWidth: 110,

      containerHorizontalPadding: 44,
    },
  },
});

export { Case, Items };
