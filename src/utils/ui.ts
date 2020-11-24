export const getModifiers = (
  base: string,
  rawModifiers: readonly string[],
) =>
  rawModifiers.reduce<{ [modifier: string]: string }>(
    (state, modifier) => {
      // eslint-disable-next-line
    state[modifier] = `${base}_${modifier}`;

      return state;
    },
    {},
  );

export const getText = (base: string, modifier: string) =>
  `${base} ${modifier}`;
