import useSWR from 'swr'
import fetcher from 'libs/fetcher'
import styles from './Photos.module.css'
import UImage from 'components/UImage'

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
        {data.map(({ id, urls, alt_description, description }) => (
          <UImage
            id={id}
            urls={urls}
            altDescription={alt_description ? alt_description : description}
            key={`${id}_uimage_component`}
          />
        ))}
      </section>
    </>
  )
}

export default Photos
