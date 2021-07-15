import { Query } from '../shared';

export const removeOneRollFromLocation = (query: Query) => {
  const copy = { ...query };
  const { rolls } = copy;

  if (rolls === null || rolls === undefined) return { query: copy };

  if (Number(rolls) === 1) {
    delete copy.rolls;
  } else {
    copy.rolls = `${Number(rolls) - 1}`;
  }

  return { query: copy };
};

export const setRollsToLocation = (query: Query, rolls: number) => {
  const copy = { ...query };

  copy.rolls = String(rolls);

  return { query: copy };
};
