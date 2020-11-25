import Layout from 'components/Layout';
import Gallery from 'components/Gallery';
import Stats from 'components/Stats';
import Collections from 'components/Collections';

const Home = () => {
  return (
    <Layout>
      <Stats />

      <Collections />

      <Gallery />
    </Layout>
  );
};

export default Home;
