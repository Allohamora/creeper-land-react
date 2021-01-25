import { Reducer, Dispatch as ReactDispatch } from 'react';
import { ValueOf } from 'types/base';

export enum Types {
  wait = 'CASE_WAIT',
  start = 'CASE_START',
  started = 'CASE_STARTED',
  ended = 'CASE_ENDED',
}

export interface State {
  status: keyof typeof Types;
}

interface Action {
  type: ValueOf<typeof Types>;
}

export type Dispatch = ReactDispatch<Action>;

export const initialState: State = {
  status: 'wait',
};

export const reducer: Reducer<State, Action> = (
  state,
  action,
) => {
  switch (action.type) {
    case Types.wait:
      return { ...state, status: 'wait' };
    case Types.ended:
      return { ...state, status: 'ended' };
    case Types.started:
      return { ...state, status: 'started' };
    case Types.start:
      return { ...state, status: 'start' };
    default:
      return state;
  }
};
