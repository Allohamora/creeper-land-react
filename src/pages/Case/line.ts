import _ from 'lodash';
import { ContextProperties, Items, Status } from './shared';

// generate line

type Generate = (count: number, items?: Items) => Items;

const generate: Generate = (
  count,
  items = [
    {
      id: '1',
      title: 'loader',
      value: '123',
      lines: 'black',
      icon: 'enderman',
      loader: true,
    },
  ],
) =>
  new Array(count)
    .fill(null)
    .map(() => _.sample(items)) as Items;

// handlers

type Handler = (context: ContextProperties) => Items;

const oneRandom: Handler = ({ count, item }) =>
  generate(count, item?.items);

const fullLine: Handler = ({
  count,
  item,
  result,
  line,
  modifier,
}) => {
  if (!item?.items) return [];

  const resultItem = item.items.find(
    ({ id }) => id === result,
  );
  if (!resultItem) return [];

  const items = generate(count * modifier - 1, item.items);

  const resultIndex =
    items.length - 1 - Math.floor(count / 2);

  items[resultIndex] = resultItem;

  return [...line, ...items];
};

const oneLast: Handler = ({ line, count }) =>
  line.slice(line.length - count);

const waitHandler: Handler = (context) => {
  const handler = context.isFirst ? oneRandom : oneLast;

  return handler(context);
};

const startedHandler: Handler = ({ line }) => line;

type RenderStrategy = {
  [k in Status]: Handler;
};

const renderStrategy: RenderStrategy = {
  loading: oneRandom,
  start: fullLine,
  started: startedHandler,
  wait: waitHandler,
  ended: oneLast,
};

export const renderLine = (
  context: ContextProperties,
  strategy: RenderStrategy = renderStrategy,
): Items => {
  const { status } = context;

  const handler = strategy[status];

  return handler(context);
};

export const startStatusHandler = (
  status: Status,
  setStatus: (status: Status) => void,
) => {
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
