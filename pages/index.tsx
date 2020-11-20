import Layout from 'components/Layout'
import Gallery from 'components/Gallery'
import Stats from 'components/Stats'
import Collections from 'components/Collections'
import Photos from 'components/Photos'

const Home = () => {
  return (
    <Layout>
      <Stats />

      <Collections />

      <Gallery />

      <Photos />
    </Layout>
  )
}

export default Home
