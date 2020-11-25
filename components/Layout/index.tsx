import React from 'react';
import User from 'components/User';
import Navigation from 'components/Navigation';

import styles from './layout.module.css';

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <Navigation />
      <User />

      <main>{children}</main>
    </div>
  );
};

export default Layout;
