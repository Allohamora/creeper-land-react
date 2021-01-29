import { Items } from '../shared';
import { generate, loadingItems } from './line';

describe('generate', () => {
  const count = 5;

  it('must work if items === undefined', () => {
    expect(() => generate(count)).not.toThrowError();
  });

  it('generated.length === count', () => {
    expect(generate(count)).toHaveLength(count);
  });

  it('can override items', () => {
    const items: Items = [
      {
        ...loadingItems[0],
        id: '5',
      },
    ];

    const expected = Array.from(
      { length: count },
      () => items[0],
    );

    expect(generate(count, items)).toEqual(expected);
  });
});
