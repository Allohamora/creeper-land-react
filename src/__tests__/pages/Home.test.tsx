import Home, { getStaticProps } from 'pages/index';
import { render } from '@testing-library/react';

test('getStaticProps return correct props', async () => {
  const result = await getStaticProps({});

  expect(result).toEqual({ props: {} });
});

test('correct Home render', () => {
  expect(() => render(<Home />)).not.toThrowError();
});
