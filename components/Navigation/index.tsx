import React, { useState } from 'react';
import { Menu } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './Navigation.module.css';

const ROUTES = {
  HOME: {
    key: 'home',
    href: '/',
    text: 'Home',
  },
  PHOTOS: {
    key: 'photos',
    href: '/photos',
    text: 'Random photos',
  },
};

const Navigation = () => {
  const router = useRouter();
  const [current, setCurrent] = useState(router.pathname.slice(1));

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <nav className={styles.nav}>
      <Menu onClick={handleClick} mode="horizontal" selectedKeys={[current]}>
        <Menu.Item key={ROUTES.HOME.key}>
          <Link href={ROUTES.HOME.href}>{ROUTES.HOME.text}</Link>
        </Menu.Item>
        <Menu.Item key={ROUTES.PHOTOS.key}>
          <Link href={ROUTES.PHOTOS.href}>{ROUTES.PHOTOS.text}</Link>
        </Menu.Item>
      </Menu>
    </nav>
  );
};

export default Navigation;
