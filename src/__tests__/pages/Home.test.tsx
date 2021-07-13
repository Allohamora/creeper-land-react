import Home, { getStaticProps } from 'pages/index';
import { renderInAppContext } from '__tests__/react-test';

test('getStaticProps return correct props', async () => {
  const result = await getStaticProps({});

  expect(result).toEqual({ props: {} });
});

test('correct Home render', () => {
  expect(() => renderInAppContext(<Home />)).not.toThrowError();
});
