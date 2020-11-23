export const getVariants = (
  base: string,
  variants: readonly string[],
) =>
  variants.reduce<{ [variant: string]: string }>((state, variant) => {
    // eslint-disable-next-line
  state[variant] = `${base}_${variant}`;

    return state;
  }, {});
