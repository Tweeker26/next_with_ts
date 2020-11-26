import Layout from 'components/Layout';
import User from 'components/User';
import Gallery from 'components/Gallery';
import Stats from 'components/Stats';
import Collections from 'components/Collections';
import React from 'react';

const Home = () => {
  return (
    <Layout>
      <User />

      <Stats />

      <Collections />

      <Gallery />
    </Layout>
  );
};

export default Home;
