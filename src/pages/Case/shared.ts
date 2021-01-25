import { Dispatch, State } from './reducer';

export interface BaseProps {
  state: State;
  dispatch: Dispatch;
}
