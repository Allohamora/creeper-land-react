// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
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

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getText = (block: string, modifier: string) =>
  `${block} ${modifier}`;
