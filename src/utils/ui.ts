export const getModifiers = (
  block: string,
  rawModifiers: readonly string[],
) =>
  rawModifiers.reduce<{ [modifier: string]: string }>(
    (state, modifier) => {
      // eslint-disable-next-line
      state[modifier] = `${block}_${modifier}`;

      return state;
    },
    {},
  );

export const getText = (block: string, modifier: string) =>
  `${block} ${modifier}`;
