import { useState } from 'react';
import useSWR from 'swr';
import fetcher from 'libs/fetcher';
import UImage from 'components/UImage';
import Pagination from 'components/Pagination';

import styles from './Photos.module.css';

const Photos = () => {
  const [page, setPage] = useState(1);
  const { data, error } = useSWR(`/api/photo/allPhotos/${page}`, fetcher);

  if (error) return <div>failed to load</div>;

  if (!data) return <div>loading...</div>;

  return (
    <>
      <h2>Latest photos from different people</h2>
      <section className={styles.photos_container}>
        {data.map(({ id, urls, user, alt_description, description, width, height }) => (
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
      <Pagination
        activePage={page}
        handleChangePage={setPage}
        handlePrevButton={() => setPage(page - 1)}
        handleNextButton={() => setPage(page + 1)}
      />
    </>
  );
};

export default Photos;
