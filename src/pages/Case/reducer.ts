import { Reducer, Dispatch as ReactDispatch } from 'react';
import { IconType } from 'components/Card/icons';
import { PaletteColor } from 'styles/theme';
import { ValueOf } from 'types/base';

export enum Types {
  wait = 'CASE_WAIT',
  start = 'CASE_START',
  started = 'CASE_STARTED',
  ended = 'CASE_ENDED',

  loading = 'CASE_LOADING',

  setCase = 'CASE_SET_CASE',
}

export interface Item {
  id: number;
  title: string;
  icon: IconType;
  loader?: boolean;
  value: string;
  lines: PaletteColor;
}

export interface State {
  status:
    | 'wait'
    | 'start'
    | 'started'
    | 'ended'
    | 'loading';
  result?: Item;
  stateCase?: {
    title: string;
    icon: IconType;
    stock: 5;
    items: Item[];
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface Action<T = any> {
  type: ValueOf<typeof Types>;
  payload?: T;
}

export type Dispatch = ReactDispatch<Action>;

export const initialState: State = {
  status: 'loading',
};

export const reducer: Reducer<State, Action> = (
  state,
  action,
) => {
  switch (action.type) {
    case Types.loading:
      return { ...state, status: 'loading' };
    case Types.wait:
      return { ...state, status: 'wait' };
    case Types.ended:
      return { ...state, status: 'ended' };
    case Types.started:
      return { ...state, status: 'started' };
    case Types.start:
      return { ...state, status: 'start' };
    case Types.setCase:
      return { ...state, stateCase: action.payload };
    default:
      return state;
  }
};
