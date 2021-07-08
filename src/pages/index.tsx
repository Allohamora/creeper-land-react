import { GetStaticProps } from 'next';
import Home from 'views/Home';

export const getStaticProps: GetStaticProps<{}> = async () => ({
  props: {}
});

export default Home;