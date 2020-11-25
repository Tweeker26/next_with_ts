import React from 'react';

import styles from './Pagination.module.css';

interface PaginationProps {
  pagesCount?: number;
  activePage: number;
  handleChangePage: (number) => void;
  handlePrevButton: () => void;
  handleNextButton: () => void;
  pagesOffset?: number;
}

const Pagination = ({
  pagesCount = 20,
  activePage,
  handleChangePage,
  handlePrevButton,
  handleNextButton,
  pagesOffset = 3,
}: PaginationProps) => {
  const pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    if (
      i <= pagesOffset ||
      i > pagesCount - pagesOffset ||
      (i >= activePage - pagesOffset && i <= activePage + pagesOffset)
    ) {
      pages.push(i);
    } else if (pages.slice(-1)[0] !== '...') pages.push('...');
  }

  return (
    <div className={styles.wrapper}>
      <ul className={styles.pagination}>
        <li className={styles.paginationItem}>
          <button onClick={handlePrevButton} className={styles.paginationLink} disabled={activePage === 1}>
            Prev
          </button>
        </li>

        {pages.map((page: number | string, index) => {
          return (
            <li className={styles.paginationItem} key={index}>
              <button
                onClick={() => handleChangePage(page)}
                className={`${styles.paginationLink} ${activePage === page ? styles.active : ''}`}
                disabled={page === '...'}
              >
                {page}
              </button>
            </li>
          );
        })}

        <li className={styles.paginationItem}>
          <button onClick={handleNextButton} className={styles.paginationLink} disabled={activePage === pagesCount}>
            Next
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
