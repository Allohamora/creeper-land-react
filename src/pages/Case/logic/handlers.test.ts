import { contextMock } from '../shared';
import {
  isFirstHandler,
  startStatusHandler,
} from './handlers';

describe('startStatusHandler', () => {
  let setStatus = jest.fn();

  beforeEach(() => {
    setStatus = jest.fn();
  });

  it('if status === start => change it to started', () => {
    startStatusHandler('start', setStatus);

    expect(setStatus).toBeCalledWith('started');
  });

  it('if status !== start => ignore', () => {
    startStatusHandler('loading', setStatus);

    expect(setStatus).not.toBeCalledWith('started');
  });
});

describe('isFirstHandler', () => {
  let setIsFirst = jest.fn();

  beforeEach(() => {
    setIsFirst = jest.fn();
  });

  it('if status === ended => change isFirst to false', () => {
    isFirstHandler(
      { ...contextMock, isFirst: true, status: 'ended' },
      setIsFirst,
    );
    expect(setIsFirst).toBeCalledWith(false);
  });

  it('if status === ended && isFirst === false => ignore', () => {
    isFirstHandler(
      { ...contextMock, isFirst: false, status: 'started' },
      setIsFirst,
    );
    expect(setIsFirst).not.toBeCalled();
  });

  it('if status !== ended || isFirst === false => ignore', () => {
    isFirstHandler(
      { ...contextMock, isFirst: false, status: 'loading' },
      setIsFirst,
    );
    expect(setIsFirst).not.toBeCalled();
  });
});
