import { Case, Items } from 'services/caseService';
import { RouletteSizes } from './services/count';

export type Status =
  | 'loading'
  | 'wait'
  | 'start'
  | 'started'
  | 'ended';

export type PrizeId = null | string;

export type Item = Case | null;

export interface Sizes {
  roulette: RouletteSizes;
}

export { Case, Items };
