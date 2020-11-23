import useSWR from 'swr'
import fetcher from 'libs/fetcher'
import UImage from 'components/UImage'

import styles from './Photos.module.css'

const Photos = () => {
  const { data, error } = useSWR(
    '/api/photo/allPhotos',
    fetcher
  )

  if (error) return <div>failed to load</div>

  if (!data) return <div>loading...</div>

  return (
    <>
      <h2>
        Latest photos from different people
      </h2>
      <section className={styles.photos_container}>
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
            altDescription={alt_description || description || user.username}
            key={`${id}_uimage_component`}
          />
        ))}
      </section>
    </>
  )
}

export default Photos
