import { createContext } from 'react';
import { IconType } from 'components/Card/icons';
import { PaletteColor } from 'styles/theme';
import { HTMLMediaControls } from 'react-use/lib/util/createHTMLMediaHook';

export type Status =
  | 'loading'
  | 'wait'
  | 'start'
  | 'started'
  | 'ended';

export interface Item {
  id: string;
  title: string;
  icon: IconType;
  loader?: boolean;
  value: string;
  lines: PaletteColor;
}

export type Items = Item[];

export interface Case {
  title: string;
  icon: IconType;
  stock: number;
  items: Items;
}

export type Result = null | 'string';

interface Context {
  status: Status;
  result: Result;
  item: Case | null;
  controls: HTMLMediaControls;
  setResult: (result: null) => void;
  setStatus: (status: Status) => void;
}

export const CaseContext = createContext<Context>({
  status: 'loading',
  result: null,
  item: null,
  controls: {
    play: async () => {},
    pause: () => {},
    mute: () => {},
    unmute: () => {},
    volume: () => {},
    seek: () => {},
  },
  setResult: () => {},
  setStatus: () => {},
});
