import useSWR from 'swr'
import fetcher from 'libs/fetcher'
import UImage from 'components/UImage'

import styles from './Gallery.module.css'

interface GalleryProps {
  id_collection?: number
}

const Gallery = ({ id_collection }: GalleryProps) => {
  const { data, error } = useSWR(
    '/api/photo' + (id_collection ? `/${id_collection}` : ''),
    fetcher
  )

  if (error) return <div>failed to load</div>

  if (!data) return <div>loading...</div>

  return (
    <section className={styles.gallery_container}>
      {data.map(({
        id,
        urls,
        user,
        alt_description,
        description,
        width,
        height,
      }) => (
        <UImage
          id={id}
          urls={urls}
          user={user}
          orientation={width > height ? 'horizontal' : 'vertical'}
          altDescription={alt_description ? alt_description : description}
          key={`${id}_uimage_component`}
        />
      ))}
    </section>
  )
}

export default Gallery
