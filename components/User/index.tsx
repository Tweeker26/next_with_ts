import useSWR from 'swr'
import fetcher from 'libs/fetcher'
import Link from 'next/link'
import Social from 'components/Social'

import styles from './User.module.css'

const User = () => {
  const { data, error } = useSWR('/api/user', fetcher)

  if (error) return <div>failed to load</div>

  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          {data && (
            <img
              src={data.profile_image.large}
              className={`${styles.headerImage} ${styles.borderCircle}`}
              alt={data.name}
            />
          )}
        </a>
      </Link>
      <h2 className={styles.headingLg}>
        <Link href="/">
          <a>{data ? data.name : ''}</a>
        </Link>
      </h2>

      {data ? <Social user={data} /> : ''}

      {data?.bio ? <p>{data.bio}</p> : null}
    </header>
  )
}

export default User
