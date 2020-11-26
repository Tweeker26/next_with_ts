import React from 'react';
import { Pagination as DefaultPagination } from 'antd';

import styles from './Pagination.module.css';

interface PaginationProps {
  pagesCount?: number;
  activePage: number;
  handleChangePage: (number) => void;
  pagesOffset?: number;
  pageSize?: number;
}

const Pagination = ({
  pagesCount = 20,
  activePage,
  handleChangePage,
  pagesOffset = 3,
  pageSize = 20,
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
      <DefaultPagination
        defaultCurrent={activePage}
        total={pagesCount * pageSize}
        pageSize={pageSize}
        onChange={handleChangePage}
        showSizeChanger={false}
        className={styles.pagination}
      />
    </div>
  );
};

export default Pagination;
