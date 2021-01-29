import { ContextProperties, Status } from '../shared';

export const startStatusHandler = (
  status: Status,
  setStatus: (status: Status) => void,
): void => {
  if (status === 'start') {
    setStatus('started');
  }
};

export const isFirstHandler = (
  context: ContextProperties,
  setIsFirst: (isFirst: boolean) => void,
): void => {
  const { isFirst, status } = context;

  if (!isFirst || status !== 'ended') return;

  setIsFirst(false);
};
