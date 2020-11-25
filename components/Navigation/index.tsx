import React, { useState } from 'react';
import { Menu } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './Navigation.module.css';

const Navigation = () => {
  const router = useRouter();
  const [current, setCurrent] = useState(router.pathname.slice(1));

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <nav className={styles.nav}>
      <Menu onClick={handleClick} mode="horizontal" selectedKeys={[current]}>
        <Menu.Item key="home">
          <Link href="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="photos">
          <Link href="/photos">Random photos</Link>
        </Menu.Item>
        <Menu.Item key="top">
          <Link href="/top">Top users</Link>
        </Menu.Item>
      </Menu>
    </nav>
  );
};

export default Navigation;
