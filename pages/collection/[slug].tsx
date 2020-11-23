import Head from 'next/head'
import { useRouter } from 'next/router'
import Layout from 'components/Layout'
import Gallery from 'components/Gallery'
import Collections from 'components/Collections'
import { siteTitle } from '../_document'

const Collection = () => {
  const router = useRouter()
  const collection_id = router.query.id
    ? parseInt(router.query.id.toString())
    : null

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Collections id_collection={collection_id} />

      <Gallery id_collection={collection_id} />
    </Layout>
  )
}

export default Collection
