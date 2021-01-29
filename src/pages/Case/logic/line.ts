import _ from 'lodash';
import {
  ContextProperties,
  Items,
  Status,
} from '../shared';

// generate line
type Generate = (count: number, items?: Items) => Items;

export const loadingItems: Items = [
  {
    id: '1',
    title: 'loader',
    value: '123',
    lines: 'black',
    icon: 'enderman',
    loader: true,
  },
];

export const generate: Generate = (
  count,
  items = loadingItems,
) =>
  new Array(count)
    .fill(null)
    .map(() => _.sample(items)) as Items;

// handlers

const withResult = ({
  item,
  result,
  count,
  modifier,
}: ContextProperties): Items => {
  if (!item?.items) return [];

  const resultItem = item.items.find(
    ({ id }) => id === result,
  );
  if (!resultItem) return [];

  const items = generate(count * modifier - 1, item.items);

  const resultIndex =
    items.length - 1 - Math.floor(count / 2);

  items[resultIndex] = resultItem;

  return items;
};

type Handler = (context: ContextProperties) => Items;

const oneRandom: Handler = ({ count, item }) =>
  generate(count, item?.items);

const startHandler: Handler = (context) => {
  const generated = withResult(context);

  return [...context.line, ...generated];
};

const oneLast: Handler = ({ line, count }) =>
  line.slice(line.length - count);

const waitHandler: Handler = (context) => {
  const handler = context.isFirst ? oneRandom : oneLast;

  return handler(context);
};

const startedHandler: Handler = (context) => {
  const generated = withResult(context);
  const result = [
    ...context.line.slice(0, context.count),
    ...generated,
  ];

  if (result.length !== context.line.length) return result;
  return context.line;
};

type RenderStrategy = {
  [k in Status]: Handler;
};

const renderStrategy: RenderStrategy = {
  loading: oneRandom,
  start: startHandler,
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
